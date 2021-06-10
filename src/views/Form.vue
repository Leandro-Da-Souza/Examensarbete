<template>
  <div class="form-container">
      <header>
        <div @click="logOut('Landing')">
          <img src="@/assets/Logo.svg" alt="logo"/>
        </div>
        <button class="ghost-btn log-out" :style="{borderRadius: '6px'}" @click="logOut('Login')">Logga ut</button> 
      </header>
      <div v-if="uploading">
        <Spinner/>
      </div>
      <div v-if="!uploading">
        <form action="" class="form-wrapper">
          <h2>Lägg Till Referens</h2>
          <div class="file-upload">
            <i class="fas fa-upload fa-lg upload"></i>
            <button 
              class="ghost-btn" 
              :style="{padding: '3px', borderRadius: '6px'}"
              @click.prevent="openUpload">
                Ladda upp bild
            </button>
          </div>
          <span>{{!file ? 'ingen bild vald' : this.file.name}}</span>
          <div class="status-message" v-if="status.showMessage">
            <h3>
              <br>
              {{status.message}}
              <br>
              <i class="far fa-times-circle" @click="closeModal"></i>
            </h3>
          </div>
          <input type="file" name="imgfile" id="imgUpload" :style="{display:'none'}" accept="image/*" @change="handleFileUpload"/>
          <textarea class="img-text" name="imgtext" placeholder="Lägg till bildtext" v-model="imgtext"></textarea>
          <button @click.prevent="handleSubmit" class="btn" :style="{width: '107px', height: '35px', borderRadius: '6px'}">Publicera</button>
        </form>
      </div>
      <UserPhotos v-if="!uploading"/>
  </div>
</template>

<script>
import UserPhotos from '../components/UserPhotos'
import Spinner from '../components/Spinner.vue'
import db from '../db'

export default {
  components: {
    Spinner,
    UserPhotos
  },
  data() {
    return { 
      imgtext: '',
      file: "",
      uploading: false,
      status: {
        showMessage: false,
        message: ''
      },
      currentUser: ""
    }
  },
  methods: {
    logOut(path) {
      db.auth().signOut().then(() => {
        localStorage.clear()
        this.$router.replace({name: path});
      }).catch((e) => {
        console.log('something went wrong: ' + e)
      })
    },
    closeModal() {
      this.status.showMessage = false;
      this.status.message = '';
      document.documentElement.style.overflow = 'auto'
    },
    openUpload() {
      this.$el.querySelector('#imgUpload').click()
    },
    handleFileUpload(e) {
      this.file = e.target.files[0]
      let element = this.$el.querySelector('.file-upload');
      let reader = new FileReader();

      reader.onloadend = function () {
        element.style.backgroundImage = `
        url("${reader.result}")
        `;
      }

      if(this.file) {
        reader.readAsDataURL(this.file)
      }
    },
    async getCurrentUser() {
      this.currentUser = await db.auth().currentUser.uid
    },
    handleStatus(msg) {
      this.status.showMessage = true,
      this.status.message = msg
      document.documentElement.style.overflow = 'hidden'
    },
    async handleSubmit() {
      if(!this.file || !this.imgtext) {
        this.handleStatus('fälten får inte vara tomma')
        return
      }
      let storageRef = db.storage().ref(`images/${this.currentUser}/${this.file.name}`)
      let collectionRef = db.database().ref('images')

      let task = storageRef.put(this.file)

      if(!this.currentUser) {
        this.handleStatus('något gick fel, testa att logga in och ut') 
        return
      }
      task.on('state_changed', () => {
          this.uploading = true
        }, (err) => {
          console.log(err)
          this.uploading = false
          this.handleStatus('något gick fel, kontakta IT')
        }, async () => {
          const url = await storageRef.getDownloadURL()
          collectionRef.push({name: this.file.name, img: url, description: this.imgtext, user: this.currentUser});
          this.uploading = false  
          this.imgtext = ""
          this.file = ''
          this.handleStatus('Din referens är nu publicerad')
        })
    }
  },
  mounted() {
    this.currentUser = localStorage.getItem('uid')
  },
  beforeDestroy() {
    localStorage.clear()
  }
}
</script>

<style scoped lang="scss">
@import '../variables';
.form-container {
  header {
    display: flex;
    justify-content: space-between;
    img{
      margin: 1rem 2rem;
      width: 8rem;
    }
    button {
      height: 10%;
      align-self: center;
      padding: 3px 5px;
      margin-right: 2rem;
    }
  }
  .form-wrapper {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 745px) {
      display: flex;
    }
    h2 {
      color: #272727;
      text-align: center;
      font-weight: normal;
      letter-spacing: 1.5px;
      margin-bottom: 5px;
    }
    .status-message {
      background-color: rgba(0,0,0,0.4);
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 100;
      left: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: auto;
      
      h3 {
        display: flex;
        font-size: 1.3rem;
        padding: 10px 10px;
        border-radius: 4px;
        color: $global-green-color;
        i {
          color: #6a6a6a;
          background: transparent;
          border-radius: 50%;
          font-size: 1.2rem;
          padding-left: 0.2rem;
        }
      }  
    }
    .file-upload {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 244px;
      height: 226px;
      background-color: rgba(186,186,186, 0.2); 
      background-position: center;
      background-size: cover;
      border: 1px solid #bababa;
      .upload {
        color: $global-green-color;
        background-color: rgba(186,186,186, 0);
        width: 10%;
      }
      button {
        margin-top: 10px;
      }
    }
    textarea {
      width: 244px;
      height: 161px;
      border-radius: 20px;
      margin-top: 20px;
      text-indent: 15px;
      padding-top: 5px;
      background-color: #fff;
      &:active, 
      &:focus, 
      &:hover{
        outline: none;
      }
    } 
  }
}

</style>