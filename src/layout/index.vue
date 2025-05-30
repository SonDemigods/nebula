<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider
      width="200"
      theme="dark"
      breakpoint="lg"
      v-model:collapsed="collapsed"
      collapsedWidth="60"
    >
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="MenuSelected"
        @select="handleMenuSelect"
        :items="menuList"
        theme="dark"
        mode="inline"
      />
    </a-layout-sider>
    <a-layout-content>
      <Header
        :suderCollapsed="collapsed"
        @update:sudercollapseChange="handleCollapseChange"
      />
      <Main />
      <Footer />
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts" setup>
// 导入依赖
import { ref, h } from 'vue';

// 导入类型
import type { ItemType } from 'ant-design-vue';

// 导入组件
import DynamicIcon from '@/components/DynamicIcon.vue';
import Header from './header.vue';
import Main from './main.vue';
import Footer from './footer.vue';

// 定义菜单数据
const menuList: ItemType[] = [
  {
    key: 'abc',
    label: '一级菜单1',
    icon: h(DynamicIcon, { iconName: 'PieChartOutlined' })
  },
  {
    key: 'bcd',
    label: '一级菜单2',
    icon: h(DynamicIcon, { iconName: 'DesktopOutlined' })
  },
  {
    key: 'cde',
    label: 'User',
    icon: h(DynamicIcon, { iconName: 'UserOutlined' }),
    children: [
      {
        key: '3',
        label: 'Tom',
        icon: h(DynamicIcon, { iconName: 'UserOutlined' })
      },
      {
        key: '4',
        label: 'Bill',
        icon: h(DynamicIcon, { iconName: 'UserOutlined' })
      },
      {
        key: '5',
        label: 'Alex',
        icon: h(DynamicIcon, { iconName: 'UserOutlined' })
      }
    ]
  },
  {
    key: 'def',
    label: 'Team',
    icon: h(DynamicIcon, { iconName: 'TeamOutlined' }),
    children: [
      {
        key: '6',
        label: 'Team 1',
        icon: h(DynamicIcon, { iconName: 'TeamOutlined' })
      },
      {
        key: '8',
        label: 'Team 2',
        icon: h(DynamicIcon, { iconName: 'TeamOutlined' })
      }
    ]
  },
  {
    key: 'efg',
    label: 'File',
    icon: h(DynamicIcon, { iconName: 'FileOutlined' })
  }
];

// 定义一级菜单选中的 key
const MenuSelected = ref<string[]>(['abc']);

// 处理一级菜单选中事件
const handleMenuSelect = ({ key = '' }: { key: string }) => {
  console.log(key);
};

// 定义侧边栏折叠状态
const collapsed = ref<boolean>(false);

// 处理侧边栏折叠事件
const handleCollapseChange = (val: boolean) => {
  collapsed.value = val;
};
</script>
<style>
.logo {
  height: 32px;
  width: 100%;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px 0;
}
</style>
