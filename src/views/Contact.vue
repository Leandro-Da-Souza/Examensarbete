<template>
    <div id="contact">
        <div class="contact-container">
            <h2>Kontakta oss</h2>
            <p class="contact-info">Om du har några frågor eller vill boka ett möte skicka ett mail så hör vi av oss så fort vi kan.</p>
            <form class="form-container" @submit.prevent="handleForm">
                <input type="text" placeholder="namn" v-model="name">
                <input type="text" placeholder="email" v-model="email">
                <textarea placeholder="ditt meddelande" v-model="message"></textarea>
                <button type="submit">Skicka</button>
            </form>
            <p class="number">Eller ring oss på
                <a href="tel:+081244557">08-124 45 57</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            name: "",
            email: "",
            message: ""
        }
    },
    methods: {
        handleForm() {
            if(!this.name || !this.email || !this.message) {
                console.log('please fill out form')
                return
            }
            const userRequest = {
                name: this.name,
                email: this.email,
                message: this.message
            }

            this.name = ""
            this.email = ""
            this.message = ""
            console.log(userRequest) 
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';

    #contact{
        margin-top: 6rem;
        height: 80vh;
        .contact-container {
            h2 {
                color: $global-font-color;
                text-align: center;
                font-weight: normal;
                letter-spacing: 1.5px;
                margin-bottom: 1.25rem;
            }
            .contact-info {
                padding: 0px 2.5rem 0.5rem 2.5rem;
                text-align: center;
                letter-spacing: 0.8px;
            }
            .form-container {
                margin-top: 3px;
                width: 100vw;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                input[type="text"] {
                    width: 48vw;
                    height: 2.5rem;
                    margin: 10px 0;
                    border-radius: 1.25rem;
                    border: none;
                    box-shadow: 2px 4px 6px rgba(0,0,0,0.25);
                    text-indent: 15px;
                }
                textarea {
                    width: 48vw;
                    height: 8rem;
                    margin: 10px 0;
                    border: none;
                    border-radius: 1.25rem;
                    text-indent: 10px;
                    box-shadow: 2px 4px 6px rgba(0,0,0,0.25);
                }
                button[type="submit"] {
                    width: 97px;
                    height: 35px;
                    margin: 10px 0;
                    font-size: 1.1rem;
                    font-weight: bold;
                    background-color: $global-green-color;
                    color: #fbfbfb;
                    border: none;
                    box-shadow: 2px 2px 4px rgba(0,0,0,0.25);
                    border-radius: 6px;
                }  
            }
            .number {
                text-align: center;
                margin-top: 20px;
                font-size: 0.85rem;
            }
            
        }
        
    }
    @media screen and (min-width: 765px) {
        #contact{
            margin-top: 6rem;
            height: 80vh;
        .contact-container {
            h2{
                font-size: 1.9rem;
            }
            p{
                font-size: 1.125rem;
            }
            .form-container {
                input[type="text"] {
                    max-width: 32rem;
                    height: 3.2rem;
                    margin: 10px 0;
                    border-radius: 3rem;
                }
                textarea {
                    max-width: 32rem;
                    height: 11rem;
                }
                button[type="submit"] {
                    width: 8rem;
                    height: 40px;
                    font-size: 1.4rem;
                }   
            }  
        }   
    } 
    @media screen and (min-width: 1204px) {
        h2{
            font-size: 2.25rem;
        }
        p{
            font-size: 1.25rem; 
        }   
    }
    @media screen and (min-width: 1920px) {

    }          
}
</style>