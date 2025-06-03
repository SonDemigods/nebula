<template>
  <a-layout-footer class="nebula-footer">
    <div class="copyright">{{ copyright }}</div>
  </a-layout-footer>
</template>

<script lang="ts" setup>
// 导入响应式工具
import { ref } from 'vue';

// 定义版权信息
const copyright = ref<string>('');

// 赋值版权信息
copyright.value = `版权所有 © 2023-2025 公司名称`;

</script>

<style lang="less" scoped>
.nebula-footer {
  background: #ffffff !important;
  .copyright {
    text-align: center;
  }
}
</style>
