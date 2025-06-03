<template>
  <div class="main-box">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
// 导入依赖
import { ref } from 'vue';

</script>
<style lang="less" scoped>
.main-box{
  padding-top: 64px;
  height: 100vh;
  overflow: auto;
}
</style>
