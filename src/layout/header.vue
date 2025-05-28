<template>
  <a-layout-header class="header">
    <a-breadcrumb :routes="routes">
      <template #itemRender="{ route, paths }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{ route.breadcrumbName }}
        </span>
        <router-link v-else :to="`${basePath}/${paths.join('/')}`">
          {{ route.breadcrumbName }}
        </router-link>
      </template>
    </a-breadcrumb>
  </a-layout-header>
</template>

<script lang="ts" setup>
// 导入依赖
import { ref, watch } from 'vue';

const basePath = ref<string>('');
const routes = ref<any>([]);

</script>

<style lang="less">
.header {
  background-color: #fff !important;
  padding: 0 16px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>
