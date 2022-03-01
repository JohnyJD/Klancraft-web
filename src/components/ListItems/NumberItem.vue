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
        width: 30px;
    }
    .item > div:nth-child(2) {
        position: relative;
        width: 40px;
        margin: 0 10px;
    } 
    .item > div:nth-child(3) {
        flex: 1;
    } 
    .item > div:nth-child(2)::before {
        position: absolute;
        content: "";
        top: 50%;
        left: 50%;
        width: 80%;
        height: 3px;
        background: var(--main-green-dark);
        transform: translate(-50%, -50%);
    }
    .item span {
        font-size: 2em;
        font-family: var(--main-font-header);
        color: var(--main-green-dark);
    }
    .item p {
        font-size: 1.2em;
    }

    @media screen and (max-width: 1024px) {
        .item p {
            font-size: 1em;
        }
    }
    @media screen and (max-width: 768px) {
        
    }
</style>