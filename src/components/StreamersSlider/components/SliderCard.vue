<template>
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
            <p>{{data.text}}</p>
        </div>
        <div class="links">
            <FacebookSvg/>
            <InstagramSvg/>
            <TikTokSvg/>
            <TwitchSvg/>
        </div>
        
    </div>
    
</template>

<script>
import FacebookSvg from '@/components/logos/FacebookSvg.vue'
import InstagramSvg from '@/components/logos/InstagramSvg.vue'
import TikTokSvg from '@/components/logos/TikTokSvg.vue'
import TwitchSvg from '@/components/logos/TwitchSvg.vue'

import getImgPath from '@/imgPath'

export default {
    props: ['data'],
    components: {
        FacebookSvg, InstagramSvg, TikTokSvg, TwitchSvg
    },
    setup() {
        return {getImgPath}
    },
}
</script>

<style scoped>
    .stream-card {
        width: 80%;
        min-height: 400px;
        display: grid;
        grid-template-rows: 30% auto 20%;
        background: #5C9239;
        margin: auto;
        padding: 20px;
        box-sizing: border-box;
        border-left: 30px solid #1E5121;
        border-right: 30px solid #1E5121;
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
    .top > .streamer-logo {
        width: 100px;
        padding-right: 30px;
    }
    .top > .streamer-name {
        flex:n1;
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
        padding: 20px 0;
        grid-row-start: 2;
        grid-row-end: 2;
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