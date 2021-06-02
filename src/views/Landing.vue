<template>
  <div id="landing">
    <Nav/>
    <Home/>
    <About/>
    <Services/>
    <References/>
    <Contact/>
    
  </div>
</template>

<script>
// import db from '../db'
import Nav from '../components/Nav'
import Home from '../views/Home'
import About from '../views/About'
import Services from '../views/Services'
import References from '../views/References'
import Contact from '../views/Contact.vue'


export default {
  name: "Landing",  
  mounted() {
    // console.log(db)
  },
  components: {
    Nav,
    Home,
    About,
    Services,
    References,
    Contact
  }
}

</script>

<style lang="scss">
@import '../variables';
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
