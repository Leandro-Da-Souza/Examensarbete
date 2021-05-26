<template>
  <div id="home">
   <!-- <div v-for="i in [current]" :key="i">-->
     <div :style="bgImg">
       <div class="circle-home">
        <p>Plantera mera, hjälper dig med trädgården sedan 2007.</p>
        </div>
     </div>
      <!--<img :src='require(`@/assets/${currentImg}`)'/>-->
    
    <!--
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">Next&#10095; </a>-->
    <!--
    <Slider :image="images[0]"/>
    -->
  </div>
</template>

<script>
//import Slider from '../components/homeSlider.vue'

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
      current: 0,
      timer: 0,
    } 
  },
  mounted: function() {
    this.startSlide();
  },
  methods:{
    startSlide() {
      this.timer = setInterval(this.next, 10000);
    },
    
    next() {
      this.current += 1;
    },
    /**
    prev() {
      this.current -= 1;
    }*/
  },
  computed: {
    currentImg() {
      return this.images[Math.abs(this.current) % this.images.length];
    },
    bgImg(){
      return { 'background-image': 'url('+ require(`@/assets/${this.currentImg}`) +')' };
    }
    
  }
}
</script>
<style scoped lang="scss">
  #home{
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: 100vh;
      width: 100%;
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
  }
</style>
