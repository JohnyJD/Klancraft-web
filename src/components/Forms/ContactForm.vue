<template>
    <div>
        <h2 @click="changeForm(true)">Streamer</h2>
        <h2 @click="changeForm(false)">Hráč</h2>
    </div>
    <div class="form">
        <div><Input name="name" text="KRSTNÉ MENO" @inputChanged="inputChanged" :error="validationErrors.name" /></div> 
        <div><Input name="email" text="EMAIL" @inputChanged="inputChanged" :error="validationErrors.nick" /></div> 
        <div><Input name="nick_minecraft" text="NICK MINECRAFT" @inputChanged="inputChanged" :error="validationErrors.nick" /></div> 
        <div><Input name="nick_discord" text="NICK DISCORD" @inputChanged="inputChanged" :error="validationErrors.nick" /></div> 
        <div class="form full-width" v-if="streamerForm">
            <div><Input name="name" text="MENO" @inputChanged="inputChanged" :error="validationErrors.name" /></div> 
            <div><Input name="nick" text="NICK" @inputChanged="inputChanged" :error="validationErrors.nick" /></div> 
            <div class="full-width"><Input name="aboutme" text="POVEDZ NÁM NIEČO O SEBE" :isTextArea="true" @inputChanged="inputChanged" :error="validationErrors.aboutme" /></div>
        </div>
        <div class="form full-width" v-else>
            <div class="full-width"><Input name="aboutme" text="POVEDZ NÁM NIEČO O SEBE" :isTextArea="true" @inputChanged="inputChanged" :error="validationErrors.aboutme" /></div>
        </div> 
        <div class="button full-width"><Button buttonText="ODOSLAŤ" @buttonClick="formSubmit"/></div>
    </div>
</template>

<script>
import Input from './Input.vue'
import Button from '../Buttons/Button.vue'

import {reactive, ref} from 'vue'

export default {
    components: {
        Input, Button
    },
    setup() {
        var formData = reactive({'name' : '', 'email' : '', 'nick_minecraft' : '', 'nick_discord' : ''});
        var validationErrors = reactive({'name' : '', 'nick' : '', 'aboutme' : ''});
        var streamerForm = ref(false);
        function inputChanged(value) {
            console.log('Emited new value : ' + value.name);
            formData[value.name] = value.data;
        }
        function formSubmit() {
            if(streamerForm.value == true ) {
                console.log('Form submit - streamer');
            }
            else {
                console.log('Form submit - hrac');
            }
        }
        function changeForm(value) {
            if(value != streamerForm.value) {
                console.log("sdjfpasdf jsdafj asdjf klasdjklôf asdj fsd")
                streamerForm.value = value;
            }
        } 
        return {inputChanged, formData, formSubmit, validationErrors, streamerForm, changeForm};
    },
}
</script>

<style scoped>
    .form {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .form > div {
        width: 45%;
        margin: 5px 0;
    }
    .form > .full-width {
        width: 100% !important;
    }
    .button {
        max-width: 300px;
    }
</style>