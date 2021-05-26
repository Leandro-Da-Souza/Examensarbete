<template>
  <div id="about">
    <h2>Vilka vi är och vad vi gör</h2>
    <img class="about-image" src="@/assets/about-image.jpg" alt="">
    <p class="about-text">
      <span>
        Våra skickliga trädgårdsmästare och erfarna trädgårdsarbetare hjälper dig med din trädgård. 
      </span>
     &nbsp;
      <span>
         Mattis cursus amet elit, id et lobortis lacus, consectetur. Fermentum sed nam mauris est. In fames dictumst nisl auctor ac tempor pulvinar et. Egestas quam lorem luctus at nibh eget vitae, ut velit. Lectus turpis volutpat et purus tortor, amet. Neque, amet integer et, mi sit tortor gravida.
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped lang="scss">
  #about{
    padding-top: 6rem;
    h2{
      font-weight: initial;
      text-align: center;
      padding-bottom: 1.5rem;
    }
    .about-image{
      height: 5.5rem;
      object-fit: cover;
      object-position: 0 58%;
      width: 100%;
    }
    .about-text{
      display: block;
      padding: 1rem 2rem;
      //white-space:nowrap;
      span{
        display: inline-block;
        margin: 10px 0; 
      }

    }
  }
</style>