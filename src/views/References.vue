<template>
    <div id="references">
        <h2>Referenser</h2>
        <CardList/>
    </div>
</template>

<script>
import CardList from '../components/CardList'
export default {
    name: 'References',
    components: {
        CardList
    }
}
</script>

<style lang="scss" scoped>
@import '../variables';
    #references {
        height: 100%;
        width: 100vw;
        padding-top: 6rem;
        h2 {
            text-align: center;
            font-weight: normal;
            letter-spacing: 1.5px;
            margin-bottom: 2rem;
        }
        @media screen and (min-width: $sm) {
            h2{
                font-size: 1.9rem;
            }
        }
        @media screen and (min-width: $md) {
            h2{
                font-size: 2.25rem;
            }
        }
    }
</style>