<template>
  <div id="home">
    <transition name="fade1">
     <div class="bgImage" :style="bgImg" :key="currentIndex">
       <div class="circle-home">
          <p>Plantera mera, hjälper dig med trädgården sedan 2007.</p>
        </div>
     </div>
    </transition>

    <!--
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">Next&#10095; </a>-->
    
  </div>
</template>

<script>

export default { 
  name: 'Home', 

  components:{
    //Slider,
  },
  
  data(){
    return{
      images: [
        "background-image-basil.png",
        "background-image-2.jpg",
        "background-image-3.jpg"
      ],
      currentIndex: 0,
      timer: 0,
    } 
  },
  beforeMount() {
    this.startSlide(); 
  },
  methods:{
    startSlide() {
      this.timer = setInterval(this.next, 5000);
    },
    next() {
      this.currentIndex += 1;
    },
    /**
    prev() {
      this.current -= 1;
    }*/
  },
  computed: {
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
    bgImg(){
      return { 'background-image': 'url('+ require(`@/assets/${this.currentImg}`) +')' };
    }  
  }
}
</script>
<style scoped lang="scss">

  #home{
    //padding-top: 6rem;
    //position: absolute;
    height: 100vh;
    .bgImage{
      padding-top: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      width: 100%;
      height: 100vh;
      position: absolute;
      -webkit-transition: all 2s ease;
      transition: all 2s ease;
    }
       
    .circle-home{
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 2px 2px 6px rgba(0,0,0,0.25);
      height: 14rem;
      text-align: center;
      padding: 1rem;
      width: 14rem;
      p{
        background: transparent;
        font-weight: bold;
      } 
    }
    @media screen and (min-width: 765px) {
      .circle-home{
        height: 16rem;
        width: 16rem;
        p{
          font-size: 18px;
        }
      }
    }
    @media screen and (min-width: 1204px) {
      .circle-home{
         height: 18rem;
         width: 18rem;
        p{
          font-size: 20px;
        }
      } 
    }
    @media screen and (min-width: 1920px) {
      .circle-home{
        height: 20rem;
        width: 20rem;
        
      } 
    }
  }

.fade1-enter-active {
  //border: solid 5px red;
  opacity: 1;
  z-index: 999;
}

.fade1-leave-active {
  //border: solid 5px red;
  opacity: 1;
}

.fade1-enter,
.fade1-leave-to {
  opacity: 0.6;
}
</style>
