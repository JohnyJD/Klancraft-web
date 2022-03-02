<template>
    <nav :class="{hide : !isVisible}">
        <div class="nav-wrapper">
            <div class="nav-items">
                <div class="nav-logo" @click="animateTo('top')">
                    <svg id="Vrstva_1" data-name="Vrstva 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path class="cls-1" d="M313.42,864.79,246,824.55V364.24l67.43-31V553h63.76V310.94l67.44-32.06V555.5h-32.8v87.06h32.8V932.93L377,898.7l.18-253.63H313.42Z"/><polygon class="cls-2" points="729.21 345.29 729.21 345.29 597.43 289.54 597.43 289.54 563.71 272 563.82 405.27 563.82 405.27 563.82 812.9 564 942.56 596.92 927.73 729.56 876.31 729.56 876.31 761.8 862.28 761.8 812.9 761.8 811.69 761.8 658.27 694.59 658.27 694.59 775.38 631.03 803.98 630.46 403.02 694.59 429.15 694.59 559.9 761.8 559.9 761.8 405.27 761.8 356.29 729.21 345.29"/><polygon class="cls-2" points="535.53 955.28 507.5 972.48 477.76 957.35 477.76 34.04 535.53 34.04 535.53 955.28"/><rect class="cls-2" x="452.48" y="185.34" width="108.32" height="53.64"/><polygon class="cls-2" points="239.45 327.02 452.53 238.99 452.53 185.34 238.94 278.19 239.45 327.02"/><rect class="cls-2" x="452.14" y="33.35" width="108.32" height="53.64" rx="3.77"/><path class="cls-2" d="M758.88,320.56,562.72,239.8a3.09,3.09,0,0,1-1.91-2.86V190.07a3.08,3.08,0,0,1,4.31-2.83l196.61,85.4a3.11,3.11,0,0,1,1.86,2.87l-.45,42.22A3.09,3.09,0,0,1,758.88,320.56Z"/></svg>
                    <!--<img src="@/assets/KC_logo_dark.png" alt="">-->
                </div>
                <div class="nav-item" :class="{active : activeSection == 'about'}" @click="animateTo('about')">O NÁS</div>
                <div class="nav-item" :class="{active : activeSection == 'joinus'}" @click="animateTo('joinus')">AKO SA PRIDAŤ</div>
                <div class="nav-item" :class="{active : activeSection == 'streamers'}" @click="animateTo('streamers')">STREAMERI</div>
                <div class="nav-item" :class="{active : activeSection == 'ourteam'}" @click="animateTo('ourteam')">NÁŠ TÍM</div>
                <div class="nav-item" :class="{active : activeSection == 'supportus'}" @click="animateTo('supportus')">PODPOR NÁS</div>
                <div class="nav-item" :class="{active : activeSection == 'contactus'}" @click="animateTo('contactus')">FORMULÁR</div>
            </div>
            
        </div>
    </nav>
</template>

<script>
import {ref, reactive} from 'vue'
import animateToOffset from '@/navigation.js'
export default {
    setup() {
        const isVisible = ref(false);
        const scrollingData = reactive({'about' : '', 'joinus' : '', 'streamers' : '', 'ourteam' : '', 'supportus' : '','contactus' : ''});
        const activeSection = ref(1);
        function onScroll(event) {
            if(window.scrollY > window.innerHeight/2) {
                if(!isVisible.value) {
                    isVisible.value = true;
                    console.log("changed true");
                }
            }
            else {
                if(isVisible.value) {
                    isVisible.value = false;
                     console.log("changed false");
                }
            }
        }
        function onScrolll(event) {
             for(const [key, _] of Object.entries(scrollingData)) {
                let el = document.getElementById(key);
                scrollingData[key] = {'offset' : el.offsetTop, 'height': el.offsetHeight, 'end' : el.offsetTop + el.offsetHeight}
            }
            let scrollPos = window.scrollY + window.innerHeight/2;
            //console.log(scrollPos, window.innerHeight/2, window.scrollY);
            if(scrollPos > scrollingData.about.offset && scrollPos < scrollingData.about.end) {
                console.log('you are in about page');
                activeSection.value = 'about';
            }
            if(scrollPos > scrollingData.joinus.offset && scrollPos < scrollingData.joinus.end) {
                console.log('you are in joinus page');
                activeSection.value = 'joinus';
            }
            if(scrollPos > scrollingData.streamers.offset && scrollPos < scrollingData.streamers.end) {
                console.log('you are in streamers page');
                activeSection.value = 'streamers';
            }
            if(scrollPos > scrollingData.ourteam.offset && scrollPos < scrollingData.ourteam.end) {
                console.log('you are in ourteam page');
                activeSection.value = 'ourteam';
            }
            if(scrollPos > scrollingData.supportus.offset && scrollPos < scrollingData.supportus.end) {
                console.log('you are in supportus page');
                activeSection.value = 'supportus';
            }
            if(scrollPos > scrollingData.contactus.offset && scrollPos < scrollingData.contactus.end) {
                console.log('you are in contactus page');
                activeSection.value = 'contactus';
            }
            let el = document.getElementById('contactus');
            console.log(el.offsetTop)
        }
        function animateTo(sectionId) {
            let offset = 0;
            if(sectionId != 'top') {
                offset = scrollingData[sectionId].offset
            }
            animateToOffset(offset);
        }
        return {onScroll, onScrolll, animateTo, isVisible, scrollingData, activeSection}
    },
    mounted() {
        for(const [key, _] of Object.entries(this.scrollingData)) {
            let el = document.getElementById(key);
            this.scrollingData[key] = {'offset' : el.offsetTop, 'height': el.offsetHeight, 'end' : el.offsetTop + el.offsetHeight}
        }
    },
    created() {
        window.addEventListener('scroll', this.onScroll);
        window.addEventListener('scroll', this.onScrolll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.onScroll);
        window.removeEventListener('scroll', this.onScrolll);
    },
}
</script>

<style scoped>
    nav {
        position: fixed;
        top: 0;
        right: 0;
        width: 130px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        transition: 300ms;
    }
    nav.hide {
        right: -200px;
    }
    .nav-wrapper {
        position: relative;
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-items {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    }
    .nav-item {
        width: 100%;
        margin: 10px 0;
        font-size: 1.1em;
        color: rgb(182, 182, 182);
        cursor: pointer;
        transition: 300ms;
        transform: scale(0.8);
        text-align: right;
        transform-origin: center right;
        font-family: var(--main-font-header);
    }
    .nav-item.active, .nav-item.active:hover {
        color: #77c13e;
        transform: scale(1.5);
        opacity: 1;
    }
    .nav-item:hover {
        transform: scale(1.2);
    }

    .nav-logo {
        position: absolute;
        top: -70px;
        right: 0;
        width: 60px;
        height: auto;
        cursor: pointer;
        transition: transform 300ms;
    }
    .nav-logo:hover {
        transform: scale(1.2);
    }
    .nav-logo img {
        width: 50px;
        height: auto;
    }
    .nav-logo svg {
        fill: #77c13e !important;
    }

    @media only screen and (max-width: 768px) {
        nav {
            display: none;
        }
    }
</style>