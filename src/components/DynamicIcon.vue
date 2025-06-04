<template>
  <component :is="iconComponent" />
</template>

<script lang="ts" setup>
// 导入依赖
import { computed } from 'vue';
// 导入全部图标
import * as icons from '@ant-design/icons-vue';

// 接收图标名称
const props = defineProps<{
  iconName: string;
}>();

// 动态获取图标组件
const iconComponent = computed(() => {
  const icon = (icons as Record<string, any>)[props.iconName];
  return icon || null;
});
</script>
