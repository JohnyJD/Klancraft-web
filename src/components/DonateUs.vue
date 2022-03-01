<template>
    <div id="supportus">
        <h2 class="main-header-h2">PODPOR NÁS A KÚP NÁM <span class="greenish">KÁVU</span></h2>
        <!--<div style="position: relative; top: 1px;"><Splitter :flip="true" :colorFlip="true" :brightNone="true"/></div>-->
        <div class="support-wrapper">
            <div>
                <img src="@/assets/Buy_me_a_Coffee_Logo.png" alt="">
                <div class="button">
                    <a href="https://www.buymeacoffee.com/klancraft" target="blank">
                        <Button buttonText="PODPORIŤ" :dark="true"/>
                    </a>
                </div>
            </div>
        </div>
        <!--<div style="position: relative; top: 0px;"><Splitter :colorFlip="true"/></div>-->
    </div>
</template>

<script setup>
import Button from './Buttons/Button.vue'
import Splitter from './SectionSplitter.vue'
</script>

<style scoped>
    #supportus {
        position: relative;
        margin: var(--main-margin-size);
        padding: 100px 0;
        background: #518431;
        /*clip-path: polygon(0 0, 100% 5%, 100% 100%, 0% 95%);*/
        overflow: hidden;
    }
    #supportus h2 {
        color: white !important;
    }
    .greenish {
        color: var(--main-green-dark);
    }
    #supportus::before, #supportus::after {
        position: absolute;
        content: "";
        width: 15%;
        max-width: 300px;
        height: 300px;
        top: 50%;
        transform-origin: center center;
        background: var(--main-green-dark);
        opacity: 0.1;
        
    }
    #supportus::before {
        left: -150px;
        transform: translateY(-50%) rotate(45deg);
    }
    #supportus::after {
        right: -150px;
        transform: translateY(-50%) rotate(-45deg);
    }
    .support-wrapper {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 100px 0;
        /*background: #518431;*/
        z-index: 3;
    }
    .support-wrapper img {
        width: 100%;
        max-width: 710px;
        height: auto;
    }
    .support-wrapper .button {
        width: 50%;
        max-width: 500px;
        margin: 50px auto 0 auto;
    } 
    .support-wrapper > div {
        width: 80%;
        text-align: center;
    }

    @media screen and (max-width: 1024px) {
        .support-wrapper img {
            width: 60%;
        }
    }

    @media screen and (max-width: 768px) {
        
    }
</style>