<template>
  <div class="form-container">
      <Logo/>
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
          <span v-if="status.showMessage">{{status.message}}</span>
          <input type="file" name="imgfile" id="imgUpload" :style="{display:'none'}" accept="image/*" />
          <textarea name="imgtext" placeholder="Lägg till bildtext" v-model="imgtext"></textarea>
          <button @click.prevent="handleSubmit" class="btn" :style="{width: '107px', height: '35px', borderRadius: '6px'}">Publicera</button>
        </form>
      </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import Logo from '../components/Logo'
import db from '../db'

export default {
  components: {
    Logo,
    Spinner
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
    }
  },
  methods: {
    openUpload() {
      this.$el.querySelector('#imgUpload').click()
    },
    handleFileUpload(e) {
      this.file = e.target.files[0]
    },
    handleStatus(msg) {
      this.status.showMessage = true,
      this.status.message = msg
      setTimeout(() => {
        this.status.showMessage = false,
        this.status.message = ''
      }, 4000)
    },
    async handleSubmit() {
      if(!this.file || !this.imgtext) {
        this.handleStatus('fälten får inte vara tomma')
        return
      }
      let storageRef = db.storage().ref('images/' + this.file.name)
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
          collectionRef.push({img: url, description: this.imgtext});
          this.uploading = false  
          this.imgtext = ""
          this.file = ''
          this.handleStatus('bild upplagd')
        })
    }
  },
  mounted() {
    this.$el.querySelector('#imgUpload').addEventListener('change',e => this.handleFileUpload(e),
    )
  }
}
</script>

<style scoped lang="scss">
@import '../variables';
.form-container {
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
    .message{
      font-size: 1.2rem;
      color: $global-green-color;
      transition: font-size 2s ease;
    }
    .file-upload {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 244px;
      height: 226px;
      background-color: rgba(186,186,186, 0.2); 
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