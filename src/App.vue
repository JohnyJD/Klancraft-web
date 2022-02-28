<template>
  <navigation/>
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

  export default {
    components: {
      TopSection, AboutUs, JoinUs, StreamersOverview, OurTeam, DonateUs, ContactUs, Navigation
    },
    setup() {
      const isStreamer = ref(false);
      function changeForm(value) {
        isStreamer.value = value;
      }
      return {isStreamer, changeForm}
    }
  }
</script>
