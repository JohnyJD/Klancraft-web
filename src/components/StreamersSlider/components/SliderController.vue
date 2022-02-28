<template>
    <div class="controlls-wrapper">
        <div class="control" :class="{active : activeLink[id]}" v-for="(dat, id) in data" :key="dat.id">
            <div @click="changeId(dat.id)">
                <img :src="dat.imgPath" alt="">
            </div>   
        </div>
    </div>
</template>

<script>
import {reactive, ref} from 'vue'
//import getImgPath from '@/imgPath'

export default {
    props: ['data'],
    emits: ['idChanged'],
    setup(_, context) {
        var activeLink = reactive([true, false, false]);
        var prevId = 1;
        var active = ref('')
        function changeId(Id) {
            if(Id !== prevId) {
                activeLink.splice(Id-1, 1, true);
                activeLink.splice(prevId-1, 1, false);
                
                console.log(Id + '   ' + prevId)
                prevId = Id;

                context.emit('idChanged', Id);
            }
        }
        
        return {changeId, prevId, activeLink, active}
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
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 10px;
        transform: scale(1);
        transform-origin: bottom center;
        cursor: pointer;
        transition: 500ms;
        opacity: 0.5;
    }
    .control > div {
        
        height: 100%;
    }
    .control.active {
        opacity: 1;
        transform: scale(1.8);
    }

    .control img {
        width: 100%;
        height: auto;
    }
</style>