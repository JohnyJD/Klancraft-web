<template>
    <div id="joinus">
        <div class="join-wrapper">
            <h2>CHCEŠ SA K NÁM <span class="greenish">PRIDAŤ</span> ?</h2>
            <div class="join-list">
                <div class="join-item">
                    <h3>STREAMER</h3>
                    <NumberItem tag="01" text="Vyplň a pošli kontaktný formulár"/>
                    <NumberItem tag="02" text="Dohodneme si pohovor"/>
                    <NumberItem tag="03" text="Následne sa s tebou spojíme a dohodneme spoluprácu"/>
                    <div class="button">
                        <Button buttonText="HRAŤ AKO STREAMER"/>
                    </div>
                </div>
                <div class="join-item">
                    <h3>HRÁČ</h3>
                    <NumberItem tag="01" text="Vyplň a pošli kontaktný formulár"/>
                    <NumberItem tag="02" text="Dohodneme si pohovor"/>
                    <NumberItem tag="03" text="Následne sa s tebou spojíme a dohodneme spoluprácu"/>
                    <div class="button">
                        <Button buttonText="HRAŤ AKO HRÁČ"/>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="background">
            <img src="@/assets/grassBlock.png" alt="">
        </div>
    </div>
</template>

<script>
import Button from "./Buttons/Button.vue"
import NumberItem from "./ListItems/NumberItem.vue"
export default {
    components: {
        Button, NumberItem
    }
}
</script>

<style scoped>
    #joinus {
        margin: 200px 0;
        position: relative;
        display: flex;
        justify-content: end;
        flex-wrap: wrap;
    }
    #joinus h2 {
        position: relative;
        width: 100%;
        font-size: 3.5em;
        text-align: center;
    }
    #joinus h2::before {
        position: absolute;
        content: "";
        bottom: -20px;
        left: 50%;
        width: 300px;
        height: 3px;
        background: #14461d;
        transform: translateX(-50%);
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
        font-size: 3em;
    }

    .background {
        position: absolute;
        display: flex;
        justify-content: end;
        align-items: center;
        top: 0;
        left: 0;
        width: 15%;
        height: 100%;
        background: #14461d;
    }
    .background img {
        position: relative;
        width: 300px;
        left: 100px;
    }
    .button {
        width: 100%;
        margin: 25px 0;
    }

</style>