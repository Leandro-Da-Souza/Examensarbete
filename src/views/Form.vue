<template>
  <div class="form-container">
      <header>

        <img src="@/assets/Logo.svg" alt="logo"/>
        <button class="ghost-btn" :style="{borderRadius: '6px'}" @click="logOut">Logga ut</button> 

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
            <i class="far fa-times-circle fa-2x" @click="closeModal"></i>
            <h3>{{status.message}}</h3>
          </div>
          <input type="file" name="imgfile" id="imgUpload" :style="{display:'none'}" accept="image/*" @change="handleFileUpload"/>
          <textarea name="imgtext" placeholder="Lägg till bildtext" v-model="imgtext"></textarea>
          <button @click.prevent="handleSubmit" class="btn" :style="{width: '107px', height: '35px', borderRadius: '6px'}">Publicera</button>
        </form>
      </div>
      <UserPhotos v-if="!uploading"/>
  </div>
</template>

<script>
import UserPhotos from '../components/UserPhotos'
import Spinner from '../components/Spinner.vue'
//import Logo from '../components/Logo'
import db from '../db'

export default {
  components: {
    //Logo,
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
  watch: {
    
  },
  methods: {
    logOut() {
      db.auth().signOut().then(() => {
        localStorage.clear()
        this.$router.replace({name: 'Login'});
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

      task.on('state_changed', (snap) => {
        this.uploading = true
          console.log(snap)
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
          this.handleStatus('bild upplagd')
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
      margin-right: 3px;
    }
  }
  .form-wrapper {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      color: #272727;
      text-align: center;
      font-weight: normal;
      letter-spacing: 1.5px;
      margin-bottom: 5px;
    }
    .status-message {
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 100;
      left: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: auto;
      h3 {
        font-size: 1.6rem;
        padding: 10px 20px;
        border-radius: 4px;
        color: $global-green-color;
        margin-top: 60%;
      }
      i {
        align-self: flex-end;
        color: $global-green-color;
        border-radius: 50%;
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
    }
  }
}

// @keyframes

</style>