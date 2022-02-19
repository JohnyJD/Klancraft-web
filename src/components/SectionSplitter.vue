<template>
    <div class="splitter" :class="{flip : flip}">
        <div class="dark-part"></div>
        <div class="bright-part"></div>
    </div>
</template>

<script>
export default {
    props: ['flip']
}
</script>

<style scoped>
    .splitter {
        width: 100%;
        position: relative;
    }
    .dark-part {
        position: relative;
        width: 100%;
        height: 100px;
        background: #14461d;
        clip-path: polygon(0 0, 0 100%, 100% 0);
        z-index: 2;
    }
    .splitter.flip .dark-part {
        clip-path: polygon(100% 0, 0 100%, 100% 100%);
    }
    
    .bright-part {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background: #5C9239;
        clip-path: polygon(100% 0, 0 0, 100% 100%);
        z-index: 1;
    }
    .splitter.flip .bright-part {
        clip-path: polygon(0 100%, 0 0, 100% 100%);
    }
</style>
    