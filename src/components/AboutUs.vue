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
        font-size: 3em;
        margin-bottom: 50px;
    }
    .left h2 span {
        font-size: 1.5em;
    }
    .left p {
        font-size: 1.2em;
    }
    .left::before, .left::after {
        position: absolute;
        content: "";
        width: 40%;
        height: 3px;
        background: var(--main-green-dark);
    }
    .left::before {
        top: -50px;
        left: -30px;
    }
    .left::after {
        bottom: -50px;
        right: -30px;
    }
    .right img {
        width: 90%;
    }
    #about::before {
        position: absolute;
        content: "";
        top: 50%;
        right: 0;
        width: 20%;
        height: 130%;
        background: var(--main-green-dark);
        transform: translateY(-50%);
        filter: drop-shadow(0px 0px 10px rgba(13, 44, 0, 0.55));
    }

    @media screen and (max-width: 1024px) {
        .left h2 {
            font-size: 2.5em;
        }
        .left p {
            font-size: 1em;
        }
    }
    @media screen and (max-width: 768px) {
        .left h2 {
            font-size: 2em;
        }
        .about-wrapper {
            flex-direction: column;
            text-align: justify;
        }
        .about-wrapper > div {
            width: 80%;
        }
        .right img {
            width: 60%;
        }
        .right {
            display: flex;
            justify-content: center;
            margin-top: 60px;
        }
        #about::before {
            display: none;
        }
        .left::before {
            top: -20px;
        }
        .left::after {
            bottom: -20px;
        }
    }
</style>
