<template>
    <div class="card" :class="active ? 'active-card' : ''">
        <img :src="item.img">
        <p class="description">{{item.description}}</p>
        <p class="quote">"{{item.quote}}"</p>
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
        border-radius: 30px;
        img {
            margin: 40px 0px;
            width: 229px;
            background-position: center;
        }
        .description {
            padding: 10px 20px;
        }
        .quote {
            font-style: italic;
        } 
    }
    .active-card {
            width: 290.45px;
            height: 375px;
            box-shadow: 0px 7px 7px rgba(0,0,0,0.35);
            transition: all 0.5s ease;
    }

    @media screen and(min-width: 768px) {
        .card {
            width: 450px;
            height: 574.53px;
            img {
                width: 351px;
                height: 242px;
            }
        }
    }

</style>