<template>
  <div class="auth-container">
      <p>Loading...</p>
  </div>
</template>

<script>
import db from '../db';

export default {
    methods: {
        async authenticateUser(name, pass) {
            try {
                const res = await db.auth().signInWithEmailAndPassword(name, pass)
                console.log(res)
                this.$router.push({name: 'Form', meta: res})
            } catch (e) {
                console.log(e)
                this.$router.push({name: 'Login', meta: e})
            }
        }
    },
    mounted() { 
        console.log(db.auth)
        const { username, password } = this.$route.params
        this.authenticateUser(username, password)
    }
}
</script>

<style>

</style>