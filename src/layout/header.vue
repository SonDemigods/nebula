<template>
  <a-layout-header theme="dark">
    <div class="logo" />
    <a-menu theme="dark" mode="horizontal" v-model:selected-keys="selectedKeys">
      <a-menu-item key="1">一级菜单1</a-menu-item>
      <a-menu-item key="2">一级菜单2</a-menu-item>
      <a-menu-item key="3">一级菜单3</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script lang="ts" setup>
// 导入响应式工具
import { ref } from 'vue';
// 导入响应式类型
import type { Ref } from 'vue';

// 定义菜单选中项
const selectedKeys:Ref<string[]> = ref(['1']);

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
