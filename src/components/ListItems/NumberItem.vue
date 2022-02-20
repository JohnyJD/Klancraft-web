<template>
    <div class="item">
        <div><span>{{tag}}</span></div>
        <div></div>
        <div><p>{{text}}</p></div>
    </div>
</template>

<script>
export default {
    props: ['tag', 'text'] 
}
</script>

<style scoped>
    .item {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .item > div:nth-child(1) {
        width: 60px;
    }
    .item > div:nth-child(2) {
        position: relative;
        width: 30%;
    } 
    .item > div:nth-child(3) {
        width: 60%;
    } 
    .item > div:nth-child(2)::before {
        position: absolute;
        content: "";
        top: 50%;
        left: 50%;
        width: 80%;
        height: 5px;
        background: #14461d;
        transform: translate(-50%, -50%);
    }
    .item span {
        font-size: 2.5em;
        font-family:'Rowdies', cursive;
        color: #14461d;
    }
    .item p {
        font-size: 1.2em;
    }
</style>