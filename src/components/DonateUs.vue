<template>
    <div id="support-us">
        <h2>PODPOR NÁS A KÚP NÁM <span class="greenish">KÁVU</span></h2>
        <div class="support-wrapper">
            <div>
                <img src="@/assets/Buy_me_a_Coffee_Logo.png" alt="">
                <div class="button">
                    <Button buttonText="PODPORIŤ" :dark="true"/>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import Button from './Buttons/Button.vue'
</script>

<style scoped>
    #support-us h2 {
        position: relative;
        width: 100%;
        font-size: 3.5em;
        text-align: center;
    }
    #support-us h2::before {
        position: absolute;
        content: "";
        bottom: -20px;
        left: 50%;
        width: 300px;
        height: 3px;
        background: #14461d;
        transform: translateX(-50%);
    }
    .support-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 100px 0;
        background: #518431;
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
</style>