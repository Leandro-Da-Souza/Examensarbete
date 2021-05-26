<template>
    <div class="card" :class="active ? 'active-card' : ''">
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
    mounted() {
        console.log(this.active)
    }
}
</script>

<style scoped lang="scss">
    .card {
        width: 287.45px;
        height: 367px;
        // padding: 10px 20px;
        box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            width: 229px;
            background-position: center;
        }
        .quote {
            font-style: italic;
        } 
    }
    .active-card {
            width: 290.45px;
            height: 375px;
            box-shadow: 0px 7px 7px rgba(0,0,0,0.35);
    }

</style>