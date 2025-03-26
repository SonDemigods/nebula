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
      <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
        <a-menu-item key="1">
          <pie-chart-outlined />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <desktop-outlined />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>Team</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout-content>
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts" setup>
// 导入图标
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined
} from '@ant-design/icons-vue';

// 导入响应式工具
import { ref } from 'vue';
// 导入响应式类型
import type { Ref } from 'vue';

// 定义侧边栏折叠状态
const collapsed: Ref<boolean> = ref(false);

// 定义菜单选中项
const selectedKeys: Ref<string[]> = ref(['1']);
</script>
