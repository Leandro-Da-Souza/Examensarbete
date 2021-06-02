<template>
  <div class="form-container">
      <Logo/>
      <form action="" class="form-wrapper">
        <h2>Lägg Till Referens</h2>
        <div class="file-upload">
          <i class="fas fa-upload fa-lg upload"></i>
          <button 
            class="ghost-btn" 
            :style="{padding: '3px', borderRadius: '6px'}"
            @click.prevent="handleSubmit">
              Ladda upp bild
          </button>
        </div>
        <input type="file" name="imgfile" id="imgUpload" :style="{display:'none'}" accept="image/*" />
        <textarea name="imgtext" placeholder="Lägg till bildtext" v-model="imgtext"></textarea>
        <button class="btn" :style="{width: '107px', height: '35px', borderRadius: '6px'}">Publicera</button>
      </form>
  </div>
</template>

<script>
import Logo from '../components/Logo'
import db from '../db'

export default {
  components: {
    Logo
  },
  data() {
    return {
      imgtext: ''
    }
  },
  methods: {
    handleSubmit() {
      this.$el.querySelector('#imgUpload').click()
    },
    handleFileUpload(e) {
      let file = e.target.files[0]

      let storageRef = db.storage().ref('images/' + file.name)
      let collectionRef = db.database().ref('images')

      let task = storageRef.put(file)

      task.on('state_changed', (snap) => {
        console.log(snap)
      }, (err) => {
        console.log(err)
      }, async () => {
        const url = await storageRef.getDownloadURL()
        // console.log(url)
        // console.log(collectionRef)
        collectionRef.push(url);
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
      margin-bottom: 20px;
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

</style>