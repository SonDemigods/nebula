<template>
  <a-layout-header>
    <a-menu theme="dark" mode="horizontal" :default-selected-keys="['1']">
      <a-menu-item key="1">一级菜单1</a-menu-item>
      <a-menu-item key="2">一级菜单2</a-menu-item>
      <a-menu-item key="3">一级菜单3</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header'
});
</script>