<template>
    <div id="nav-mobile">
        <div class="nav-logo" @click="animateTo('top')"><img src="@/assets/KC_logo.png" alt=""></div>
        <div class="nav-menu" :class="{opened : opened}" @click="opened = !opened">
            <div class="top"></div>
            <div class="center"></div>
            <div class="bottom"></div>
        </div>
    </div>

    <nav id="nav-content" :class="{opened : opened}">
        <div class="content">
            <div class="nav-item" @click="animateTo('about')"><h3>O NÁS</h3></div>
            <div class="nav-item" @click="animateTo('joinus')"><h3>AKO SA PRIDAŤ</h3></div>
            <div class="nav-item" @click="animateTo('streamers')"><h3>STREAMERI</h3></div>
            <div class="nav-item" @click="animateTo('ourteam')"><h3>NÁŠ TÍM</h3></div>
            <div class="nav-item" @click="animateTo('supportus')"><h3>PODPOR NÁS</h3></div>
            <div class="nav-item" @click="animateTo('contactus')"><h3>FORMULÁR</h3></div>
        </div>
    </nav>
</template>

<script>
import {ref} from 'vue'
import animateToOffset from '@/navigation.js'

export default {
    setup() {
        const opened = ref(false)
        function animateTo(sectionId) {
            let offset = document.getElementById(sectionId).offsetTop;
            animateToOffset(offset);
            opened.value = false;
        }
        return {opened, animateTo}
    }
}
</script>

<style scoped>
    #nav-mobile {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
        transition: 300ms;
         z-index: 101;
    }   
    #nav-mobile > div {
        margin: 0 10px;
    }
    .nav-logo {
        width: 50px;
        cursor: pointer;
    }
    .nav-logo img {
        width: 100%;
        height: auto;
    }

    .nav-menu {
        position: relative;
        width: 50px;
        height: 30px;
        cursor: pointer;
    }
    .nav-menu > div {
        position: absolute;
        left: 0;
        width: 100%;
        height: 5px;
        background: #77c13e;
        transition: 300ms;
    }
    .nav-menu > .top {
        top: 0;
    }
    .nav-menu > .center {
        top: 50%;
        transform: translateY(-50%);
    }
    .nav-menu > .bottom {
        bottom: 0;
    }
    .nav-menu.opened > .top {
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
    }
    .nav-menu.opened > .center {
        opacity: 0;
    }
    .nav-menu.opened > .bottom {
        bottom: 50%;
        transform: translateY(50%) rotate(-45deg);
    }
    

    #nav-content {
        position: fixed;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--main-green-dark);
        transform: scale(0);
        opacity: 0;
        transition: transform 500ms, opacity 250ms;
        z-index: 100;
    }
    #nav-content.opened {
        opacity: 1;
        transform: scale(1);
    }
    .nav-item h3 {
        font-size: 2em;
        color: white;
        text-align: center;
        cursor: pointer;
        transition: inherit;
    }
    .nav-item {
        margin: 20px 0;
        transition: 300ms;
    }
    .nav-item:hover {
        transform: scale(1.1);
    }
    .nav-item:hover h3 {
        color: var(--main-green-light);
    }

    @media screen and (max-width: 600px) {
        .nav-menu {
            position: relative;
            width: 30px;
            height: 20px;
            cursor: pointer;
        }
        .nav-menu > div {
            height: 4px;
        }
        .nav-item h3 {
            font-size: 7vw;
        }
    }
</style>