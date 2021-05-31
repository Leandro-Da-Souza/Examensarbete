<template>
  <div class="form-container">
      <Logo/>
      <form action="" class="form-wrapper">
        <h2>Lägg Till Referens</h2>
        <div class="file-upload">
          <svg width="25" height="30" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.1875 0.625H17.8125C18.4706 0.625 19 1.16836 19 1.84375V3.0625C19 3.73789 18.4706 4.28125 17.8125 4.28125H1.1875C0.529427 4.28125 0 3.73789 0 3.0625V1.84375C0 1.16836 0.529427 0.625 1.1875 0.625ZM12.6667 22.1562V15.25H17.006C17.8867 15.25 18.3271 14.1582 17.7036 13.5184L10.1779 5.78945C9.80677 5.40859 9.19818 5.40859 8.82708 5.78945L1.29141 13.5184C0.667969 14.1582 1.11328 15.25 1.99401 15.25H6.33333V22.1562C6.33333 22.8316 6.86276 23.375 7.52083 23.375H11.4792C12.1372 23.375 12.6667 22.8316 12.6667 22.1562Z" fill="#86A687"/>
          </svg>
          <button 
            class="ghost-btn" 
            :style="{padding: '3px', borderRadius: '6px'}"
            @click.prevent="handleSubmit"
          >
              Ladda upp bild
          </button>
        </div>
        <input type="file" name="imgfile" id="imgUpload" :style="{display:'none'}">
        <textarea name="imgtext" placeholder="Lägg till bildtext" v-model="imgtext"></textarea>
        <button class="btn" :style="{width: '107px', height: '35px', borderRadius: '6px'}">Publicera</button>
      </form>
  </div>
</template>

<script>
import Logo from '../components/Logo'
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
    }
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
      background-color: rgba(186,186,186, 0.3); 
      border: 1px solid #bababa;
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