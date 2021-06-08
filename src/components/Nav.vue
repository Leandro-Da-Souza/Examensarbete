<template>
<div class="nav-container">
    <div class="nav">
        <a @click="scrollToHome()">
            <img src="@/assets/Logo.svg" alt="logo"/>
        </a>
        
        <i @click="showModal = true" class="hamburger-icon fas fa-bars fa-2x"></i>

        <div class="nav-links">
			<a @click="scrollToAbout()">Om oss</a>
			<a @click="scrollToServices()">Våra tjänster</a>
			<a @click="scrollToRef()">Referenser</a>
            <a @click="scrollToContact()">Kontakt</a>
		</div>
        
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
        scrollToHome() {
            var home = document.getElementById("home");
            home.scrollIntoView({behavior: "smooth", block: 'start'});
        },
        scrollToAbout() {
            var about = document.getElementById("about");
            about.scrollIntoView({behavior: "smooth", block: 'start'});
        },
        scrollToServices() {
            var services = document.getElementById("services");
            services.scrollIntoView({behavior: "smooth", block: 'start'});
        },
        scrollToRef() {
            var ref = document.getElementById("references");
            ref.scrollIntoView({behavior: "smooth", block: 'start'});
        },
        scrollToContact() {
            var contact = document.getElementById("contact");
            contact.scrollIntoView({behavior: "smooth", block: 'start'});
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
        width: 100%;
            a{
                cursor: pointer;
                color: $global-green-color;
                font-family: $global-nav-font;
                font-size: 1.2rem;
                text-decoration: none;
                list-style: none;
                margin-bottom: 0.4rem;
                margin-top: 0.4rem;
                margin-left: 2.7rem;
                white-space: nowrap;
            }
        
    }
        .hamburger-icon{
            visibility: hidden;
            //display: none;
        }

    }
}

</style>