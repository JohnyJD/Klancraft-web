<template>
    <div id="joinus">
        <div class="join-wrapper">
            <h2 class="main-header-h2">CHCEŠ SA K NÁM <span class="greenish">PRIDAŤ</span> ?</h2>
            <div class="join-list">
                <div class="join-item">
                    <h3>STREAMER</h3>
                    <NumberItem tag="01" text="Stotožniť sa s pravidlami serveru"/>
                    <NumberItem tag="02" text="Vyplniť formulár"/>
                    <NumberItem tag="03" text="Prejsť osobným pohovorom"/>
                    <div class="button">
                        <Button buttonText="HRAŤ AKO STREAMER" @buttonClick="animateTo(true)"/>
                    </div>
                </div>
                <div class="join-item">
                    <h3>HRÁČ</h3>
                    <NumberItem tag="01" text="Patriť do komunity jedného zo streamerov"/>
                    <NumberItem tag="02" text="Vybav si u neho vstupenku"/>
                    <NumberItem tag="03" text="Vypísať formulár"/>
                    <div class="button">
                        <Button buttonText="HRAŤ AKO HRÁČ" @buttonClick="animateTo(false)"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="background left">
            <img src="@/assets/grassBlock.png" alt="">
        </div>
        <div class="background right">
            <img src="@/assets/grassBlock.png" alt="">
        </div>

    </div>
</template>

<script>
import Button from "./Buttons/Button.vue"
import NumberItem from "./ListItems/NumberItem.vue"
import animateToOffset from '@/navigation.js'

export default {
    components: {
        Button, NumberItem
    },
    emits: ['changeForm'],
    setup(_, context) {
        function animateTo(isStreamer) {
            let offset = document.getElementById('contactus').offsetTop;
            context.emit('changeForm', isStreamer);
            animateToOffset(offset);
        }
        return {animateTo}
    }
}
</script>

<style scoped>
    #joinus {
        margin: var(--main-margin-size);
        position: relative;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        overflow: hidden;
    }
    
    .join-wrapper {
        width: 80%;
    }
    .join-list {
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .join-item {
        width: 40%;
    }
    .join-item h3 {
        color: var(--main-green-light);
    }

    .background {
        position: absolute;
        display: flex;
        justify-content: end;
        align-items: center;
        width: 400px;
        top: 50%;
        transform: translateY(-50%);
    }
    .background.left {
        left: -250px;
    }
    .background.right {
        right: -250px;
        transform: translateY(-50%);
    }
    .background img {
        position: relative;
        width: 100%;
    }
    .button {
        width: 100%;
        margin: 25px 0;
    }

    @media screen and (max-width: 1024px) {
        .join-item h3 {
            font-size: 2em;
        }

    }
    @media screen and (max-width: 768px) {
        .join-list {
            flex-direction: column;
        }
        .join-item {
            width: 80%;
        }
        .background {
            opacity: 0.2;
        }
    }

</style>