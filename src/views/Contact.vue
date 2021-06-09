<template>
    <div id="contact">
        <div class="contact-container">
            <!--<h3>firebaseData</h3>
            {{ firebaseData }}
            <h3>Form Data</h3>
            {{ formData }}-->
            
            <h2>Kontakta oss</h2>
            <p class="contact-info"><span>Om du har några frågor eller vill boka ett möte med oss kan du skriva i formuläret nedan, så hör vi av oss så fort vi kan.</span> <br> Du kan även maila till oss direkt: 
                <a href="mailto:planteramera@gmail.com">planteramera@gmail.com</a>
            </p>
            <form class="form-container" @submit.prevent="handleForm">
                <input 
                type="text" 
                name="Full Name" 
                placeholder="För- och efternamn" 
                v-model="name"
                maxlength="40"
                >
                <input 
                type="email" 
                name="Email"
                placeholder="E-mail" 
                maxlength="40"
                v-model="email"
                >
                <textarea 
                name="Message" 
                placeholder="Ditt meddelande" 
                maxlength="200"
                v-model="message">
                </textarea>
                <button type="submit">Skicka</button>
            </form>
            <p class="number">Eller ring oss på
                <a href="tel:+081244557">08-124 45 57</a>
                <br>
                Mån-fre: 08:00-16:00
            </p>
            
        </div>
    </div>
</template>

<script>
import db from '../db';

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

            db.database().ref('contact').push(userRequest)

            this.name = ""
            this.email = ""
            this.message = ""
            console.log(userRequest)
        }
    },
}
</script>

<style scoped lang="scss">
@import '../variables';

    #contact{
        margin-top: 6rem;
        height: 80vh;
        .contact-container {
            margin: 0 2rem;
            h2 {
                color: $global-font-color;
                font-weight: normal;
                letter-spacing: 1.5px;
                margin-bottom: 2rem;
                text-align: center;
            }
            .contact-info {
                letter-spacing: 0.8px;
                margin-bottom: 2rem;
                text-align: start;
            }
            .form-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
                //margin-top: 3px;
                width: 100%;
                input[type="text"], 
                input[type="email"] {
                    width: 60vw;
                    height: 2.5rem;
                    margin: 10px 0;
                    border-radius: 1.25rem;
                    border: none;
                    box-shadow: 2px 4px 6px rgba(0,0,0,0.25);
                    padding: 1rem;
                    //text-indent: 15px;
                    &:active, 
                    &:focus, 
                    &:hover{
                        outline: none;
                    }
                }
                textarea {
                    border: none;
                    border-radius: 1.25rem;
                    box-shadow: 2px 4px 6px rgba(0,0,0,0.25);
                    height: 8rem;
                    margin: 15px 0;
                    padding: 1rem;
                    //text-indent: 15px;
                    width: 60vw;
                    &:active, 
                    &:focus, 
                    &:hover{
                        outline: none;
                    }
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
                padding-bottom: 4rem;
            }  
        }  
    }
    @media screen and (min-width: $sm) {
        #contact{
            margin-top: 6rem;
            //height: 80vh;
        .contact-container {
            margin: 0 3rem;
            h2{
                font-size: 1.9rem;
            }
            p{
                font-size: 1.125rem;
            }
            .form-container {
                input[type="text"],
                input[type="email"] {
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
            p{
                font-size: 1.125rem;
            }
        }   
    } 
    @media screen and (min-width: $md) {
        #contact{
            .contact-container{
                margin: 0 4rem;
            
                ::placeholder{
                    font-size: 1rem;
                }
                h2{
                    font-size: 2.25rem;
                }
                p{
                    font-size: 1.25rem; 
                } 
            }
        }  
    }
    @media screen and (min-width: $lg) {

    }          
}
</style>