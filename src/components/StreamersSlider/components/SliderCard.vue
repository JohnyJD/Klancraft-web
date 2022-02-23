<template>
    <div class="slider-data">
        <div v-if="data" class="stream-card">
            <div class="top">
                <div class="streamer-logo">
                    <img :src="getImgPath(data.imgPath)" alt="">
                </div>
                <div class="streamer-name">
                    <div>
                        <p>{{data.desc}}</p>
                        <h3>{{data.nick}}</h3> 
                    </div> 
                </div>
            </div>
            <div class="info">
                <div><p>{{data.text}}</p></div>
            </div>
            <div class="links">
                <FacebookSvg/>
                <InstagramSvg/>
                <TikTokSvg/>
                <TwitchSvg/>
                <YoutubeSvg/>
            </div>
            
        </div>
    </div>
    
</template>

<script>
import FacebookSvg from '@/components/logos/FacebookSvg.vue'
import InstagramSvg from '@/components/logos/InstagramSvg.vue'
import TikTokSvg from '@/components/logos/TikTokSvg.vue'
import TwitchSvg from '@/components/logos/TwitchSvg.vue'
import YoutubeSvg from '@/components/logos/YoutubeSvg.vue'

import getImgPath from '@/imgPath'

export default {
    props: ['data'],
    components: {
        FacebookSvg, InstagramSvg, TikTokSvg, TwitchSvg, YoutubeSvg
    },
    setup() {
        return {getImgPath}
    },
}
</script>

<style scoped>
    .slider-data {
        position: relative;
    }
    .slider-data::after, .slider-data::before {
        position: absolute;
        content: "";
        width: 100px;
        height: 200px;
        top: 50%;
        transform: translateY(-50%);
        background: var(--main-green-light);
        z-index: 1;
    }
    .slider-data::after {
        clip-path: polygon(0 0, 0% 100%, 100% 50%);
        left: 0;
    }
    .slider-data::before {
        clip-path: polygon(100% 0, 0 50%, 100% 100%);
        right: 0;
    }
    .stream-card {
        position: relative;
        width: 80%;
        min-height: 450px;
        max-width: 1000px;
        display: grid;
        grid-template-rows: 30% auto 20%;
        background: #5C9239;
        background-image: url('@/assets/twitch-dark.svg');
        background-position: 20% center;
        background-repeat: no-repeat;
        background-size: auto 80%;
        margin: auto;
        padding: 50px 20px;
        box-sizing: border-box;
        border-left: 30px solid #1E5121;
        border-right: 30px solid #1E5121;
        z-index: 2;
    }
    .stream-card > div {
        justify-self: stretch;
        align-self: stretch;
    }
    .top {
        display: flex;
        grid-row-start: 1;
        grid-row-end: 1;
    }
    .stream-card p, .top h3 {
        margin: 0;
        color: white;
    }
    .top h3 {
        font-size: 3em;
    }
    .top p {
        font-size: 1.3em;
    }
    .top > .streamer-logo {
        width: 120px;
        padding-right: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .top > .streamer-name {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .streamer-name > div {
        width: 100%;
    }
    .streamer-logo img {
        width: 100%;
        height: auto;
    }

    .info {
        padding: 50px;
        grid-row-start: 2;
        grid-row-end: 2;
    }
    .info > div {
        position: relative;
        font-size: 1.3em;
    }
    .info > div::after, .info > div::before {
        position: absolute;
        font-size: 4em;
        color: white;
        font-family: 'Rowdies', cursive;
    }
    .info > div::after {
        content: '”';
        top: -40px;
        left: -40px;
    }
    .info > div::before {
        content: '„';
        right: -40px;
        bottom: -40px;
    }
    .links {
        display: flex;
        grid-row-start: 3;
        grid-row-end: 3;
    }
    .links > div {
        padding: 0 10px;
    }
</style>