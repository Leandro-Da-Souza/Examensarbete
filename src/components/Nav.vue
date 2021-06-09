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

            <div class="nav-links" :class="showMenu ? 'active-nav' : ''">
                <a @click="scrollToAbout(), showMenu = false, burgerAni = false">Om oss</a>
                <a @click="scrollToServices(), showMenu = false, burgerAni = false">Våra tjänster</a>
                <a @click="scrollToRef(), showMenu = false, burgerAni = false">Referenser</a>
                <a @click="scrollToContact(), showMenu = false, burgerAni = false">Kontakt</a>
            </div>

            <div class="hamburger-icon" @click="showMenu = !showMenu; burgerAni = !burgerAni">
                <div class="line-1" :class="burgerAni ? 'active-burger' : ''"></div>
                <div class="line-2" :class="burgerAni ? 'active-burger2' : ''"></div>
                <div class="line-3" :class="burgerAni ? 'active-burger3' : ''"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showMenu: false,
            burgerAni: false,
        }
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
        },   
    },
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
        .nav-links{
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
            width: 100%;
            a{
                background-color: transparent;
                border:none;
                cursor: pointer;
                color: $global-green-color;
                font-family: $global-nav-font;
                font-size: 1.2rem;
                text-decoration: none;
                list-style: none;
                margin: 0 1.5rem;
                white-space: nowrap;
            }
        }
        .hamburger-icon{
            background: none;
            cursor: pointer;
            display: none;
            div{
                background-color: $global-green-color;
                height: 4px;  
                margin: 5px;
                width: 28px; 
                transition: all 0.3s ease;
            }
        }
    }    
}

@media screen and (max-width: 765px) {
    .nav-container{
        .nav-links{
            position: absolute;
            right: 0rem;
            height: 100vh;
            width: 100%;
            top: 5rem;
            background-color: $global-green-color;
            flex-direction: column;
            align-items: flex-start !important;
            justify-content: center !important;
            transform: translateX(100%);
            transition: all 0.5s ease-in;
            padding: 0 1.8rem;
            a{
                border-bottom: solid 2px rgba(255, 255, 255, 0.3) !important;
                color: white !important;
                font-size: 1.8rem !important;
                padding: 2rem 0;
                margin: 0rem !important;
                width: 100%;
            }
        }
        .active-nav{
            transform: translateX(0%);
        }   
        .hamburger-icon{
            background: none;
            display: block !important;
            z-index: 5000;
           
            .active-burger{
                //background-color: $global-bg-color !important;
                transform: rotate(-44deg) translate(-5px, 5px);
            }
            .active-burger2{
                //background-color: $global-bg-color !important;
                opacity: 0;
            }
            .active-burger3{
                //background-color: $global-bg-color !important;
                transform: rotate(45deg) translate(-8px, -7px);
            }
        }
    }
}

</style>