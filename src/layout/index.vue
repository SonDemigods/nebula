<template>
  <a-layout style="min-height: 100vh">
    <Header
      :menuItems="menuItems"
      @update:selected="handleFirstSelect"
      :selectedKey="firstSelectedKey"
    />
    <Main
      :menuItems="childrenMenuItems"
      :selectedKey="subSelectedKey"
      @update:selected="handleSubSelect"
    />
    <Footer />
  </a-layout>
</template>

<script lang="ts" setup>
// 导入依赖
import { ref, watch } from 'vue';

// 导入类型
import type { MenuItem } from '@/interface/menu.interface';

// 导入组件
import Header from './header.vue';
import Main from './main.vue';
import Footer from './footer.vue';

// 定义菜单数据
const menuItems: MenuItem[] = [
  { key: 'abc', label: '一级菜单1', icon: 'PieChartOutlined' },
  { key: 'bcd', label: '一级菜单2', icon: 'DesktopOutlined' },
  {
    key: 'cde',
    label: 'User',
    icon: 'UserOutlined',
    children: [
      { key: '3', label: 'Tom', icon: 'UserOutlined' },
      { key: '4', label: 'Bill', icon: 'UserOutlined' },
      { key: '5', label: 'Alex', icon: 'UserOutlined' }
    ]
  },
  {
    key: 'def',
    label: 'Team',
    icon: 'TeamOutlined',
    children: [
      { key: '6', label: 'Team 1', icon: 'TeamOutlined' },
      { key: '8', label: 'Team 2', icon: 'TeamOutlined' }
    ]
  },
  { key: 'efg', label: 'File', icon: 'FileOutlined' }
];

// 定义一级菜单选中的 key
const firstSelectedKey = ref<string>('abc');

// 处理一级菜单选中事件
const handleFirstSelect = (key: string) => {
  firstSelectedKey.value = key;
};

// 监听一级菜单选中的key更新子菜单的内容及选中项
watch(firstSelectedKey, (newKey) => {
  menuItems.forEach((item) => {
    if (item.key === newKey) {
      subSelectedKey.value = item.children?.[0].key || '';
      childrenMenuItems.value = item.children || [];
    }
  });
});

// 子菜单内容
const childrenMenuItems = ref<MenuItem[]>([]);

// 子菜单选中项
const subSelectedKey = ref<string>('');

// 子菜单选中事件
const handleSubSelect = (key: string) => {
  subSelectedKey.value = key;
};
</script>
