<template>
  <a-result status="500" title="500" sub-title="抱歉，服务器出错了">
    <template #extra>
      <a-button type="primary" @click="goHome">返回首页</a-button>
    </template>
  </a-result>
</template>

<script lang="ts" setup>
// 导入路由
import { useRouter } from 'vue-router';
// 创建路由实例
const router = useRouter();
/**
 * @functionName goHome
 * @description 返回首页
 * @author 张航
 * @date 2025-03-27 10:36:49
 * @version V1.0.0
 */
const goHome = (): void => {
  router.push({ name: 'Home' });
};

</script>