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
import StreamersData from '@/assets/data/streamersData.json'

export default {
    components: {
        SliderController, SliderCard
    },
    setup() {
        const controllerData = ref([{id:1,imgPath: '/src/assets/streamers/idepato.jpg'}, {id: 2, imgPath: '/src/assets/streamers/kodo.jpg'}, {id:3,imgPath: '/src/assets/streamers/ridertdi.jpg'}]);
        const streamers = reactive([])
        var streamerData = reactive({});
        function idChanged(Id) {
            console.log(streamers);
            const dat = streamers.filter((item) => {
                return item.id === Id;
            });
            Object.assign(streamerData, dat[0]);
        }
        return {controllerData, idChanged, streamers, streamerData}
    },
    mounted() {
        Object.assign(this.streamers, StreamersData)
        Object.assign(this.streamerData, this.streamers[0])
    }
}
</script>

<style scoped>
    #slider {
        margin: 100px 0;
    }
</style>