<template>
    <div>
        <button class="button-form light" :class="{active : isStreamerForm}" @click="changeForm(true)">Streamer</button>
        <button class="button-form light" :class="{active : !isStreamerForm}" @click="changeForm(false)">Hráč</button>
    </div>
    <div class="form">
        <div><Input name="name" text="KRSTNÉ MENO" :value="formData['name']" @inputChanged="inputChanged" emitType="0" :error="validationErrors.name" /></div> 
        <div><Input name="email" text="EMAIL" :value="formData['email']" @inputChanged="inputChanged" emitType="0" :error="validationErrors.email" /></div> 
        <div><Input name="nick_minecraft" text="NICK MINECRAFT" :value="formData['nick_minecraft']" @inputChanged="inputChanged" emitType="0" :error="validationErrors.nick_minecraft" /></div> 
        <div><Input name="nick_discord" text="NICK DISCORD" :value="formData['nick_discord']" @inputChanged="inputChanged" emitType="0" :error="validationErrors.nick_discord" /></div> 
        <div class="form full-width" v-if="isStreamerForm">
            <div><Input name="twitchLink" text="LINK NA TWITCH" :value="streamerData['twitchLink']" @inputChanged="inputChanged" emitType="1" :error="validationErrors.name" /></div> 
            <div><Input name="socialLink" text="LINK NA SOCIALNÚ SIEŤ" :value="streamerData['socialLink']" @inputChanged="inputChanged" emitType="1" :error="validationErrors.name" /></div> 
            <div class="full-width social" v-for="(field, id) in socialLinksData" :key="id">
                <Input :name="field.name" text="LINK NA SOCIALNÚ SIEŤ" :value="field.value" @inputChanged="inputChanged" emitType="1" :error="validationErrors.name" />
                <div class="remove"><button class="button-form" @click="removeLink(id)">X</button></div>
            </div> 
            <div class="full-width" v-if="socialLinksData.length < 4"><button class="button-form" @click="addLink">Pridať link</button></div>
            <div class="full-width"><Input name="aboutStream" text="OPÍŠ NÁM TVOJ STREAM" :value="streamerData['aboutStream']" :isTextArea="true" emitType="1" @inputChanged="inputChanged" :error="validationErrors.aboutStream" /></div>
            <div class="full-width"><Input name="goals" text="AKÝ JE TVOJ CIEĽ V STREAMOVANÍ ?" :value="streamerData['goals']" :isTextArea="true" emitType="1" @inputChanged="inputChanged" :error="validationErrors.goals" /></div>
            <div class="full-width"><Input name="whyMe" text="PREČO SA CHCEŠ K NÁM PRIDAŤ ?" :value="streamerData['whyMe']" :isTextArea="true" emitType="1" @inputChanged="inputChanged" :error="validationErrors.whyMe" /></div>
        </div>
        <div class="form full-width" v-else>
            <div class="full-width">
                <Select :items="['Idepatooo', 'Annie', 'Kodo', 'Rider TDI']" :value="playerData['fromStreamer']" emitType="2" @itemSelected="itemSelected"/>
            </div>
            <div class="full-width"><Input name="aboutMe" text="POVEDZ NÁM NIEČO O SEBE" :value="playerData['aboutMe']" :isTextArea="true" emitType="2" @inputChanged="inputChanged" :error="validationErrors.aboutme" /></div>
        </div> 
        <div class="button full-width"><Button buttonText="ODOSLAŤ" @buttonClick="formSubmit"/></div>
    </div>
</template>

<script>
import Input from './Input.vue'
import Select from './Select.vue'
import Button from '../Buttons/Button.vue'

import {reactive, ref} from 'vue'

export default {
    components: {
        Input, Button, Select
    },
    setup() {
        var formData = reactive({'name' : '', 'email' : '', 'nick_minecraft' : '', 'nick_discord' : ''});
        var streamerData = reactive({'twitchLink' : '', 'socialLink' : '', 'aboutStream' : '', 'goals' : '', 'whyMe': ''});
        var playerData = reactive({'fromStreamer': '', 'aboutMe': ''});
        var socialLinksData = ref([]);
        var validationErrors = reactive({'name' : '', 'email' : '', 'nick_minecraft' : '', 'nick_discord' : ''});
        var isStreamerForm = ref(false);
        

        function inputChanged(value) {
            console.log('Emited new value : ' + value.name);
            switch (value.type) {
                case '0':
                    if(validationErrors[value.name].length > 0) {
                        validationErrors[value.name] = "";
                    }
                    formData[value.name] = value.data;
                    break;
                case '1':
                    if(value.name.includes('socialLinkAdd')) {
                        console.log('Social link add');
                        var item = socialLinksData.value.find((item) => {return item.name === value.name});
                        item.value = value.data;
                    }
                    else {
                        streamerData[value.name] = value.data;
                    }     
                    break;
                case '2':
                    playerData[value.name] = value.data;
                    break;
            }
        }
        function formSubmit() {
            for(const [key, data] of Object.entries(formData)) {
                if(data.length == 0) {
                    validationErrors[key] = `${key} je povinné`;
                }
                else {
                    if(validationErrors[key].length > 0) {
                        validationErrors[key] = "";
                    }
                }
                console.log(`${key} - ${data}`);
            }
            if(isStreamerForm.value == true ) {
                console.log('Form submit - streamer');
            }
            else {
                console.log('Form submit - hrac');
            }
        }
        function changeForm(value) {
            if(value != isStreamerForm.value) {
                isStreamerForm.value = value;
            }
        }
        function addLink() {
            if(socialLinksData.value.length < 4) {
                socialLinksData.value.push({name: `socialLinkAdd-${Date.now()}`, value : ''});
            }
        }
        function removeLink(id) {
            socialLinksData.value.splice(id, 1);
        }
        function itemSelected(value) {
            if(value.type == 2) {
                playerData["fromStreamer"] = value.data;
            }
        }
        return {inputChanged, formData, streamerData, playerData, formSubmit, validationErrors, isStreamerForm, changeForm, addLink, socialLinksData, removeLink, itemSelected};
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
    .button-form {
        width: 100px;
        margin: 5px 0;
        background: none;
        outline:none;
        border: none;
        color: var(--main-green-dark);
        font-size: 1em;
        font-family: 'Rowdies', cursive;
        cursor: pointer;
        transform-origin: bottom center;
        opacity: 1;
        transition: 300ms;
    }
    .button-form:hover {
        transform: scale(1.2);
    }
    .button-form.light {
        color: var(--main-green-light) !important;
        opacity: 0.5;
    }
    .button-form.active {
        transform: scale(1.4);
        color: var(--main-green-dark) !important;
        opacity: 1;
    }
    .social {
        position: relative;
    }
    .social .remove {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
    }
    .remove button {
        width: auto;
        color: black;
        transform-origin: center center;
    }
</style>