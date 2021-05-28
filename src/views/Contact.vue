<template>
    <div id="contact">
        <div class="contact-container">
            <h2>Kontakta oss</h2>
            <p class="contact-info">Om du har några frågor eller vill boka ett möta skicka ett mail så hör vi av oss så fort vi kan.</p>
            <form class="form-container" @submit.prevent="handleForm">
                <input type="text" placeholder="namn" v-model="name">
                <input type="text" placeholder="email" v-model="email">
                <textarea placeholder="ditt meddelande" v-model="message"></textarea>
                <button type="submit">Skicka</button>
            </form>
            <p class="number">Eller ring oss på 08-124 45 57</p>
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
                margin-bottom: 20px;
            }
            .contact-info {
                padding: 0px 40px 10px 40px;
                text-align: center;
                letter-spacing: 0.8px;
            }
            .form-container {
                margin-top: 3px;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                input[type="text"] {
                    width: 240px;
                    height: 36px;
                    margin: 10px 0;
                    border-radius: 20px;
                    border: none;
                    box-shadow: 2px 4px 6px rgba(0,0,0,0.25);
                    text-indent: 15px;
                }
                textarea {
                    width: 244px;
                    height: 97px;
                    margin: 10px 0;
                    border: none;
                    border-radius: 20px;
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
</style>