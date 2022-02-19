<template>
    <Splitter/>
    <div id="about">
        <div class="about-wrapper">
            <div class="left">
                <h2>UZRI SVETLO<br><span class="greenish">KLANCRAFTU</span></h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas dolore amet laborum voluptatum tempore repellat obcaecati velit provident accusantium laudantium officia vitae ipsa aliquid magnam consectetur, tenetur numquam saepe asperiores.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas dolore amet laborum voluptatum tempore repellat obcaecati velit provident accusantium laudantium officia vitae ipsa aliquid magnam consectetur, tenetur numquam saepe asperiores.</p>
            </div>
            <div class="right">
                <img src="@/assets/aboutUsImage.png" alt="">
            </div>
        </div>
            
    </div>    
</template>

<script setup>
import Splitter from "./SectionSplitter.vue"
</script>

<style scoped>
    #about {
        position: relative;
        margin: 200px 0;
    }
    .about-wrapper {
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .about-wrapper > div {
        width: 45%;
        position: relative;
    }
    .left h2 {
        font-size: 3.5em;
        margin-bottom: 50px;
    }
    .left p {
        font-size: 1.4em;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 100;
    }
    .left::before, .left::after {
        position: absolute;
        content: "";
        width: 40%;
        height: 3px;
        background: #14461d;
    }
    .left::before {
        top: -20px;
        left: -30px;
    }
    .left::after {
        bottom: -20px;
        right: -30px;
    }
    .right img {
        width: 90%;
    }
    #about::before {
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        width: 20%;
        height: 100%;
        background: #14461d;

    }
</style>
