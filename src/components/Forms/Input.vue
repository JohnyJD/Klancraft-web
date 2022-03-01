<template>
    <div v-if='!isTextArea' class="input" :class="{error : error.length > 0}">
        <label class="input-label" :class="{focus : focus}" :for="name">{{text}}</label>
        <input :id="name" type="text" @change="inputChanged" :value="value" @focus="focusing(true)" @blur="focusing(false)">
        <div v-if="error && error.length > 0" class="error-msg"><p>{{error}}</p></div>
    </div>
    <div v-else class="input" :class="{error : error.length > 0}">
        <label class="textarea-label" :class="{focus : focus}" :for="name">{{text}}</label>
        <textarea @change="inputChanged" :value="value" cols="30" rows="10" @focus="focusing(true)" @blur="focusing(false)"></textarea>
        <div v-if="error && error.length > 0" class="error-msg"><p>{{error}}</p></div>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    props: ['name', 'text', 'value', 'isTextArea', 'error', 'emitType'],
    emits: ['inputChanged'],
    setup(props, context) {
        const focus = ref(false);
        const data = ref('');
        function inputChanged(event) {
            /*console.log("Zmena : " + event.target.value);*/
            data.value = event.target.value;
            context.emit('inputChanged', {'name' : props.name, 'data': event.target.value, 'type': props.emitType});
        }
        function focusing(value) {
            console.log("focus" + data.value.length + "   " + value);
            if(data.value.length == 0) {
                focus.value = value;
            }
        }
        return {inputChanged, focus, focusing, data};
    },
    mounted() {
        this.data = this.value;
        if(this.data.length > 0) {
            this.focus = true;
        }
    }
}
</script>

<style scoped>
    .input {
        position: relative;
        width: 100%;
        margin: 15px 0;
    }
    .input input, .input textarea, .input input:placeholder-shown, .input textarea:placeholder-shown {
        width: 100%;
        background: #E1FED0;
        padding: 15px 20px;
        font-size: 1em;
        color: var(--main-green-dark);
        font-family: var(--main-font-text);
        border: none;
        outline: none;
        box-sizing: border-box;
        transition: background 500ms;
        border: 1px solid #a1db7c;
    }
    .input-label, .textarea-label {
        position: absolute;
        font-size: 1em;
        color: var(--main-green-light);
        font-family: var(--main-font-text);
        left: 20px;
        transform: translateY(-50%);
        transition:  300ms;
        cursor: inherit;
        pointer-events:none;
    }
    .input-label {
        top: 50%;
        transform: translateY(-50%);
    }
    .textarea-label {
        top: 25px;
    }
    .input-label.focus, .textarea-label.focus {
        top: -10px;
        left: 0;
        font-size: 0.8em;
    }
    /*.input input::placeholder, .input textarea::placeholder {
        font-size: 1em;
        color: #517A32;
        font-family: 'Source Sans Pro', sans-serif;
    }
    .input input:focus, .input textarea:focus, .input input:not(:placeholder-shown), .input textarea:not(:placeholder-shown) {
        background: #c4f7a6;
    }*/

    .input.error input , .input.error textarea {
        background: rgb(255, 203, 203) !important;
        border: 1px solid red;
        color: red;
    }
    .input.error .input-label, .input.error .textarea-label {
        color: red;
    }
    .error-msg {
        position: absolute;
        height: 20px;
        bottom: -20px;
        left: 0;
    }
    .error-msg p {
        color: red;
        font-size: 0.9em;
        margin: 0;  
    }
    

    @media only screen and (max-width: 768px) {
        .input-label, .textarea-label, .input input, .input textarea, .input input:placeholder-shown, .input textarea:placeholder-shown {
            font-size: 0.8em;
        }
    }
</style>