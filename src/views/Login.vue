<template>
  <div class="login-container">
    <router-link to="/">
        <img src="@/assets/Logo.svg" alt="logo"/>
    </router-link>
    <div class="form-wrapper">
        <h1>LOGGA IN</h1>
        <form class="form-container" @submit.prevent="handleSubmit">
            <input type="text" name="username" v-model="username" placeholder="E-mail">
            <span v-if="error.username">email ej registrerad</span>
            <input 
            type="password" 
            name="password" 
            v-model="password" 
            placeholder="Lösenord"
            >
            <span v-if="error.password">lösenord finns ej</span>
            <button type="submit" class="btn">LOGGA IN</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {    
    name: 'Login',
    data() {
        return{
            username: "",
            password: "",
            error: {
                username: false,
                password: false,
            }
        }
    },
    methods: {
        handleSubmit() {
            const loginInfo = {
                username: this.username,
                password: this.password
            }
            this.$router.push({name: 'Auth', params: loginInfo})
            this.username = ""
            this.password = ""
        }
    },
    mounted() {
        if(this.$route.params.code === 'auth/wrong-password') {
            this.error.password = true;
        } else if(this.$route.params.code === 'auth/user-not-found') {
            this.error.username = true
        } else if(this.$route.params.code === 'auth/invalid-email') {
            this.error.username = true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../variables';

    .login-container {
        height: 100vh;
        img {
            margin: 1rem 2rem;
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
            justify-content: center;
            align-items: center;
            input[type="text"], 
            input[type="password"] {
                width: 35vw;
                height: 2.5rem;
                margin: 14px 0;
                border-radius: 20px;
                border: none;
                padding: 15px;
                box-shadow: 2px 4px 6px rgba(0,0,0, 0.25);
                background-color: #fff;
                &:active, 
                &:focus, 
                &:hover{
                    outline: none;
                }
            }
            span {
                display: inline;
                font-size: 0.8rem;
                padding: 0;
                margin: 0;
                color: #FF9494
            }

            button[type="submit"] {
                    margin:30px 0px;
                } 
        }   
    }
    @media screen and (min-width: $sm) {
        .login-container{
            .form-container{
                input[type="text"], 
                input[type="password"] {
                    border-radius: 3rem;
                    max-width: 20rem;
                    height: 3rem;
                } 
                button[type="submit"] {
                    width: 8rem;
                    height: 40px;
                    font-size: 1.4rem;
                }  
            } 
        }
    }
                    
</style>