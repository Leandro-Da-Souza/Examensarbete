<template>
<div class="nav-container">
    <div class="nav">
        <a href="#home">
            <img src="@/assets/Logo.svg" alt="logo"/>
        </a>
        
        <i @click="showModal = true" class="hamburger-icon fas fa-bars fa-2x"></i>

        <ul class="nav-links">
			<li><a href="/#about">Om oss</a></li>
			<li><a href="/#services">Våra tjänster</a></li>
			<li><a href="/#references">Referenser</a></li>
            <li><a @click="scrollToTop()">Kontakt</a></li>
		</ul>
        
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
    },
    methods:{
        scrollToTop() {
        var element = document.getElementById("contact");
        element.scrollIntoView({behavior: "smooth"});
        }
    }  
    
}
</script>

<style scoped lang="scss">
@import '../variables';

.nav-container {
    position: fixed;
    width: 100%;
    z-index: 3000;
}

.nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    margin: 0rem 5vw;

    img{
        width: 8rem;
    }

    .nav-links{
        display: none;
    }
    .hamburger-icon{
        color: $global-green-color;
        cursor: pointer;
        display: block;
       // position: absolute;
        //right: 100%;
        //width: 50px;  
    } 
}

@media screen and (min-width: 765px) {
    .nav-container{
        
       .nav-links{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        //padding: 3.2rem;
        width: 100%;
        li{
            border-bottom: solid 2px rgba(255, 255, 255, 0.3);
            cursor: pointer;
            list-style: none;
            margin-bottom: 0.4rem;
            margin-top: 0.4rem;
            a{
                color: $global-green-color;
                font-family: $global-nav-font;
                font-size: 1.2rem;
                text-decoration: none;
                margin-left: 2.7rem;
                white-space: nowrap;
            }
        }
    }
        .hamburger-icon{
            visibility: hidden;
            //display: none;
        }

    }
}

</style>