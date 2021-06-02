<template>
    <div class="card-list">
        <ul>
            <li v-for="(card, index) in cards" :key="index" :style="listPosition" @click="changeImage(index)" >
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
// import CardClass from '../helpers/CardClass'

export default {
    name: "CardList",
    components: {
        Card
    },
    data() {
        return {
            cards: [
                // new CardClass('https://source.unsplash.com/1600x900/?nature,flowers', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, laborum corporis perferendis repellendus voluptates dignissimos esse!", "corporis perferendis repellendus"),
                // new CardClass('https://source.unsplash.com/1600x900/?nature,trees', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, laborum corporis perferendis repellendus voluptates dignissimos esse!", "corporis perferendis repellendus"),
                // new CardClass('https://source.unsplash.com/1600x900/?nature,garden', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, laborum corporis perferendis repellendus voluptates dignissimos esse!", "corporis perferendis repellendus")
            ],
            storeCards: [],
            currentIndex: 1,
            touch: {
                startX: 0,
                endX: 0
            }
        }
    },
    computed: {
        listPosition() {
            return { 
                transform: `translateX(-${this.currentIndex * 100}%)`,
                transition: `all 0.5s ease`
            }
        },
    },
    methods: {
        changeImage(i) {
            this.currentIndex = i
        },
        nextIndex() {
            if(this.currentIndex < this.cards.length - 1) {
                this.currentIndex++
            }
        },
        prevIndex() {
            if(this.currentIndex > 0) {
                this.currentIndex--;
            }
        },
        touchstart(event) {
            this.touch.startX = event.touches[0].clientX;
            this.touch.endX = 0;
        },
        touchmove(event) {
            this.touch.endX = event.touches[0].clientX;
        },
        touchend() {
            if(!this.touch.endX || Math.abs(this.touch.endX - this.touch.startX) < 20)
                return;
          
            if(this.touch.endX < this.touch.startX)
                this.nextIndex()
            else
                this.prevIndex()
        }
    },
    async mounted() {
        await this.$store.dispatch('GET_CARDS')
        this.cards = this.$store.state.cards
        console.log(this.storeCards) 
        this.$el.addEventListener('touchstart', event => this.touchstart(event));
        this.$el.addEventListener('touchmove', event => this.touchmove(event));
        this.$el.addEventListener('touchend', () => this.touchend());
        // this.$el.addEventListener('onkeydown', event => this.touchstart(event));
        // this.$el.addEventListener('onkeypress', event => this.touchmove(event));
        // this.$el.addEventListener('onkeyup', this.touchend())
    }
}
</script>

<style scoped lang="scss">
@import '../variables';
    .card-list {
        margin: 10px;
        // width: 100%;
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
                background-color: $global-green-color;
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