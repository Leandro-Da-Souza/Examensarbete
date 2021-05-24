<template>
    <div id="services">
        <div class="services-wrapper">
            <h1>Våra tjänster</h1>
            <Accordion title="Gräsklippning"/>  
            <Accordion title="Beskärning" content="The quick brown fox jumps over the lazy dog"/>  
        </div>
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

<style lang="scss">
@import '../variables';

#services{
    padding-top: 6rem;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    .services-wrapper {
        height: 100vh;
        width: 100vw;
        h1 {
            color: $global-heading-color;
        }
    }
}
</style>