<template>
  <div class="auth-container">
      <p>Loading...</p>
  </div>
</template>

<script>
import db from '../db';

export default {
    mounted() {
        console.log(db.auth)
        console.log(this.$route)
    }
}
</script>

<style>

</style>