<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import db from './db'

export default {
  mounted() {
    console.log(db)
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
