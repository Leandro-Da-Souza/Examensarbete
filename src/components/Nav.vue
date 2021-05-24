<template>
<div class="nav-container">
    <div class="nav">
        <img src="@/assets/Logo.svg" alt="logo" />
        <i @click="showModal = true" class="hamburger-icon fas fa-bars fa-2x"></i>

        <MenuModal v-if="showModal" @close="showModal = false" />
    </div>
</div>
</template>
<script>
import MenuModal from '@/components/MenuModal.vue'
export default {
    data() {
        return {
            showModal: false,
        }
    },
    components:{
        MenuModal
    }
    
}
</script>

<style scoped lang="scss">
@import '../variables';

.nav-container {
      //position: absolute;
      width: 100%;
      z-index: 999;
    }

.nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    padding-left: 20px;

    img{
        width: 8rem;
    }
    .hamburger-icon{
        color: $global-green-color;
        cursor: pointer;
        //position: absolute;
        //position: right;
        width: 50px;
    }
    
}

</style>