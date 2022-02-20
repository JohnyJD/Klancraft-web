<template>
    <div id="support-us">
        <h2 class="main-header-h2">PODPOR NÁS A KÚP NÁM <span class="greenish">KÁVU</span></h2>
        <div style="position: relative; top: 1px;"><Splitter :flip="true" :colorFlip="true" :brightNone="true"/></div>
        <div class="support-wrapper">
            <div>
                <img src="@/assets/Buy_me_a_Coffee_Logo.png" alt="">
                <div class="button">
                    <Button buttonText="PODPORIŤ" :dark="true"/>
                </div>
            </div>
        </div>
        <div style="position: relative; top: -1px;"><Splitter :colorFlip="true"/></div>
    </div>
</template>

<script setup>
import Button from './Buttons/Button.vue'
import Splitter from './SectionSplitter.vue'
</script>

<style scoped>
    #support-us {
        margin: 200px auto;
    }
    .support-wrapper {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 100px 0;
        background: #518431;
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
</style>