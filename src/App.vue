<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
