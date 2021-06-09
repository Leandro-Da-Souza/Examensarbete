<template>
<div id="services">
    <h2>Våra tjänster</h2>
    <p>Vi erbjuder många tjänster och inte bara de som står här nedanför. 
        När ni bokar ett möte med oss ser vi till att anpassa oss efter era önskemål och diskuterar hur just ni vill ha det.
    </p>
    <div class="services-wrapper">
        <div>
            <Accordion class="accordion" title="Gräsklippning" content="Gräsklippning är något vi gärna hjälper till med. Vi både klipper gräs och trimmar gräset på svårotkomliga ställen, såsom vid grusgångar eller rabatter."/>  
            <Accordion class="accordion" title="Beskärning" content="Vi hjälper dig att beskära dina träd, och andra växter. Under våren beskär vi rosor, klängväxter som klematis och buskar som blommar på årets nya skott, så kallade årsskott. Känsliga träd och buskar beskär vi under JAS-månaderna (juli, augusti och september) och stenfrukt som plommon och körsbär på hösten efter skörd."/>  
            <Accordion class="accordion" title="Ogräsrensning" content="Vi kommer och rensar rabatterna och gräsmattan från allt ogräs. Det är lätt hänt att man låter ogräset vara kvar under en längre tid och detta kan göra att det tillslut blir stora hål i gräsmattan när du rensar bort det. Vi ser till att ta bort allt ogräs och lägger såfrön på gräsmattan om det behövs vid borttagningen av ogräset."/>  
        </div>
        <div>
            <Accordion class="accordion" title="Plantering" content="Vi hjälper dig plantera träd, häckar, blommor och alla typer av växter."/>  
            <Accordion class="accordion" title="Häckklippning" content="
            Förutom möjligheten att vi kan reglera storlek och form på din häck, så blir de klippta häckarna framförallt tätare än de friväxande.
            Det kan finnas lagkrav på din häck, är det risk att häcken skymmer sikten vid t.ex vägkorsning eller utfart bör man kontakta sin kommun och fråga om vilken höjd häcken max får ha. Är du osäker så hjälper vi dig!"
            />   
            <Accordion class="accordion" title="Trädgårdsdesign" content="Trädgårdsdesign"/>
        </div>
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
* {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    box-sizing: border-box;
}

#services{
    height: 100%;
    //position: relative;
    padding-top: 6rem;
    margin: 0 2rem;
    h2 {
        color: $global-font-color;
        text-align: center;
        font-weight: normal;
        letter-spacing: 1.5px;
        margin-bottom: 2rem;
    }
    p{
        margin-bottom: 2rem;
        //margin: 0rem 1rem 2rem;
        //width: 90vw;
    }
    .services-wrapper {
        display: grid;
        column-gap: 2rem;
        grid-template-columns: 1fr;
        
        //height: 100%;
        //position: relative;  
        //width: 40vw;
    }
    @media screen and (min-width: $sm) {
        //#services{
            //margin: 0 3rem;
        //}
            h2{
            font-size: 1.9rem;
            }
            p{
                font-size: 1.125rem;
                margin: 0rem 1.5rem 3rem;
            }
            .services-wrapper {
                grid-template-columns: repeat(2, 43vw);
                align-items: start;
                justify-items: start;
                grid-auto-flow: unset;
                //width: 90vw;
                min-width: 0;
                overflow: hidden;
                //margin: 0 6rem;
                .accordion{
                max-width: 43vw;
                min-width: 0;
                }
            }
        
        
    }
    @media screen and (min-width: $md) {
        //#services{
            //margin: 0 4rem;
        //}
            h2{
                font-size: 2.25rem;
            }
            p{
                font-size: 1.25rem; 
                margin: 0rem 2rem 3rem;
            }
            .services-wrapper {
                grid-template: 1fr/1fr 1fr;
                width: 90vw;
                .accordion{
                // max-width: 43vw;
                min-width: 0;
                }
            } 
        
    }
    @media screen and (min-width: $lg) {

    }
}

</style>