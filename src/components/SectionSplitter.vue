<template>
    <div class="splitter" :class="{flip : flip, colorflip: colorFlip}">
        <div class="dark-part-wrapper"><div class="dark-part"></div></div>
        <div class="bright-part-wrapper"><div v-if="!brightNone" class="bright-part"></div></div>
    </div>
</template>

<script>
export default {
    props: ['flip', 'colorFlip', 'brightNone']
}
</script>

<style scoped>
    .splitter {
        width: 100%;
        position: relative;
    }
    .dark-part-wrapper , .bright-part-wrapper {
        filter: drop-shadow(0px 0px 10px rgba(13, 44, 0, 0.55));
    }
    .dark-part,.bright-part-wrapper  {
        top: 0;
        width: 100%;
        height: 100px;
    }
    .dark-part-wrapper {
        position: relative;
        z-index: 2;
    }
    .dark-part {
        position: relative;
        background: #14461d;
        clip-path: polygon(0 0, 0 100%, 100% 0);
        z-index: 2;
    }
    .bright-part-wrapper {
        position: absolute;
        left: 0;
        z-index: 1;
    }
    .bright-part {
        position: relative;
        width: 100%;
        height: 100px;
        background: #5C9239;
        clip-path: polygon(100% 0, 0 0, 100% 100%);
    }
    .splitter.flip .dark-part {
        clip-path: polygon(100% 0, 0 100%, 100% 100%);
    }
    
    .splitter.flip .bright-part {
        clip-path: polygon(0 100%, 0 0, 100% 100%);
    }
    .splitter.colorflip .dark-part {
        background: var(--main-green-light);
    }
    .splitter.colorflip .bright-part {
        background: var(--main-green-dark);
    }
</style>
    