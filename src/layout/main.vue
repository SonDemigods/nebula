<template>
  <a-layout>
    <a-layout-sider width="200">
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">二级菜单1</a-menu-item>
        <a-menu-item key="2">二级菜单2</a-menu-item>
        <a-menu-item key="3">二级菜单3</a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout-content>
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Main'
});
</script>