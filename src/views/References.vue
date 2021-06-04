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
    #references {
        height: 100%;
        width: 100vw;
        padding-top: 6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h2 {
            text-align: center;
            font-weight: normal;
            letter-spacing: 1.5px;
            margin-bottom: 20px;
        }
    }
</style>