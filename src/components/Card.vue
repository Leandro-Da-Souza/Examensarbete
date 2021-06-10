<template>
    <div class="card" :class="active ? 'active-card' : ''">
        <img :src="item.img">
        <p class="description">{{item.description}}</p>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: [
        "item",
        "active"
    ],
}
</script>

<style scoped lang="scss">
@import '../variables';
    .card {
        background-color: #fff;
        width: 18rem;
        height: 23rem;
        box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 1.9rem;
        margin: 0rem 0.5rem;
        img {
            margin: 40px 0 0 0;
            width: 80%;
            height: 20vh;
            object-position: center;
            object-fit: cover;
        }
        .description {
            background-color: transparent;
            padding: 10px 30px;
        }
    }
    .active-card {
        //background-color: rgb(96, 133, 96, 0.5);
        box-shadow: 0px 7px 7px rgba(0,0,0,0.35);
        transition: all 0.5s ease;  
         .description {
            //color: $global-bg-color;
        }
    }

    @media screen and(min-width: $sm) {
        .card {
            width: 21rem;
            height: 26rem;
            margin: 0rem 1rem;
            img {
                width: 80%;
                height: 25vh;
            }
            .description {
            font-size: 1.125rem;
            }
        }
    }
</style>