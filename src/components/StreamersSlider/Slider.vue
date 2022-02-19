<template>
    <div id="slider">
        <slider-controller :data=controllerData @idChanged='idChanged'/>
        <slider-card :data="stremerData"/>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import SliderController from './components/SliderController.vue'
import SliderCard from './components/SliderCard.vue'

export default {
    components: {
        SliderController, SliderCard
    },
    setup() {
        const controllerData = ref([{id:1,imgPath: '/src/assets/idepatoologo.png'}, {id: 2, imgPath: '/src/assets/idepatoologo.png'}, {id:3,imgPath: '/src/assets/idepatoologo.png'}]);
        const streamers = ref([{id: 1, imgPath: '/src/assets/idepatoologo.png', nick: 'Idepatooo', text:'sdfas dfsadf asdf asdf sdf ', desc:'CEO, streamer'}, {id: 2, imgPath: '/src/assets/idepatoologo.png', nick: 'ForestBroke', text:'piúpfdptičťjlktjelkjaôdjg laskdjf lkasdj čušoijqoiajds  ', desc:'Developer, streamer'}, {id: 3, imgPath: '/src/assets/idepatoologo.png', nick: 'Hura sdfsdfds', text:'890%8éíášľ=éíčá uwio fsaodpouaosidf ', desc:'Streamer'} ])
        var stremerData = reactive({id: 1, imgPath: '/src/assets/idepatoologo.png', nick: 'Idepatooo', text:'sdfas dfsadf asdf asdf sdf ', desc:'CEO, stremer'});
        function idChanged(Id) {
            const dat = streamers.value.filter((item) => {
                return item.id === Id;
            });
            Object.assign(stremerData, dat[0]);
        }
        return {controllerData, idChanged, streamers, stremerData}
    },
}
</script>

<style scoped>

</style>