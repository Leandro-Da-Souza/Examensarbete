<template>
  <div id="home">
    <transition name="fade1">
      <div class="bgImage" :style="bgImg" :key="currentIndex"></div>
    </transition>
      <a @click="$emit(scrollToAbout())" class="circle-home">
          <p class="p1">Plantera mera, hjälper dig med trädgården sedan 2007.</p>
          <p class="p2">Läs mer</p>
          &#8595;
      </a>
  </div>
</template>

<script>
export default { 
  
  name: 'Home',
  
  data(){
    return{
      images: [
        "background-image-1.png",
        "background-image-2.png",
        "background-image-3.jpg"
      ],
      currentIndex: 0,
    } 
  },
  
  beforeMount() {
    this.startSlide(); 
  },
  methods:{
    startSlide() {
      setInterval(this.next, 5000);
    },
    next() {
      if(this.currentIndex >= this.images.length -1) {
        this.currentIndex = 0
      } else {
        this.currentIndex += 1;
      }
    }
  },
  computed: {
    bgImg(){
      return { 'background-image': 'url('+ require(`@/assets/${this.images[this.currentIndex]}`) +')' };
    }  
  }
}
</script>
<style scoped lang="scss">
@import '../variables';

  #home{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -2rem;
    .bgImage{
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 100vh;
      position: absolute;
      -webkit-transition: all 2s ease-in-out;
      transition: all 2s ease-in-out;
    }
    .circle-home{
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-radius: 50%;
      box-shadow: 2px 2px 6px rgba(0,0,0,0.25);
      height: 14rem;
      text-align: center;
      padding: 1rem;
      width: 14rem;
      z-index: 2000;
      position: absolute;
      text-decoration: none;
      transition: background-color 1s ease;
      p{
        background: transparent;
      } 
      .p1{
        font-weight: bold;
        line-height: 22px;  
        margin: 70px 0 25px 0;
      }
      .p2{
        font-weight: initial;
        font-style: italic;
      } 
    }
    @media screen and (min-width: $sm) {
      .circle-home{
        height: 16rem;
        width: 16rem;
        p{
          font-size: 18px;
        }
      }
      .circle-home:hover{
        background-color: $global-green-color;
        color: $global-bg-color;
        p{
          color: $global-bg-color;
        }
      }
    }
    @media screen and (min-width: $md) {
      .circle-home{
         height: 17.5rem;
         width: 17.5rem;
        p{
          font-size: 20px;
        }
      } 
    }
    @media screen and (min-width: $lg) {
      .circle-home{
        height: 19rem;
        width: 19rem;
        
      } 
    }
  }

.fade1-enter-active {
  opacity: 1;
  z-index: 999;
}
.fade1-leave-active {
  opacity: 1;
}
.fade1-enter,
.fade1-leave-to {
  opacity: 0;
}
</style>
