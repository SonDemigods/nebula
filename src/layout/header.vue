<template>
  <a-layout-header theme="dark">
    <div class="logo" />
    <a-menu
      theme="dark"
      mode="horizontal"
      v-model:selectedKeys="selectedKeys"
      @select="handleSelect"
    >
      <!-- 动态渲染菜单项 -->
      <a-menu-item v-for="item in menuItems" :key="item.key">
        <DynamicIcon :iconName="item.icon" />
        <span>{{ item.label }}</span>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script lang="ts" setup>
// 导入依赖
import { ref, watch } from 'vue';

// 导入类型
import type { MenuItem } from '@/interface/menu.interface';

// 导入公共组件
import DynamicIcon from '@/components/DynamicIcon.vue';

// 接收父组件传递的菜单数据和选中的 key
const props = defineProps<{
  menuItems: MenuItem[];
  selectedKey: string;
}>();

// 定义菜单选中项
const selectedKeys = ref<string[]>([props.selectedKey]);

// 监听 selectedKey 的变化
watch(
  () => props.selectedKey,
  (newVal) => {
    selectedKeys.value = [newVal];
  }
);

// 定义自定义事件
const emit = defineEmits(['update:selected']);
// 处理菜单项点击事件
const handleSelect = ({ key = '' }: { key: string }) => {
  // 触发自定义事件，将选中的 key 传递给父组件
  emit('update:selected', key);
};
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
