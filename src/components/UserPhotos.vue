<template>
  <div class="user-photos">
    <div v-if="this.userPhotos.length === 0">
      <p :style="{textAlign: 'center', marginTop: '20px' }">
        Du har inte laddat upp några bilder än, använd formuläret ovanför!
      </p>
    </div>
    <div v-else>
      <h3>Dina publicerade referenser:</h3>
      <ul>
        <li v-for="(photo,index) in userPhotos" :key="index + ''">
          <i class="fas fa-times-circle" @click="deletePhoto(photo)"></i>
          <img :src="photo.img" alt="">
          <p>{{photo.description | truncateText(90)}}</p>
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
          if(confirm('Vill du radera denna referens?')) {
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
@import '../variables';
  .user-photos {
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      color: #272727;
      text-align: center;
      font-size: 1.2rem;
      font-weight: normal;
      letter-spacing: 1.5px;
      margin: 20px 0;
    }
    ul {
      display: flex;
      list-style-type: none;
      justify-items: center;
      flex-wrap: wrap;
      align-items: center;
      padding-bottom: 3rem;
      width: 100%;
      li {
        background-color: #ffffff;
        border-radius: 8%;
        box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        height: 13rem;
        padding: 0.3rem 1rem;
        margin: 0 0.5rem;
        width: 10rem;
        display: flex;
        justify-items: center;
        align-items: flex-start;
        flex-direction: column;
        margin-bottom: 1rem;
        i{
          background: transparent;
          padding: 0.4rem 0;
        }
        img {
          width: 8rem;
          height: 5rem;
          object-position: center;
          object-fit: cover;
          margin-bottom: 0.3rem;
          z-index: 0;
        }
        p{
          background: transparent;
          font-size: 0.7rem;
          text-align: start;
        }
      }
    }
  }
</style>