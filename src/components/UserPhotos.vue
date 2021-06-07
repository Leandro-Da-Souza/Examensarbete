<template>
  <div class="user-photos">
    <div v-if="this.userPhotos.length === 0">
      <p>Du har inte laddat upp några bilder än, använd formuläret ovanför!</p>
    </div>
    <div v-else>
      <h2>Dina bilder</h2>
      <ul>
        <li v-for="(photos,index) in userPhotos" :key="index + ''">
          <img :src="photos.img" alt="">
          <div>
            <p>{{photos.description | truncateText(15)}}</p>
            <i class="fas fa-times-circle"></i>
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
              this.userPhotos.push(key.val())
            }
          })
        })
        console.log(this.userPhotos)
        },
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