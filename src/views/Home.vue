<template>
  <div id="home">
    <div class="circle-home">
      <p>Plantera mera, 
      hjälper dig med trädgården sedan 2007.</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style scoped lang="scss">
  #home{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 43rem;
    padding-top: 6rem;
    background-image: url('../assets/background-image-basil.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .circle-home{
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 14rem;
      text-align: center;
      padding: 1rem;
      width: 14rem;
      p{
        background: transparent;
        font-weight: bold;
      }
      
    }
  }
</style>
