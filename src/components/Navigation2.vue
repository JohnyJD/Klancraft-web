<template>
    <nav :class="{hide : !isDark}">
        <div class="nav-wrapper">
            <div class="nav-items">
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
export default {
    setup() {
        const isDark = ref(false);
        const scrollingData = reactive({'about' : '', 'joinus' : '', 'streamers' : '', 'ourteam' : '', 'supportus' : '','contactus' : ''});
        const activeSection = ref(1);
        function onScroll(event) {
            if(window.scrollY > window.innerHeight/2) {
                if(!isDark.value) {
                    isDark.value = true;
                    console.log("changed true");
                }
            }
            else {
                if(isDark.value) {
                    isDark.value = false;
                     console.log("changed false");
                }
            }
            //console.log(window.scrollY + ' > ' +window.innerHeight/2 + '       ' + isDark.value);
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

            //let aboutUsOffset = [aboutUs.offsetTop, aboutUs.offsetHeight];
            //console.log(aboutUsOffset[0] , aboutUsOffset[1]);
            //if(window.scrollY) { 
        }
        function animateTo(sectionId) {
            window.scroll(0, scrollingData[sectionId].offset);
        }
        return {onScroll, onScrolll, animateTo, isDark, scrollingData, activeSection}
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
        font-size: 1em;
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
        color: var(--main-green-light);
        transform: scale(1.2);
    }
</style>