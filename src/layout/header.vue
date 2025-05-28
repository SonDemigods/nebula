<template>
  <a-layout-header theme="dark">
    <div class="logo" />
    <a-menu theme="dark" mode="horizontal" v-model:selected-keys="selectedKeys">
      <!-- 动态渲染菜单项 -->
      <a-menu-item v-for="item in menuItems" :key="item.key">{{ item.label }}</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { MenuItem } from '@/interface/menu.interface';

// 定义菜单列表
const menuItems: MenuItem[] = [
  { key: '1', label: '一级菜单1' },
  { key: '2', label: '一级菜单2' },
  { key: '3', label: '一级菜单3' }
];

// 定义菜单选中项
const selectedKeys = ref<string[]>(['1']);
</script>

<style lang="less">
.logo {
  height: 32px;
  min-width: 124px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>