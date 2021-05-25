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
			<li><a @click="$emit('close')" href="/#about">About</a></li>
			<li><a @click="$emit('close')" href="/#services">Services</a></li>
			<li><a @click="$emit('close')" href="/#references">References</a></li>
            <li><a @click="$emit('close')" href="/#contact">Contact</a></li>
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

<style scoped lang="scss">
@import '../variables';

#MenuModal{
    background-color: $global-green-color;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .menu-overlay{
        z-index: 10;
    }
    .nav-links, li, a{
        background-color: $global-green-color;
        font-size: 2rem;      
    }

    .nav-links{
        padding: 3.2rem;
        width: 100%;
        li{
            border-bottom: solid 2px rgba(255, 255, 255, 0.3);
            cursor: pointer;
            line-height: 6rem;
            list-style: none;
            margin-bottom: 0.4rem;
            margin-top: 0.4rem;
            a{
                color: #fff;
                font-family: $global-nav-font;
                text-decoration: none;
            }
        }
    }
}

</style>