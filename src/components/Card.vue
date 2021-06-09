<template>
    <div class="card" :class="active ? 'active-card' : ''">
        <img :src="item.img">
        <p class="description">{{item.description}}</p>
        <!--<p class="quote">"{{item.quote ? item.quote : 'ajksdnoajsdnasjkn'}}"</p>-->
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
@import '../variables';
    .card {
        width: 18rem;
        height: 23rem;
        box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 1.9rem;
        img {
            margin: 40px 0 0 0;
            width: 14.3rem;
            height: 10.75rem;
            object-position: center;
            object-fit: cover;
        }
        .description {
            background-color: transparent;
            padding: 10px 30px;
        }
        /** 
        .quote {
            font-style: italic;
        } */
    }
    .active-card {
       // display: flex;
        width: 18rem;
        height: 23.5rem;
        box-shadow: 0px 7px 7px rgba(0,0,0,0.35);
        transition: all 0.5s ease;
       // align-items: center;
       // justify-content: center;     
    }

    @media screen and(min-width: $sm) {
        .card {
            width: 28rem;
            height: 40rem;
            img {
                width: 22rem;
                height: 15rem;
            }
            .description {
            background-color: transparent;
            padding: 10px 30px;
        }
        }
    }

</style>