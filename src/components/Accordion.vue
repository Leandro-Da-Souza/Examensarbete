<template>
  <div class="accordion-wrapper">
      <div class="title-container">
        <h3>{{title}}</h3>
        <i class="fas fa-arrow-circle-down fa-lg" @click="toggle = !toggle" v-if="!toggle"></i>
        <i class="fas fa-arrow-circle-up fa-lg" @click="toggle = !toggle" v-else></i>
      </div>
    <div class="content-container" v-if="toggle">
        <p>{{content}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "Accordion",
    props: {
        title: String,
        content: {
            type: String,
            default: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos magnam tempore illo deserunt sequi placeat, dicta, voluptatem repudiandae animi voluptas quos error architecto sed rem incidunt quisquam? Repellendus, porro modi!"
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
    margin-bottom: 10px;
    width: 90%;
    .title-container {
        background-color: $global-green-color;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        i, h3 {
            background-color: $global-green-color;
            color: $global-bg-color;
            padding: 6px;
        }
        i {
            margin-top: 5px
        }
        
    }
    .content-container {
        border-top: none;
        min-height: 100px;
        min-width: 100%;
        -webkit-box-shadow: -4px 6px 17px -3px rgba(0,0,0,0.64); 
        box-shadow: -4px 6px 17px -3px rgba(0,0,0,0.64);
;
    }
}

</style>