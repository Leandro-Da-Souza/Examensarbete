<template>
    <div class="services-wrapper">
        <h2>Våra tjänster</h2>
        <Accordion title="Gräsklippning"/>  
        <Accordion title="Beskärning" content="The quick brown fox jumps over the lazy dog"/>  
        <Accordion title="Ogränsrensning" />  
        <Accordion title="Trädgårdsskötsel" content="random text" />  
        <Accordion title="Trädgårdsdesign" />  
    </div>
</template>

<script>
import Accordion from '../components/Accordion'
export default {
    name: "Services",
    components: {
        Accordion
    }
}
</script>

<style scoped lang="scss">
@import '../variables';

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    .services-wrapper {
        min-height: 100vh;
        width: 100vw;
        margin: 0 auto;
        h2 {
            color: $global-heading-color;
            text-align: center
        }
    }
}
</style>