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
          <div class="new-container">

              <div class="left-side">
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
              </div>


              <div class="right-side">
                <textarea class="img-text" name="imgtext" placeholder="Lägg till bildtext" v-model="imgtext"></textarea>
              </div>
          </div>  
          <button @click.prevent="handleSubmit" class="btn" :style="{width: '107px', height: '35px', borderRadius: '6px'}">Publicera</button>
          <div class="status-message" v-if="status.showMessage">
            <h3 :style="{color: status.color}">
              <br>
              {{status.message}}
              <br>
              <i class="far fa-times-circle" @click="closeModal"></i>
            </h3>
          </div>
          <input type="file" name="imgfile" id="imgUpload" :style="{display:'none'}" accept="image/*" @change="handleFileUpload"/>
        </form>
      </div>
      <div v-if="status.showMessage !== true">

        <UserPhotos v-if="!uploading"/>
      </div>
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
        message: '',
        color: ''
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
    handleStatus(msg,color) {
      this.status.showMessage = true,
      this.status.message = msg
      this.status.color = color
      document.documentElement.style.overflow = 'hidden'
    },
    async handleSubmit() {
      if(!this.file || !this.imgtext) {
        this.handleStatus('fälten får inte vara tomma', '#FF9494')
        return
      }
      let storageRef = db.storage().ref(`images/${this.currentUser}/${this.file.name}`)
      let collectionRef = db.database().ref('images')

      let task = storageRef.put(this.file)

      if(!this.currentUser) {
        this.handleStatus('något gick fel, testa att logga in och ut', '#FF9494') 
      } else {
        task.on('state_changed', () => {
            this.uploading = true
          }, (err) => {
            console.log(err)
            this.uploading = false
            this.handleStatus('något gick fel, kontakta IT','#FF9494')
          }, async () => {
            const url = await storageRef.getDownloadURL()
            collectionRef.push({name: this.file.name, img: url, description: this.imgtext, user: this.currentUser});
            this.uploading = false  
            this.imgtext = ""
            this.file = ''
            this.handleStatus('Din referens är nu publicerad', '#86a687')
          })
      }
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
    margin-top: 3rem;
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

    .new-container {
      .left-side {
           display: flex;
           flex-direction: column;
           align-items: center;
      }
    }
    .status-message {
      background-color: rgba(0,0,0,0.4);
      position: absolute;
      width: 100%;
      height: 100vh;
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

@media screen and(min-width: $sm) {
  .form-container {
    .form-wrapper {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      h2 {
        margin-bottom: 0;
      }
      .new-container {
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        .right-side {
          display: flex;
          flex-direction: column;
          margin-left: 2rem;
          textarea {
            margin-top: 0;
            height: 226px;
          }
        }
        .left-side {
           margin-right: 2rem;
        }
      } 
    }  
  }
}

</style>