<template>
<div id="services">
    <div class="services-wrapper">
        <h2>Våra tjänster</h2>
        <p>Vi erbjuder många tjänster och inte bara de som står här nedanför. 
            När ni bokar ett möte med oss ser vi till att anpassa oss efter era önskemål och diskuterar hur just ni vill ha det.
        </p>
        <Accordion title="Gräsklippning" content="Gräsklippning är något vi gärna hjälper till med. Vi både klipper gräs och trimmar gräset på svårotkomliga ställen, såsom vid grusgångar eller rabatter."/>  
        <Accordion title="Beskärning" content="Vi hjälper dig att beskära dina träd, och andra växter. Under våren beskär vi rosor, klängväxter som klematis och buskar som blommar på årets nya skott, så kallade årsskott. Känsliga träd och buskar beskär vi under JAS-månaderna (juli, augusti och september) och stenfrukt som plommon och körsbär på hösten efter skörd."/>  
        <Accordion title="Ogräsrensning" content="Vi kommer och rensar rabatterna och gräsmattan från allt ogräs. Det är lätt hänt att man låter ogräset vara kvar under en längre tid och detta kan göra att det tillslut blir stora hål i gräsmattan när du rensar bort det. Vi ser till att ta bort allt ogräs och lägger såfrön på gräsmattan om det behövs vid borttagningen av ogräset."/>  
        <Accordion title="Plantering" content="Vi hjälper dig plantera träd, häckar, blommor och alla typer av växter."/>  
        <Accordion title="Häckklippning" content="
        Förutom möjligheten att vi kan reglera storlek och form på din häck, så blir de klippta häckarna framförallt tätare än de friväxande.
        Det kan finnas lagkrav på din häck, är det risk att häcken skymmer sikten vid t.ex vägkorsning eller utfart bör man kontakta sin kommun och fråga om vilken höjd häcken max får ha. Är du osäker så hjälper vi dig!"
        />   
        <Accordion title="Trädgårdsdesign" content="Trädgårdsdesign"/>
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

<style scoped lang="scss">
@import '../variables';

#services{
    padding-top: 3rem;
}

* {
    padding: 0;
    margin: 0;
    // margin-top: 20%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    .services-wrapper {
        // min-height: 100vh;
        width: 100vw;
        //margin: 0 auto;
        h2 {
            color: $global-font-color;
            text-align: center;
            font-weight: normal;
            letter-spacing: 1.5px;
            margin-bottom: 2rem;
        }
        p{
            margin-bottom: 2rem;
            width: 90vw;
        }
    }
}
</style>