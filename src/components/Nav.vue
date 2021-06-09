<template>
    <div class="nav-container">
        <div class="nav">
            <a class="logo" @click="scrollToHome()">
                <img src="@/assets/Logo.svg" alt="logo"/>
            </a>
            <!--
            <div id="hamburger-icon" v-if="mobileView">
                <i @click="showModal = true" class="fas fa-bars fa-2x"></i>
            </div>-->

            <div class="nav-links" :class="showMenu ? 'active' : ''">
                <a @click="scrollToAbout()">Om oss</a>
                <a @click="scrollToServices()">Våra tjänster</a>
                <a @click="scrollToRef()">Referenser</a>
                <a @click="scrollToContact()">Kontakt</a>
            </div>

            <div class="hamburger-icon" @click="showMenu = !showMenu">
                <div class="line-1"></div>
                <div class="line-2"></div>
                <div class="line-3"></div>
            </div>
            
            <!--<MenuModal v-if="showModal" @close="showModal = false" />-->
        </div>
    </div>
</template>
<script>
//import MenuModal from '@/components/MenuModal.vue'
export default {
    data() {
        return {
            //mobileView: true,
            //showNav: false,
            showMenu: false,
            showModal: false,
        }
    },
    components:{
        //MenuModal
    },
    methods:{
        /** 
        handleView(){
            this.mobileView = window.innerWidth <= 675;
        },*/

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
        },
        /**
        navAni(){
            const hamburger = document.querySelector('.hamburger');
            const nav = document.querySelector('.nav-links');
            const navLinks = document.querySelectorAll('.nav-links a')

            hamburger.addEventListener('click,' ()=>{
                nav.classList.toggle('nav-active');
            })
            navLinks.forEach(link,index => {
                console.log(index)
            })
             navAni();
        }*/
       
    },
    /** 
    created(){
        this.handleView();
    }  */
}
</script>

<style scoped lang="scss">
@import '../variables';

.nav-container {
    position: fixed;
    width: 100%;
    z-index: 3000;
    .nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 5rem;
        margin: 0rem 1.8rem;
        .logo{
            cursor: pointer;
            img{
                width: 8rem;
            }
        }
        /** 
        #hamburger-icon{
            i{
            color: $global-green-color;
            cursor: pointer;
            display: block;
            }
        } 
        */
        .nav-links{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 100%;
            a{
                background-color: transparent;
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
            cursor: pointer;
            display: none;
            div{
                background-color: $global-green-color;
                height: 4px;  
                margin: 5px;
                width: 28px; 
            }
        }
    }    
}

@media screen and (max-width: 765px) {
    
    .nav-container{
        //overflow-x: hidden;
        .nav-links{
            position: absolute;
            right: 0px;
            height: 100vh;
            width: 100%;
            top: 5rem;
            background-color: $global-green-color;
            flex-direction: column;
            justify-content: center !important;
            transform: translateX(100%);
            transition: transform 0.5s ease-in;
            a{
                color: white !important;
                //opacity: 0;
            }
        }
        .hamburger-icon{
            display: block !important;
        }
        .active{
            transform: translateX(0%);
        }
        
        
    }

}

</style>