<template>
    <div id="contactus">
        <h2 class="main-header-h2">POVEDZ NÁM NIEČO <span class="greenish">O SEBE</span></h2>
        <div class="contact-wrapper">
            <div class="form-wrapper">
                <ContactForm :isStreamer="isStreamer"/>
            </div>
            <div class="right">
                <img src="@/assets/contact-img.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import ContactForm from './Forms/ContactForm.vue'
export default {
    components : {ContactForm},
    props: ['isStreamer']
}
</script>

<style scoped>
    #contactus {
        position: relative;
        margin: var(--main-margin-size);
    }
    /*#contactus::before {
        position: absolute;
        content: "";
        top: 50%;
        right: 0;
        width: 15%;
        height: 500px;
        transform: translateY(-50%);
        background: var(--main-green-dark);
    }*/
    .contact-wrapper {
        width: 65%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .form-wrapper {
        width: 100%;
    }
    .right {
        display: none;;
        position: relative;
        width: 35%;
        text-align: right;
    }
    .right img {
        width: 60%;
        height: auto;
    }

    @media only screen and (max-width: 768px) {
        .contact-wrapper {
            width: 80%;
        }
    }
</style>