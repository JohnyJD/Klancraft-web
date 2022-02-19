<template>
    <div id="streamers">
        <div>
           <Splitter :flip="true"/>
        </div>
        
        <div class="streamers-wrapper">
            <div class="streamers-flex">
                <div><h2>VSTÚP DO KOMUNITY KDE ZDIEĽAME SVOJE <span class="greenish">ZÁŽITKY</span> SO STREAMERMI</h2></div>
                <stream-slider />
                <div class="join">
                    <div><h2>PRIDAJ SA DO <span class="greenish">KOMUNITY</span></h2></div>
                    <div class="button"><Button buttonText="IDEM DO TOHO"/></div>
                </div>
            </div>
        </div>
        <div style="position: relative; top: -1px;">
            <Splitter/>
        </div>
        
    </div>
    
</template>

<script setup>
import Splitter from './SectionSplitter.vue'
import StreamSlider from './StreamersSlider/Slider.vue'
import Button from './Buttons/Button.vue'
</script>

<style scoped>
    #streamers {
        width: 100%;
        height: auto;
    }
    .streamers-wrapper {
        position: relative;
        background: #14461D;
        z-index: 3;
        background-image: url('@/assets/twitch-background.png');
        background-position: center;
        background-size: 60%;
        background-repeat: no-repeat;
        padding: 100px 0;
    }
    .streamers-wrapper * {
        margin: 0;
    }
    .streamers-flex {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .streamers-flex h2 {
        color: white;
        font-size: 2.5em;
        width: 80%;
        margin: auto;
    }
    .streamers-flex > div {
        width: 100%;
    }
    .streamers-overview {
        height: 200px;
        width: 80%;
        margin: 100px 0 ;
    }

    .join {
        margin-top: 100px;
        display: flex;
        justify-content: center;
    }
    .join > div:first-child {
        width: 60%;
    }
    .join > .button {
        width: 25%;
    }
</style>