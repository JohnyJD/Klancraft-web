<template>
    <div class="controlls-wrapper">
        <div class="control" v-for="(dat, id) in data" :key="dat.id">
            <div :class="{active : activeLink[id]}" @click="changeId(dat.id)">
                <img :src="getImgPath(dat.imgPath)" alt="">
            </div>   
        </div>
    </div>
</template>

<script>
import {reactive} from 'vue'
import getImgPath from '@/imgPath'

export default {
    props: ['data'],
    emits: ['idChanged'],
    setup(_, context) {
        var activeLink = reactive([true, false, false]);
        var prevId = 1;
        function changeId(Id) {
            if(Id !== prevId) {
                activeLink.splice(Id-1, 1, true);
                activeLink.splice(prevId-1, 1, false);
                
                console.log(Id + '   ' + prevId)
                prevId = Id;

                context.emit('idChanged', Id);
            }
        }
        return {getImgPath,changeId, prevId, activeLink}
    },
}
</script>

<style scoped>
    .controlls-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px 0;
    }
    .control {
        width: 40px;
        height: auto;
        margin: 0 10px;
    }
    .control > div {
        opacity: 0.7;
        transform: scale(1);
        transform-origin: bottom center;
        cursor: pointer;
        transition: 500ms;
    }
    .control > div.active {
        opacity: 1;
        transform: scale(1.8);
    }

    .control img {
        width: 90%;
        height: auto;
    }
</style>