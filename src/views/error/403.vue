<template>
  <a-result status="403" title="403" sub-title="抱歉，你无权访问该页面">
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