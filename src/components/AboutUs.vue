<template>
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


<style scoped>
    #about {
        position: relative;
        margin: var(--main-margin-size);
    }
    .about-wrapper {
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .about-wrapper > div {
        width: 40%;
        position: relative;
    }
    .left h2 {
        font-size: 3.5em;
        margin-bottom: 50px;
    }
    .left p {
        font-size: 1.4em;
    }
    .left::before, .left::after {
        position: absolute;
        content: "";
        width: 40%;
        height: 3px;
        background: #14461d;
    }
    .left::before {
        top: -10px;
        left: -30px;
    }
    .left::after {
        bottom: -10px;
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
        filter: drop-shadow(0px 0px 10px rgba(13, 44, 0, 0.55));
    }
</style>
