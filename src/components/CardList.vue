<template>
    <div class="card-list">
        <ul>
            <li v-for="(card, index) in cards" :key="index" :style="listPosition">
                <Card :item="card" :active="index == currentIndex" />
            </li>
        </ul>
        <div class="bullet-container">
            <div class="bullet" v-for="(card, index) in cards" :key="index" @click="changeImage(index)" :class="index == currentIndex ? 'active-bullet' : ''">
            </div>
        </div>
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
            currentIndex: 0,
        }
    },
    computed: {
        listPosition() {
            return { transform: `translateX(-${this.currentIndex * 100}%)`}
        },
    },
    methods: {
        changeImage(i) {
            this.currentIndex = i
        }
    }
}
</script>

<style scoped lang="scss">
    .card-list {
        margin: 10px;
        height: 60vh;
        ul {
            display: flex;
            overflow: hidden;
            list-style-type: none;
            li {
                margin: 20px 10px;
            }
        }
        .bullet-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .bullet {
                width: 10px;
                margin: 10px;
                height: 10px;
                background-color: #000;
                border-radius: 50%;
                opacity: 50%;
            }
            .active-bullet {
                opacity: 100%;
                width: 12px; 
                height: 12px;
            }
        }
    }

</style>