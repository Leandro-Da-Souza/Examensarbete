<template>
  <div class="login-container">
    <Logo/>
    <div class="form-wrapper">
        <h1>LOGGA IN</h1>
        <form class="form-container" @submit.prevent="handleSubmit">
            <input type="text" name="username" v-model="username" placeholder="Användarnamn">
            <input type="password" name="password" v-model="password" placeholder="Lösenord">
            <button type="submit">LOGGA IN</button>
        </form>
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo'
export default {    
    name: 'Login',
    data() {
        return{
            username: "",
            password: ""
        }
    },
    components: {
        Logo
    },
    methods: {
        handleSubmit() {
            const loginInfo = {
                username: this.username,
                password: this.password
            }
            console.log(loginInfo)
            this.$router.push({name: 'Auth', params: loginInfo})
            this.username = ""
            this.password = ""
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../variables';

    .login-container {
        height: 100vh;
        img {
            width: 8rem;
        }
        .form-wrapper {
            height: 60%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h1 {
                margin-bottom: 35px;
            }
        }
        .form-container {
            display: flex;
            flex-direction: column;
            input[type="text"], input[type="password"] {
                width: 250px;
                height: 36px;
                margin: 10px 0;
                border-radius: 20px;
                border: none;
                text-indent: 15px;
                box-shadow: 2px 4px 6px rgba(0,0,0, 0.25)
            }
            button {
                width: 97px;
                height: 35px;
                margin-top: 30px;
                align-self: center;
                font-size: 0.9rem;
                font-weight: bold;
                border: none;
                background-color: $global-green-color;
                color: #fff;
                box-shadow: 2px 2px 4px rgba(0,0,0,0.25);
            }
        }
        
    }
</style>