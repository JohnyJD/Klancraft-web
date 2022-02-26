<template>
    <div>
        <button class="button-form light" :class="{active : isStreamerForm}" @click="changeForm(true)">STREAMER</button>
        <button class="button-form light" :class="{active : !isStreamerForm}" @click="changeForm(false)">HRÁČ</button>
    </div>
    <form class="form" @submit.prevent="onSubmit">
        <div><Input name="name" text="KRSTNÉ MENO *" :value="formData['name']" @inputChanged="inputChanged" emitType="0" :error="v$.name.$errors.length > 0 ? v$.name.$errors[0].$message : ''"/></div> 
        <div><Input name="email" text="EMAIL *" :value="formData['email']" @inputChanged="inputChanged" emitType="0" :error="v$.email.$errors.length > 0 ? v$.email.$errors[0].$message : ''" /></div> 
        <div><Input name="nick_minecraft" text="NICK MINECRAFT *" :value="formData['nick_minecraft']" @inputChanged="inputChanged" emitType="0" :error="v$.nick_minecraft.$errors.length > 0 ? v$.nick_minecraft.$errors[0].$message : ''" /></div> 
        <div><Input name="nick_discord" text="NICK DISCORD *" :value="formData['nick_discord']" @inputChanged="inputChanged" emitType="0" :error="v$.nick_discord.$errors.length > 0 ? v$.nick_discord.$errors[0].$message : ''" /></div> 
        <div class="form full-width" v-if="isStreamerForm">
            <div><Input nick_discord="twitchLink" text="LINK NA TWITCH *" :value="streamerData['twitchLink']" @inputChanged="inputChanged" emitType="1" :error="v2$.twitchLink.$errors.length > 0 ? v2$.twitchLink.$errors[0].$message : ''" /></div> 
            <div><Input name="socialLink" text="LINK NA SOCIALNÚ SIEŤ *" :value="streamerData['socialLink']" @inputChanged="inputChanged" emitType="1" :error="v2$.socialLink.$errors.length > 0 ? v2$.socialLink.$errors[0].$message : ''" /></div> 
            <div class="full-width social" v-for="(field, id) in socialLinksData" :key="id">
                <Input :name="field.name" text="LINK NA SOCIALNÚ SIEŤ *" :value="field.value" @inputChanged="inputChanged" emitType="1" error="" />
                <div class="remove"><div class="button-form" @click="removeLink(id)">X</div></div>
            </div> 
            <div class="full-width" v-if="socialLinksData.length < 4"><div class="button-form" @click="addLink">Pridať link</div></div>
            <div class="full-width"><Input name="aboutStream" text="OPÍŠ NÁM TVOJ STREAM *" :value="streamerData['aboutStream']" :isTextArea="true" emitType="1" @inputChanged="inputChanged" :error="v2$.aboutStream.$errors.length > 0 ? v2$.aboutStream.$errors[0].$message : ''" /></div>
            <div class="full-width"><Input name="goals" text="AKÝ JE TVOJ CIEĽ V STREAMOVANÍ ? *" :value="streamerData['goals']" :isTextArea="true" emitType="1" @inputChanged="inputChanged" :error="v2$.goals.$errors.length > 0 ? v2$.goals.$errors[0].$message : ''" /></div>
            <div class="full-width"><Input name="whyMe" text="PREČO SA CHCEŠ K NÁM PRIDAŤ ? *" :value="streamerData['whyMe']" :isTextArea="true" emitType="1" @inputChanged="inputChanged" :error="v2$.whyMe.$errors.length > 0 ? v2$.whyMe.$errors[0].$message : ''" /></div>
        </div>
        <div class="form full-width" v-else>
            <div class="full-width">
                <Select :items="['Idepatooo', 'Annie', 'Kodo', 'Rider TDI']" :value="playerData['fromStreamer']" :error="v3$.fromStreamer.$errors.length > 0 ? v3$.fromStreamer.$errors[0].$message : ''" emitType="2" @itemSelected="itemSelected"/>
            </div>
            <div class="full-width"><Input name="aboutMe" text="POVEDZ NÁM NIEČO O SEBE *" :value="playerData['aboutMe']" :isTextArea="true" emitType="2" @inputChanged="inputChanged" :error="v3$.aboutMe.$errors.length > 0 ? v3$.aboutMe.$errors[0].$message : ''" /></div>
        </div> 
        <div class="button full-width"><Button :buttonText="isSending"/></div>
    </form>
