<template>
  <navigation v-if="!isMobile"/>
  <navigation-mobile v-else/>
  <top-section/>
  <about-us/>
  <join-us @changeForm="changeForm"/>
  <streamers-overview/>
  <our-team/>
  <donate-us/>
  <contact-us :isStreamer="isStreamer"/>
</template>

<script>
  import {ref} from 'vue'

  import TopSection from './components/TopSection.vue'
  import AboutUs from './components/AboutUs.vue'
  import JoinUs from './components/JoinUs.vue'
  import StreamersOverview from './components/StreamersOverview.vue'
  import OurTeam from './components/OurTeam.vue'
  import DonateUs from './components/DonateUs.vue'
  import ContactUs from './components/ContactSection.vue'
  import Navigation from './components/Navigation2.vue'
  import NavigationMobile from './components/NavigationMobile.vue'

  export default {
    components: {
      TopSection, AboutUs, JoinUs, StreamersOverview, OurTeam, DonateUs, ContactUs, Navigation, NavigationMobile
    },
    setup() {
      const isStreamer = ref(false);
      const isMobile = ref(false);
      function changeForm(value) {
        isStreamer.value = value;
      }
      return {isStreamer, isMobile, changeForm}
    },
    mounted() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          this.isMobile =  true
        } else {
          this.isMobile =  false
        }
    }
  }
</script>
