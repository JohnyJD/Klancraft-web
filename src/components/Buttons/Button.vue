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
        background: var(--main-green-light);
        transition: transform 300ms;
    }
    .btn button {
        position: relative;
        width: 100%;
        padding: 15px 0px;
        background: transparent;
        text-align: center;
        font-family: var(--main-font-family);
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
        color: white !important;
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
        background: var(--main-green-dark);
        opacity: 0;
        transform: scaleX(0.3);
        transition: 300ms;
        z-index: 1;
    }
    .btn.dark button::before {
        background: var(--main-green-light);
    }
    .btn:hover button::before {
        transform: scaleX(1);
        opacity: 1;
    }
    .btn:hover {
        transform: scale(1.05);
    }

    
    .btn.dark button {
        background: var(--main-green-dark);
    }
</style>
