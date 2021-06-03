<template>
  <div id="home">
    <transition name="show" >
     <div :style="bgImg">
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
      this.timer = setInterval(this.next, 6000);
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
    div{
      padding-top: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: 100vh;
      width: 100%;
      transition: fade;
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

  .show-enter-active,
  .show-leave-enter {
    transform: translateX(0);
    transition: all .3s linear;
  }
  .show-enter,
  .show-leave-to {
    transform: translateX(100%);
  }
/** 
  .fade-enter-active,
  .fade-leave-active {
    transition: all 10s ease;
    overflow: hidden;
    visibility: visible;
    position: absolute;
    width:100%;
    opacity: 1;
  }

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}*/

</style>
