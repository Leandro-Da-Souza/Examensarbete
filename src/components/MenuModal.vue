<template>
    <div id="MenuModal">

        <button class="close-menumodal" @click="$emit('close')">
           <!-- <i class="fas fa-times"></i>--> <div>&plus;</div> 
        </button>
        
        <ul class="nav-links">
			<li><a @click="$emit('close')">Om oss</a></li>
			<li><a @click="$emit('close')">Våra tjänster</a></li>
			<li><a @click="$emit('close')">Referenser</a></li>
            <li><a @click="$emit('close')">Kontakt</a></li>
		</ul>
     
    </div>   
</template>

<script>
export default {

    methods:{
        scrollTo() {
        var element = document.getElementById("contact");
        element.scrollIntoView({behavior: "smooth", block: 'start'}); // Top
        }
    } 
}
</script>

<style scoped lang="scss">
@import '../variables';

#MenuModal{
    background-color: $global-green-color;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    padding: 0rem 1.8rem;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .close-menumodal{
        background-color: $global-green-color;
        border: none;
        color: $global-bg-color;
        cursor: pointer;
        margin-top: -0.8rem;
        margin-right: -0.5rem;
        top: 0;
        div{
            background-color: $global-green-color;
            color: $global-bg-color; 
            font-size: 5rem;
            transform: rotate(45deg);
        }
    }
    .menu-overlay{
        z-index: 10;
    }
    .nav-links, li, a{
        background-color: $global-green-color;
        font-size: 2rem;      
    }
    .nav-links{
        height: 100%;
        //margin-top: -2rem;
        //padding: 3.2rem;
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