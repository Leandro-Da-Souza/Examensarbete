<template>
  <div class="user-photos">
    <div v-if="this.userPhotos.length === 0">
      <p>Du har inte laddat upp några bilder än, använd formuläret ovanför!</p>
    </div>
    <div v-else>
      <h2>Dina bilder</h2>
      <ul>
        <li v-for="(photo,index) in userPhotos" :key="index + ''">
          <img :src="photo.img" alt="">
          <div>
            <p>{{photo.description | truncateText(15)}}</p>
            <i class="fas fa-times-circle" @click="deletePhoto(photo)"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import db from '../db'

export default {
    name: 'UserPhotos',
    data() {
      return {
        userPhotos: []
      }
    },
    methods: {
      async getUserPhotos() {
          await db.database().ref('images').on('value', snap => {
          snap.forEach(key => {
            if(key.val().user === localStorage.getItem('uid')) {
              if(this.userPhotos.findIndex(i => i.img === key.val().img) > -1) {
                console.log('image exists')
              }
              else {
                this.userPhotos.push(key.val())
              }
            }
          })
        })
        },
        async deletePhoto(photo) {
          console.log(photo)
          let image = await db.storage().ref().child(`images/${photo.user}/${photo.name}`);
          await image.delete().then(() => {
            }).catch(e => {
              console.log(e)
          }) 

          await db.database().ref('images').on('value', snap => {
            snap.forEach(key => {
              if(key.val().name === photo.name) {
                key.ref.remove()
                this.userPhotos = this.userPhotos.filter(photo => photo.name !== key.val().name)
              }  
            })
          })
          
          
        }
    },
    filters: {
      truncateText(text, length) {
        if(text.length <= length) {
          return text;
        }
        return text.substr(0, length) + '\u2026';
      }
    },
    mounted() {
      this.getUserPhotos()
    }
}
</script>

<style lang="scss" scoped>
  .user-photos {
    h2 {
      color: #272727;
      text-align: center;
      font-weight: normal;
      letter-spacing: 1.5px;
      margin: 20px 0;
    }
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      list-style-type: none;
      justify-items: center;
      li {
        display: flex;
        flex-direction: column;
        i {
          justify-self: flex-end;
          align-self: flex-end;
        }
        img {
          position: relative;
          // margin: 20px 0 0 0;
          margin-top: 5px;
          max-width: 140px;
          height: 140px;
          background-position: center;
          z-index: 0;
        }
      }
    }
  }
</style>