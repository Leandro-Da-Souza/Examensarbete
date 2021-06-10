<template>
  <div id="about">
    <h2>Vilka vi är och vad vi gör</h2>
    <img class="about-image" src="@/assets/about-image.jpg" alt="">
    <p class="about-text">
      <span>
        Plantera mera har funnits på marknaden i 14 år och vi hjälper dig som bor i Stockholm med din trädgård. 
        Vi erbjuder tjänster som lövblåsning, plantering, gräsklippning och mycket mer. 
      </span>
      <span>
        Vi har erfarna och utbildade trädgårdsmästare och trädgårdsarbetare som arbetat med alla typer av trädgårdar. 
        Du behöver inte ha en stor trädgård för att boka ett möte med oss. Vi hjälper dig gärna med planteringar på din balkong, innergård, terass eller liknande.</span>
      <span>
        Vårt mål som företag är att du som kund alltid ska bli nöjd med vårt arbete. Boka gärna ett möte med oss för att vi ska kunna anpassa oss till just din trädgård och dina önskemål.
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
@import '../variables';
  #about{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: -2rem;
    padding-top: 6rem;
    height: 100%;
    h2{
      font-weight: initial;
      text-align: center;
      margin-bottom: 2rem;
    }
    .about-image{
      height: 15vh;
      object-fit: cover;
      object-position: 0 58%;
      width: 100%;
    }
    .about-text{
      display: block;
      padding-top: 2rem;
      margin: 0 2rem;
      span{
        display: inline-block;
        margin: 10px 0; 
      }
    }
    @media screen and (min-width: $sm) {
      h2{
          font-size: 1.9rem;
      }
      .about-image{
          height: 16.5vh;
      }
      .about-text{
        font-size: 1.125rem; 
        margin: 0 3rem;
      }
    }
    @media screen and (min-width: $md) {
      h2{
          font-size: 2.25rem;
      }
      .about-image{
          height: 18vh;
      }
      .about-text{
        font-size: 1.25rem; 
        margin: 0 4rem;
      }
    }
    @media screen and (min-width: $lg) {
      h2{
        font-size: 3rem;
      }
    }
  }
  
</style>