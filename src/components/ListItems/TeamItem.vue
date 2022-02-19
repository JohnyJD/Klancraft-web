<template>
    <div class="team-list-item">
        <div class="team-img"><img :src="getImgPath(data.imgPath)" alt=""></div>
        <div>
            <h3>{{data.nick}}</h3>
            <span class="greenish text">{{data.desc}}</span>
        </div>
        
    </div>
</template>

<script>
import getImgPath from '@/imgPath.js'
export default {
    props: ['data'],
    setup() {
        return {getImgPath}
    }
}
</script>

<style scoped>
    .team-list-item {
        position: relative;
        width: auto;
        display: flex;
        justify-content: center;
        text-align: center;
        flex-wrap: wrap;
        padding: 40px 0;
    }
    .team-list-item > div {
        width: 100%;
    }
    .team-img {
        max-width: 130px !important;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .team-img img {
        width: 100%;
        height: auto;
    }
    .team-list-item h3 {
        font-size: 2em;
        margin: 0;
    }
    .team-list-item span {
        font-size: 1em;
    }
    .developers .team-list-item:first-child::before {
        width: 50%;
        left: 100%;
        transform: translateX(-100%);
    }
    .developers .team-list-item:last-child::before {
        width: 50%;
    }
    .developers .team-list-item::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 4px;
        top: 0;
        left: 0;
        background: #598F37;
    }
    .team-list-item::after {
        position: absolute;
        content: '';
        width: 4px;
        height: 30px;
        top: 100%;
        left: 50%;
        transform: translate(-50%, -100%);
        background: #598F37;
    }
    .developers .team-list-item::after {
        top: 0;
        transform: translate(-50%, 0);
    }
    
</style>