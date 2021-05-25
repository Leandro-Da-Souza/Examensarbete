<template>
    <div id="references">
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
    }
</style>