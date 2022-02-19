<template>
    <div class="btn" :class="{dark : dark}">
        <button @click="onClick"><p>{{buttonText}}</p></button>
    </div>    
</template>

<script>
export default {
    props: ['buttonText', 'dark'],
    emits: ['buttonClick'],
    setup(_, context) {
        function onClick(event) {
            context.emit('buttonClick');
        }
        return {onClick}
    }
}
</script>

<style scoped>
    .btn {
        width: auto;
        overflow: hidden;
        background: #598F37;
        transition: transform 300ms;
    }
    .btn button {
        position: relative;
        width: 100%;
        padding: 15px 0px;
        background: transparent;
        text-align: center;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 500;
        font-size: 1.2em;
        color: white;
        border: none;
        cursor: pointer;
    }
    /*.btn button::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #14461D;
        transform: translateX(100%);
        transition: transform 500ms;
        z-index: 1;
    }
    .btn button::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        bottom: 0;
        left: 0;
        background: #14461D;
        transform: translateX(-100%);
        transition: transform 500ms;
        z-index: 1;
    }*/
    .btn button p {
        position: relative;
        z-index: 2;
        margin: 0 !important;
    }

    /*.btn:hover button::before {
        transform: translateX(0);
    }
    .btn:hover button::after {
        transform: translateX(0);
    }*/

    .btn button::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #14461D;
        opacity: 0;
        transform: scaleX(0.3);
        transition: 300ms;
        z-index: 1;
    }
    .btn:hover button::before {
        transform: scaleX(1);
        opacity: 1;
    }
    .btn:hover {
        transform: scale(1.05);
    }

    
    .btn.dark button {
        background: #14461D;
    }
</style>
