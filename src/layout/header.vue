<template>
  <a-layout-header class="header" :style="{width: `calc(100% - ${menuCollapsed ? '60px' : '200px'})`}">
    <!-- 折叠按钮 -->
    <div class="collapsed-btn" @click="handleHeaderSelect">
      <a-tooltip>
        <template #title>{{ menuCollapsed ? '展开侧边栏' : '收起侧边栏' }}</template>
        <dynamicIcon
          :iconName="menuCollapsed ? 'MenuUnfoldOutlined' : 'MenuFoldOutlined'"
        />
      </a-tooltip>
    </div>
    <!-- 用户信息 -->
    <div class="user-info">
      <userMenu />
    </div>
    <!-- 面包屑导航 -->
    <a-breadcrumb :routes="breadcrumbRoutes" class="breadcrumb">
      <template #itemRender="{ route, paths }">
        <span
          v-if="breadcrumbRoutes.indexOf(route) === breadcrumbRoutes.length - 1"
        >
          <dynamicIcon :iconName="route.meta.icon" v-if="route.meta.icon" />
          {{ route.meta.title }}
        </span>
        <router-link v-else :to="`${basePath}/${paths.join('/')}`">
          <dynamicIcon :iconName="route.meta.icon" v-if="route.meta.icon" />
          {{ route.meta.title }}
        </router-link>
      </template>
    </a-breadcrumb>
    
  </a-layout-header>
</template>

<script lang="ts" setup>
// 导入依赖
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// 导入组件
import dynamicIcon from '@/components/dynamicIcon.vue';
import userMenu from '@/components/userMenu.vue';

// 接收父组件传递的参数
const props = defineProps<{ menuCollapsed: boolean }>();
// 定义自定义事件
const emit = defineEmits<{
  (e: 'update:menuCollapseChange', value: boolean): void;
}>();
// 更新侧边菜单的折叠状态
const handleHeaderSelect = () => {
  emit('update:menuCollapseChange', !props.menuCollapsed);
};

// 定义基础路径
const basePath = ref<string>('');

// 定义面包屑导航项
const breadcrumbRoutes = ref<any>([]);

// 获取当前路由堆栈信息
const route = useRoute();
const router = useRouter();

watch(
  () => route.path,
  () => {
    const matchedRoutes = route.matched.filter(
      (item) => item.meta && item.meta.title
    );
    breadcrumbRoutes.value = matchedRoutes.map((item) => ({
      path: item.path,
      breadcrumbName: item.meta.title,
      meta: item.meta
    }));
  },
  { immediate: true }
);
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  background-color: #fff !important;
  padding: 0 !important;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  transition: all 0.2s,background 0s;
}

.collapsed-btn {
  float: left;
  width: 64px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  cursor: pointer;
  color: #333;
  box-sizing: border-box;
}

// 面包屑导航项样式
.breadcrumb {
  display: block;
  width: calc(100% - 64px - 120px);
  margin: 0 120px 0 64px;
  padding: 0 16px;
  line-height: 64px;
  box-sizing: border-box;
}
.ant-breadcrumb-link {
  display: flex;
  align-items: center;
}

.ant-breadcrumb-link i {
  margin-right: 8px;
}

.user-info {
  float: right;
  width: 180px;
  margin: 0;
  padding: 0 16px;
  line-height: 64px;
  box-sizing: border-box;
}

.collapsed-btn:hover, .user-info:hover {
  background-color: #f5f5f5; 
}
</style>
