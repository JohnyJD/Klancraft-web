<template>
    <div v-if='!isTextArea' class="input" :class="{error : error.length > 0}">
        <input type="text" @change="inputChanged" :placeholder="text" :value="value">
        <div v-if="error.length > 0"><p class="error">{{error}}</p></div>
    </div>
    <div v-else class="input">
        <textarea @change="inputChanged" :placeholder="text" :value="value" cols="30" rows="10"></textarea>
    </div>
</template>

<script>
export default {
    props: ['name', 'text', 'value', 'isTextArea', 'error', 'emitType'],
    emits: ['inputChanged'],
    setup(props, context) {
        function inputChanged(event) {
            /*console.log("Zmena : " + event.target.value);*/
            context.emit('inputChanged', {'name' : props.name, 'data': event.target.value, 'type': props.emitType});
        }
        return {inputChanged};
    },
}
</script>

<style scoped>
    .input {
        width: 100%;
    }
    .input input, .input textarea, .input input:placeholder-shown, .input textarea:placeholder-shown {
        width: 100%;
        background: #E1FED0;
        padding: 15px 20px;
        font-size: 1em;
        color: #517A32;
        font-family: 'Source Sans Pro', sans-serif;
        border: none;
        outline: none;
        box-sizing: border-box;
        transition: background 500ms;
    }
    .input input::placeholder, .input textarea::placeholder {
        font-size: 1em;
        color: #517A32;
        font-family: 'Source Sans Pro', sans-serif;
    }
    .input input:focus, .input textarea:focus, .input input:not(:placeholder-shown), .input textarea:not(:placeholder-shown) {
        background: #c4f7a6;
    }

    .input.error input , .input.error textarea{
        background: red !important;
    }
    p.error {
        color: red;
        margin: 0;
    }
    
</style>