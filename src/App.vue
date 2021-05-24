<template>
  <div id="app">
    <Nav/>
    <Home/>
    <About/>
    <Services/>
  </div>
</template>

<script>
import db from './db'
import Home from './views/Home'
import About from './views/About'
import Services from './views/Services'
import Nav from './components/Nav'

export default {
  mounted() {
    console.log(db)
  },
  components: {
    About,
    Home,
    Services,
    Nav
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
