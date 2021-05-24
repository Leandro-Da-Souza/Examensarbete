<template>
    <div id="MenuModal">
        <ul class="links">
           <a href=""><li @click="$emit('close')">About</li></a>
           <a href=""><li @click="$emit('close')">Våra tjänster</li></a>
           <a href=""><li @click="$emit('close')">Referenser</li></a>
           <a href=""><li @click="$emit('close')">Kontakt</li></a>
        </ul>
    </div>  
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
@import '../variables';

#MenuModal{
    background-color: $global-green-color;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    //height: 200px;
    li{
        background-color: $global-green-color;
        color: #fff;
        
    }
}

</style>