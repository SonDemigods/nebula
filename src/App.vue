<template>
  <router-view v-if="!$route.meta.requiresAuth"></router-view>
  <Layout v-else>
    <router-view></router-view>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layout from './layout/index.vue';

export default defineComponent({
  name: 'App',
  components: {
    Layout
  }
});
</script>

<style scoped></style>