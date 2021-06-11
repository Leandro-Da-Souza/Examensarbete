<template>
    <div class="nav-container">
        <div class="nav">
            <a class="logo" @click="scrollToHome(), showMenu = false, burgerAni = false">
                <img src="@/assets/Logo.svg" alt="logo"/>
            </a>

            <div class="nav-links" :class="showMenu ? 'active-nav' : ''">
                <a @click="scrollToAbout(), showMenu = false, burgerAni = false">Om oss</a>
                <a @click="scrollToServices(), showMenu = false, burgerAni = false">Våra tjänster</a>
                <a @click="scrollToRef(), showMenu = false, burgerAni = false">Referenser</a>
                <a @click="scrollToContact(), showMenu = false, burgerAni = false">Kontakt</a>
                <router-link to="/login" class="log-in">Logga in</router-link>
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
    margin-bottom: 5rem;
    width: 100%;
    z-index: 3000;
    -webkit-box-shadow: 0 7px 8px -6px rgb(196, 196, 196);
    -moz-box-shadow: 0 7px 8px -6px rgb(196, 196, 196);
    box-shadow: 0 7px 8px -6px rgb(196, 196, 196);
    .nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 5rem;
        width: 100vw;
        .logo{
            cursor: pointer;
            img{
                margin: 0 0 0 2rem;
                width: 8rem;
            }
        }
        .nav-links{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            a{
                background-color: transparent;
                border: none;
                cursor: pointer;
                color: $global-green-color;
                font-family: $global-nav-font;
                font-size: 1.2rem;
                text-decoration: none;
                list-style: none;
                margin: 0 2rem 0 0;
                white-space: nowrap;
            }
            .log-in{
                color: #6a6a6a;
                font-size: 1rem;
            }
        }
        .hamburger-icon{
            background: none;
            cursor: pointer;
            display: none;
            margin: 0 1.8rem 0 0;
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

@media screen and (max-width: $sm) {
    
    .nav-container{
        nav{
            .logo{
                //margin: 0 0 0 10rem;
                background-color: red;
                img{
                    margin: 0 0 0 10rem !important;
                }
            }
        }
        .nav-links{
            position: absolute;
            right: 0rem;
            height: 100vh;
            width: 100%;
            top: 0rem;
            background-color: $global-green-color;
            flex-direction: column;
            align-items: flex-start !important;
            justify-content: center !important;
            transform: translateY(100%);
            transition: all 0.5s ease-in;
            padding: 0 1.8rem;
            z-index: -2;
            a{
                border-bottom: solid 2px rgba(255, 255, 255, 0.3) !important;
                color: $global-bg-color !important;
                font-size: 1.8rem !important;
                padding:  0 3rem;
                margin: 0rem !important;
                width: 100%;
            }
            .log-in{
                border: none !important;
                color: #6a6a6a !important;
                font-size: 1.5rem !important;
            }
        }
        .active-nav{
            transform: translateY(0%);
        }   
        .hamburger-icon{
            background: none;
            display: block !important;
            z-index: 5000;
           
            .active-burger{
                transform: rotate(-44deg) translate(-5px, 5px);
            }
            .active-burger2{
                opacity: 0;
            }
            .active-burger3{
                transform: rotate(45deg) translate(-8px, -7px);
            }
        }
    }
}


</style>