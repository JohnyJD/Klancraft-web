<template>
    <div class="custom-select" tabindex="0">
        <div class="selected" :class="{open : open}" @click="open = !open">{{selected}}</div>
        <div class="items" :class="{selectHide : !open}">
            <div class="item" v-for="(item, id) in items" :key="id" @click="itemSelected(item)">
                {{item}}
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    props: ['items', 'value', 'emitType'],
    emits: ['itemSelected'],
    setup(props, context) {
        const selected = ref('');
        const open = ref(false);
        function itemSelected(value) {
            selected.value = value;
            open.value = false;
            context.emit('itemSelected', {'data': value, 'type': props.emitType});
        }
        return {selected, itemSelected, open};
    },
    mounted() {
        if(this.value && this.value != "") {
            this.selected = this.value;
        }
        else {
            this.selected = "VYBER SI STREAMERA";
        }
        
    }
}
</script>

<style scoped>
    .custom-select {
        position: relative;
        width: 100%;
        text-align: left;
        outline: none;
        height: 47px;
        line-height: 47px;
        font-family: 'Source Sans Pro', sans-serif;
    }

    .custom-select .selected {
        background-color: #E1FED0;
        color: #517A32;
        padding-left: 1em;
        cursor: pointer;
        user-select: none;
    }
    .custom-select .selected.open {
        background-color: #517A32;
        color: #E1FED0;
        border-bottom: 1px solid #E1FED0;
    }
    .custom-select .selected:after {
        position: absolute;
        content: "";
        top: 22px;
        right: 1em;
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-color: #fff transparent transparent transparent;
    }

    .custom-select .items {
        color: #E1FED0;
        overflow: hidden;
        position: absolute;
        background-color: #517A32;;
        left: 0;
        right: 0;
        z-index: 1;
    }

    .custom-select .items div {
        color: #fff;
        padding-left: 1em;
        cursor: pointer;
        user-select: none;
    }

    .custom-select .items div:hover {
        background-color: #669b3d;
    }

    .selectHide {
        display: none;
    }
</style>