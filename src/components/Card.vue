<template>
    <div class="card">
        <img :src="item.img">
        <div class="description">{{item.description}}</div>
        <div class="quote">"{{item.quote}}"</div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: [
        "item",
        "active"
    ],
    computed: {

    }
}
</script>

<style scoped lang="scss">
    .card {
        width: 287.45px;
        img {
            width: 229px;
        }
        .quote {
            font-style: italic;
        }
    }

</style>