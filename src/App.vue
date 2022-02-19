<template>
  <top-section/>
  <about-us/>
  <join-us/>
  <streamers-overview/>
  <our-team/>
  <donate-us/>
  <contact-us/>
</template>

<script setup>
  import TopSection from './components/TopSection.vue'
  import AboutUs from './components/AboutUs.vue'
  import JoinUs from './components/JoinUs.vue'
  import StreamersOverview from './components/StreamersOverview.vue'
  import OurTeam from './components/OurTeam.vue'
  import DonateUs from './components/DonateUs.vue'
  import ContactUs from './components/ContactSection.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');
  html, body {
    margin: 0;
    padding: 0;
  }
  h1, h2, h3 {
    font-family:'Rowdies', cursive;
  }
  p, .text {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
  }
  .greenish {
        color: #598F37;
    }
</style>