</template>

<script>
import Input from './Input.vue'
import Select from './Select.vue'
import Button from '../Buttons/Button.vue'

import {reactive, ref} from 'vue'
import useVuelidate from '@vuelidate/core'
import {required, email, helpers} from '@vuelidate/validators'
import { load } from 'recaptcha-v3'

export default {
    components: {
        Input, Button, Select
    },
    setup() {
        var formData = reactive({'name' : '', 'email' : '', 'nick_minecraft' : '', 'nick_discord' : ''});
        var streamerData = reactive({'twitchLink' : '', 'socialLink' : '', 'aboutStream' : '', 'goals' : '', 'whyMe': ''});
        var playerData = reactive({'fromStreamer': '', 'aboutMe': ''});
        var socialLinksData = ref([]);
        var isStreamerForm = ref(false);
        const errorMessageRequired = ref("Toto pole je povinné");
        const errorMessageEmail = ref("Nesprávny formát emailu");
        const recaptcha = ref('');
        const isSending = ref(false);
        

        function inputChanged(value) {
            console.log('Emited new value : ' + value.name);
            switch (value.type) {
                case '0':
                    
                    formData[value.name] = value.data;
                    break;
                case '1':
                    
                    if(value.name.includes('socialLinkAdd')) {
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
        async function onSubmit() {
            isSending.value = true;
            const isFormCorrect = await this.v$.$validate()
            if(isStreamerForm.value == true ) {
                const isFormCorrect2 = await this.v2$.$validate()
                
                if(isFormCorrect && isFormCorrect2) {
                    const recaptcha = await load('6LfeK5UeAAAAAHkuYXQr5VHixyfjrf1tFaaH-r5c')
                    const token = await recaptcha.execute('submit')

                    console.log("Token : " + token) // Will also print the token
                    console.log('Form submit - streamer');

                }
                else {
                    
                    console.log('Form submit - streamer - INCORECT');
                }
                isSending.value = false;
            }
            else {
                const isFormCorrect3 = await this.v3$.$validate()
                if(isFormCorrect && isFormCorrect3) {
                    const recaptcha = await load('6LcMTZUeAAAAAJBFGe-SjJKe60EXrstNgb2xA8Wf')
                    const token = await recaptcha.execute('submit')

                    console.log("Token: " + token) // Will also print the token
                    console.log('Form submit - HRAC');
                }
                else {
                    console.log('Form submit - HRAC - INCORECT');
                }
                isSending.value = false;
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

        const rules = {
            name : {required : helpers.withMessage(errorMessageRequired, required)}, email : {required : helpers.withMessage(errorMessageRequired, required), email : helpers.withMessage(errorMessageEmail, email)}, nick_minecraft : {required : helpers.withMessage(errorMessageRequired, required)}, nick_discord : {required : helpers.withMessage(errorMessageRequired, required)}
        };
        const rules2 = {
            twitchLink : {required : helpers.withMessage(errorMessageRequired, required)}, socialLink : {required : helpers.withMessage(errorMessageRequired, required)}, aboutStream : {required: helpers.withMessage(errorMessageRequired, required)}, goals : {required: helpers.withMessage(errorMessageRequired, required)}, whyMe : {required: helpers.withMessage(errorMessageRequired, required)}
        };
        const rules3 = {
            fromStreamer : {required: helpers.withMessage(errorMessageRequired, required)}, aboutMe : {required: helpers.withMessage(errorMessageRequired, required)}
        };

        const v$ = useVuelidate(rules, formData)
        const v2$ = useVuelidate(rules2, streamerData)
        const v3$ = useVuelidate(rules3, playerData)

        return {inputChanged, formData, streamerData, playerData, onSubmit, isStreamerForm, changeForm, addLink, socialLinksData, removeLink, itemSelected, isSending, v$, v2$, v3$};
    },
    async mounted() {
        //this.recaptcha = await load('6LfeK5UeAAAAAHkuYXQr5VHixyfjrf1tFaaH-r5c')
    }

}
</script>

<style scoped>
    .form {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 15px;
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
        font-family: var(--main-font-header);
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
    .remove div {
        width: auto;
        color: black;
        transform-origin: center center;
    }
</style>