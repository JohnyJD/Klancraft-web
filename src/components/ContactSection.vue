<template>
    <div id="contact-us">
        <h2>POVEDZ NÁM NIEČO <span class="greenish">O SEBE</span></h2>
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
    #contact-us h2 {
        position: relative;
        width: 100%;
        font-size: 3.5em;
        text-align: center;
    }
    #contact-us h2::before {
        position: absolute;
        content: "";
        bottom: -20px;
        left: 50%;
        width: 300px;
        height: 3px;
        background: #14461d;
        transform: translateX(-50%);
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