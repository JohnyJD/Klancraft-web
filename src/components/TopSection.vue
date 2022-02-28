<template>
    <div id="top">
        <div class="left">
            <div><h1>STAŇ SA AJ TY<br><span class="greenish">KLANCRAFTIANOM</span></h1></div>
            <div><p>Vstúp do skvelej komunity plnej skvelých ľudí<br>Zahraj si po boku stremerov</p></div>
            <div class="button">
                <ButtonVue buttonText="VSTÚPIŤ" @buttonClick="animateTo"/>
            </div>
        </div>
        <div class="right">
            <video src="@/assets/KC_logo_animated.mp4" autoplay controls></video>
        </div>
    </div>
    <div style="position: relative;"><Splitter/></div>
</template>

<script>
import ButtonVue from "./Buttons/Button.vue"
import Splitter from "./SectionSplitter.vue"
import animateToOffset from '@/navigation.js'
export default {
    components: {ButtonVue, Splitter},
    setup() {
        function animateTo(val) {
            let offset = document.getElementById('about').offsetTop;
            animateToOffset(offset);
        }
        return {animateTo}
    }
}
</script>

<style scoped>
    #top {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        background: url('@/assets/TopSectionImage.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 3;
    }
    #top:before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 100%;
        background: rgba(20, 70, 29, 0.75);
    }
    #top > div {
        position: relative;
    }
    .left {
        width: 55%;
    }
    .right {
        width: 35%;
    }
    #top h1 {
        font-size: 5em;
        color: white;
    }
    #top p {
        color: white;
        font-size: 1.5em;
        margin: 50px 0;
    }
    .button {
        width: 300px;
    }
</style>