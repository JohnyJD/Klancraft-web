<template>
    <div id="contact-us">
        <h2 class="main-header-h2">POVEDZ NÁM NIEČO <span class="greenish">O SEBE</span></h2>
        <div class="contact-wrapper">
            <div class="form-wrapper">
                <ContactForm/>
            </div>
            <div class="right">
                <img src="@/assets/contact-img.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import ContactForm from './Forms/ContactForm.vue'
</script>

<style scoped>
    #contact-us {
        margin: var(--main-margin-size);
    }
    .contact-wrapper {
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .form-wrapper {
        width: 60%;
    }
    .right {
        width: 35%;
        text-align: right;
    }
    .right img {
        width: 80%;
        height: auto;
    }
</style>