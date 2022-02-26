<template>
    <nav :class="{dark : isDark}">
        <div class="nav-wrapper">
            <div class="nav-logo"><img src="@/assets/KC_logo.png" alt=""></div>
            <div class="nav-items">
                <div class="nav-item">O NÁS</div>
                <div class="nav-item">AKO SA PRIDAŤ</div>
                <div class="nav-item">STREAMERI</div>
                <div class="nav-item">NÁŠ TÍM</div>
                <div class="nav-item">PODPOR NÁS</div>
                <div class="nav-item">FORMULÁR</div>
            </div>
        </div>
    </nav>
</template>

<script>
import {ref} from 'vue'
export default {
    setup() {
        const isDark = ref(false);
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
        return {onScroll, isDark}
    },
    created() {
        window.addEventListener('scroll', this.onScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.onScroll);
    },
}
</script>

<style scoped>
    nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        transition: 300ms;
    }
    .nav-wrapper {
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-logo {
        width: 50px;
        transition: 300ms;
    }
    .nav-logo img {
        width: 100%;
        height: auto;
    }
    .nav-items {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .nav-item {
        margin: 0 20px;
        font-size: 1em;
        color: white;
        cursor: pointer;
        transition: 300ms;
        font-family: var(--main-font-text);
    }
    .nav-item:hover {
        color: var(--main-green-light);
        transform: scale(1.2);
    }

    nav.dark {
        background: var(--main-green-dark);
        height: 50px;
    }
    nav.dark .nav-logo {
        transform: scale(0.7);
    }
    nav.dark .nav-item {
        transform: scale(0.9);
        margin: 0 10px;
    }
    nav.dark .nav-item:hover {
        transform: scale(1);
    }
</style>