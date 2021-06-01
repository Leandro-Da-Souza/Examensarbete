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
  #about{
    padding-top: 3rem;

    h2{
      font-weight: initial;
      text-align: center;
      padding-bottom: 1.5rem;
    }
    .about-image{
      height: 15vh;
      object-fit: cover;
      object-position: 0 58%;
      width: 100%;
    }
    .about-text{
      display: block;
      padding: 2rem 3rem;
      //white-space:nowrap;
      span{
        display: inline-block;
        margin: 10px 0; 
      }

    }
  }
</style>