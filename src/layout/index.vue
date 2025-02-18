<template>
  <a-layout style="min-height: 100vh">
    <Header />
    <Main />
    <Footer />
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './header.vue';
import Main from './main.vue';
import Footer from './footer.vue';

export default defineComponent({
  name: 'Layout',
  components: {
    Header,
    Main,
    Footer
  }
});
</script>