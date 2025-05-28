<template>
  <component :is="iconComponent" />
</template>

<script lang="ts" setup>
// 引入vue
import { computed } from 'vue';
// 引入图标
import * as icons from '@ant-design/icons-vue';

// 接收图标名称
const props = defineProps<{
  iconName: string;
}>();

// 动态获取图标组件
const iconComponent = computed(() => {
  return icons[props.iconName] || null;
});
</script>
