<template>
  <div class="accordion-wrapper">
        <div class="title-container" @click="toggle = !toggle">
            <h3>{{title}}</h3>
            <i class="fas fa-arrow-circle-down fa-lg" v-if="!toggle"></i>
            <i class="fas fa-arrow-circle-up fa-lg" v-else></i>
        </div>
        <transition name="fade">
            <div class="content-container" v-if="toggle">
                <p class="text-content">{{content}}</p>
            </div>
        </transition>
  </div>
</template>

<script>
export default {
    name: "Accordion",
    props: {
        title: String,
        content: {
            type: String,
            default: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos magnam tempore illo deserunt sequi placeat, dicta, voluptatem repudiandae animi voluptas quos error architecto sed rem incidunt quisquam?"
        }
    },
    data() {
        return {
            toggle: false
        }
    },
    methods: {
        log(msg) {
            console.log(msg)
        }
    }
    
}
</script>

<style scoped lang="scss">
@import '../variables';

.accordion-wrapper {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    margin-bottom: 0.8rem;
    width: 90vw;
    .title-container {
        background-color: $global-green-color;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        padding: 0.6rem 1rem;
        i, h3 {
            background-color: $global-green-color;
            color: $global-bg-color;
        }
        i {
            margin-top: 5px;
        }    
    }
    .content-container {
        border-top: none;
        min-height: 8vh;
        min-width: 100%;
        //-webkit-box-shadow: -4px 6px 15px -3px rgba(104, 104, 104, 0.64); 
        box-shadow: -4px 6px 15px -3px rgba(104, 104, 104, 0.64);
        padding: 0.6rem 1rem;
        p {
            //color: $global-bg-color;
            font-size: 1rem;
        }       
    }

    .fade-enter-active,
    .fade-leave-active{
        transition: all .3s ease-in-out;
        overflow: hidden;
    }
    .fade-enter, 
    .fade-leave-to{
        opacity: 0;
        //transform: scaleY(0);
    }
     
}

</style>