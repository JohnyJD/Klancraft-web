<template>
    <div id="streamers">
        <div>
           <Splitter :flip="true"/>
        </div>
        
        <div class="streamers-wrapper">
            <div class="streamers-flex">
                <div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="176.617" height="184.495" viewBox="0 0 176.617 184.495"><path d="M196.547,7331.249h18.591v-46.121H196.547Zm-46.478,0h18.591v-46.121H150.069Zm92.956,12.057v-85.854H112.887v110.7h37.182v27.239l23.8-27.239H218.3Zm-28.751,52.514H177.891L153.667,7423.5H131.478v-27.678H85V7271.1L97.084,7239H261.617v112.289Z" transform="translate(-85 -7239.002)" fill="#5c9239" fill-rule="evenodd"/></svg></div>
                    <div><h2>VSTÚP DO KOMUNITY KDE ZDIEĽAME SVOJE <span class="greenish">ZÁŽITKY</span> SO STREAMERMI</h2></div>
                </div>
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
        margin: var(--main-margin-size);
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
        width: 90%;
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
    .streamers-flex > div:first-child {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .streamers-flex svg {
        width: 100%;
        height: 100%;
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