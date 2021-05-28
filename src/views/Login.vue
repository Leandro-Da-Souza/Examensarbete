<template>
  <div class="login-container">
      <h1>LOGGA IN</h1>
      <form class="form-container" @submit.prevent="handleSubmit">
          <input type="text" name="username" v-model="username" placeholder="användarnamn">
          <input type="text" name="password" v-model="password" placeholder="löserord">
          <button type="submit">Skicka</button>
      </form>
  </div>
</template>

<script>
import db from '../db';

export default {    
    name: 'Login',
    data() {
        return{
            username: "",
            password: ""
        }
    },
    methods: {
        handleSubmit() {
            const loginInfo = {
                username: this.username,
                password: this.password
            }
            console.log(loginInfo)
            this.username = ""
            this.password = ""
        }
    },
    mounted() {
        console.log(db.auth)
    }
}
</script>

<style lang="scss" scoped>
    .login-container {
        
    }
</style>