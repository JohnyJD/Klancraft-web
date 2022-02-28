<template>
    <div v-if="type === 'twitch'">
        <a :href="link" target="blank"><twitch-svg/></a>
    </div>
    <div v-if="type === 'facebook'">
        <a :href="link" target="blank"><facebook-svg/></a>
    </div>
    <div v-if="type === 'instagram'">
        <a :href="link" target="blank"><instagram-svg/></a>
    </div>
    <div v-if="type === 'tiktok'">
        <a :href="link" target="blank"><tik-tok-svg/></a>
    </div>
    <div v-if="type === 'youtube'">
        <a :href="link" target="blank"><youtube-svg/></a>
    </div>
</template>

<script>
import FacebookSvg from './FacebookSvg.vue'
import InstagramSvg from './InstagramSvg.vue'
import TwitchSvg from './TwitchSvg.vue'
import YoutubeSvg from './YoutubeSvg.vue'
import TikTokSvg from './TikTokSvg.vue'

export default {
  components: { TikTokSvg, FacebookSvg, InstagramSvg, TwitchSvg, YoutubeSvg },
    props: ['type', 'link']
}
</script>

<style scoped>
    div {
        transition: transform 300ms;
    }
    div:hover {
        transform: scale(1.1);
    }
</style>