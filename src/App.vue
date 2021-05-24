<template>
  <div id="app">
    <Home/>
    <About/>
  </div>
</template>

<script>
import db from './db'
import Home from './views/Home'
import About from './views/About'

export default {
  mounted() {
    console.log(db)
  },
  components: {
    About,
    Home
  }
}

</script>

<style lang="scss">
@import './variables';
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: $global-font-family;
    letter-spacing: 6%;
    color: $global-font-color;
    background-color: $global-bg-color;
  }
</style>
