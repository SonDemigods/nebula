<template>
  <a-layout>
    <a-layout-sider
      width="200"
      theme="light"
      breakpoint="lg"
      v-model:collapsed="collapsed"
      collapsible
      collapsedWidth="60"
    >
      <a-menu
        v-model:selectedKeys="selectedKeys"
        @select="handleSelect"
        theme="light"
        mode="inline"
      >
        <!-- 动态渲染所有菜单项 -->
        <template v-for="item in menuItems" :key="item.key">
          <!-- 渲染子菜单 -->
          <a-sub-menu v-if="item.children" :key="item.key">
            <template #title>
              <span>
                <DynamicIcon :iconName="item.icon" />
                <span>{{ item.label }}</span>
              </span>
            </template>
            <a-menu-item v-for="child in item.children" :key="child.key">
              <DynamicIcon :iconName="child.icon" />
              <span>{{ child.label }}</span>
            </a-menu-item>
          </a-sub-menu>
          <!-- 渲染普通菜单项 -->
          <a-menu-item v-else :key="item.key">
            <DynamicIcon :iconName="item.icon" />
            <span>{{ item.label }}</span>
          </a-menu-item>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout-content>
      <router-view />
    </a-layout-content>
  </a-layout>
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

// 定义侧边栏折叠状态
const collapsed = ref<boolean>(false);

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
