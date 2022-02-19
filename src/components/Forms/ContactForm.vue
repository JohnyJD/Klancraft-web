<template>
    <div class="form">
        <div><Input name="name" text="MENO" @inputChanged="inputChanged" :error="validationErrors.name" /></div> 
        <div><Input name="nick" text="NICK" @inputChanged="inputChanged" :error="validationErrors.nick" /></div> 
        <div>dsfasdfsdf</div>
        <div><Input name="aboutme" text="POVEDZ NÁM NIEČO O SEBE" :isTextArea="true" @inputChanged="inputChanged" :error="validationErrors.aboutme" /></div>
        <div class="button"><Button buttonText="ODOSLAŤ" @buttonClick="formSubmit"/></div>
    </div>
</template>

<script>
import Input from './Input.vue'
import Button from '../Buttons/Button.vue'

import {reactive} from 'vue'

export default {
    components: {
        Input, Button
    },
    setup() {
        var formData = reactive({'name' : '', 'nick' : '', 'aboutme' : ''});
        var validationErrors = reactive({'name' : '', 'nick' : '', 'aboutme' : ''});
        function inputChanged(value) {
            console.log('Emited new value : ' + value.name);
            formData[value.name] = value.data;
        }
        function formSubmit() {
            console.log('Form submit');
            
        }
        return {inputChanged, formData, formSubmit, validationErrors};
    },
}
</script>

<style scoped>
    .form {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .form > div {
        width: 100%;
        margin: 5px 0;
    }
    .form > div:first-child, .form > div:nth-child(2) {
        width: 45%;
    }
    .button {
        max-width: 300px;
    }
</style>