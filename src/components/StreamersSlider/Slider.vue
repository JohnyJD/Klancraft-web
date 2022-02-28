<template>
    <div id="slider">
        <slider-controller :data=controllerData @idChanged='idChanged'/>
        <slider-card :data="streamerData"/>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import SliderController from './components/SliderController.vue'
import SliderCard from './components/SliderCard.vue'
import streamersData from '@/streamersData.json'

import getImgPath from '@/imgPath.js'

export default {
    components: {
        SliderController, SliderCard
    },
    setup() {
        const controllerData = reactive([]);
        const streamers = reactive([])
        var streamerData = reactive({});
        async function idChanged(Id) {
            console.log(streamers);
            const dat = streamers.filter((item) => {
                return item.id === Id;
            });
            Object.assign(streamerData, dat[0]);
        }
        return {controllerData, idChanged, streamers, streamerData, getImgPath}
    },
    async mounted() {
        let imgs = {}
        for(const el of streamersData) {
            const img = await this.getImgPath(el.imgPath, 'streamers')
            imgs[el.id] = img
        }
        const controler = streamersData.map((value) => {
            return {
                id : value.id,
                imgPath : imgs[value.id]
            }
        })
        Object.assign(this.controllerData, controler)
        Object.assign(this.streamers, streamersData)
        for(const el of this.streamers) {
            el.imgPath = imgs[el.id]
        }
        Object.assign(this.streamerData, this.streamers[0])        
    }
}
</script>

<style scoped>
    #slider {
        margin: 100px 0;
    }
</style>