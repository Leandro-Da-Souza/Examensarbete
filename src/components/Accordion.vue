<template>
  <div class="accordion-wrapper">
      <div class="title-container">
        <h2>{{title}}</h2>
        <i class="fas fa-arrow-circle-down" @click="toggle = !toggle" v-if="!toggle"></i>
        <i class="fas fa-arrow-circle-up" @click="toggle = !toggle" v-else></i>
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
    .title-container {
        background-color: $global-green-color;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        i, h2 {
            background-color: $global-green-color;
            color: $global-bg-color;
            padding: 10px;
        }
        // border: 1px solid red;
    }
}

</style>