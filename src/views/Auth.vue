<template>
    <Spinner/>
</template>

<script>
import db from '../db';
import Spinner from '../components/Spinner'

export default {
    components: {
      Spinner
    },
    methods: {
        async authenticateUser(name, pass) {
            try {
                const res = await db.auth().signInWithEmailAndPassword(name, pass)
                await this.$store.dispatch('GET_CURRENT_USER'),
                localStorage.setItem('uid', this.$store.state.currentUser)
                this.$router.replace({name: 'Form', meta: res})
            } catch (e) {
                this.$router.replace({name: 'Login', params: e})
            }
        }
    },
    mounted() { 
        const { username, password } = this.$route.params
        this.authenticateUser(username, password)
    }
}
</script>

<style scoped lang="scss">
@import '../variables';

.loader {
  margin-top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader > span {
  display: inline-block;
  background-color: $global-green-color;
  opacity: 50%;
  width: 8px;
  height: 8px;
  border-radius: 60%;
  margin: 0 5px;
  transform: translate3d(0, 0, 1);
  animation: grow 0.6s infinite alternate;
}
.loader > span:nth-child(2) {
  animation-delay: 0.25s;
  background-color: $global-green-color;
  opacity: 100%;
}
.loader > span:nth-child(3) {
  animation-delay: 0.5s;
}

@keyframes grow {
  to {
    width: 16px;
    height: 16px;
    transform: translate3d(0, -16px, 0);
  }
}


</style>