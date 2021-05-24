<template>
    <div id="MenuModal">
        
        <!--
        <div class="links">
            <router-link @click="$emit('close')" to="/about">About</router-link>
            <router-link @click="$emit('close')" to="/services">Våra tjänster</router-link>
            <router-link @click="$emit('close')" to="/references">Referenser</router-link>
            <router-link @click="$emit('close')" to="/contact">Kontakt</router-link>
        </div>-->

        <ul class="nav-links">
			<li @click="$emit('close')"><a href="/#about">About</a></li>
			<li @click="$emit('close')"><a href="/#services">Services</a></li>
			<li @click="$emit('close')"><a href="/#references">References</a></li>
            <li @click="$emit('close')"><a href="/#contact">Contact</a></li>
		</ul>
        <!--
         <div>
            <router-view></router-view>
        </div>-->
    </div>   
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import '../variables';

#MenuModal{
    background-color: $global-green-color;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .menu-overlay{
        z-index: 10;
    }
    li{
        background-color: $global-green-color;
        color: #fff;
        
    }
}

</style>