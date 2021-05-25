<template>
    <div class="card-list">
        <ul>
            <li v-for="(card, index) in cards" :key="index">
                <Card :item="card" :active="index == currentIndex" />
            </li>
        </ul>
    </div>
</template>

<script>
import Card from './Card.vue'

export default {
    name: "CardList",
    components: {
        Card
    },
    data() {
        return {
            cards: [
                {
                    img: "https://source.unsplash.com/1600x900/?nature,flowers",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, laborum corporis perferendis repellendus voluptates dignissimos esse!",
                    quote: "corporis perferendis repellendus"
                },
                {
                    img: "https://source.unsplash.com/1600x900/?nature,trees",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, laborum corporis perferendis repellendus voluptates dignissimos esse!",
                    quote: "corporis perferendis repellendus"
                },
                {
                    img: "https://source.unsplash.com/1600x900/?nature,garden",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, laborum corporis perferendis repellendus voluptates dignissimos esse!",
                    quote: "corporis perferendis repellendus"
                },
            ],
            currentIndex: 0
        }
    }
}
</script>

<style scoped lang="scss">
    .card-list {
        ul {
            display: flex;
            overflow: scroll;
            list-style-type: none;
        }
    }

</style>