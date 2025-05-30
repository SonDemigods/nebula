<template>
  <a-layout-header class="header">
    <div class="collapsed-btn" @click="handleHeaderSelect">
      <a-tooltip>
        <template #title>{{ suderCollapsed ? '展开侧边栏' : '收起侧边栏' }}</template>
        <DynamicIcon
          :iconName="suderCollapsed ? 'MenuUnfoldOutlined' : 'MenuFoldOutlined'"
        />
      </a-tooltip>
    </div>

    <a-breadcrumb :routes="breadcrumbRoutes" class="breadcrumb">
      <template #itemRender="{ route, paths }">
        <span
          v-if="breadcrumbRoutes.indexOf(route) === breadcrumbRoutes.length - 1"
        >
          <DynamicIcon :iconName="route.meta.icon" v-if="route.meta.icon" />
          {{ route.meta.title }}
        </span>
        <router-link v-else :to="`${basePath}/${paths.join('/')}`">
          <DynamicIcon :iconName="route.meta.icon" v-if="route.meta.icon" />
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
import DynamicIcon from '@/components/DynamicIcon.vue';

// 接收父组件传递的参数
const props = defineProps<{ suderCollapsed: boolean }>();
// 定义自定义事件
const emit = defineEmits<{
  (e: 'update:sudercollapseChange', value: boolean): void;
}>();
// 更新侧边菜单的折叠状态
const handleHeaderSelect = () => {
  emit('update:sudercollapseChange', !props.suderCollapsed);
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

<style lang="less">
.header {
  background-color: #fff !important;
  padding: 0 16px !important;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.collapsed-btn {
  display: inline-block;
  width: 64px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  cursor: pointer;
  color: #333;
  vertical-align: top;
}

// 面包屑导航项样式
.breadcrumb {
  display: inline-block;
  width: calc(60% - 32px);
  margin: 0;
  padding: 0 16px;
  line-height: 64px;
  vertical-align: top;
}
.ant-breadcrumb-link {
  display: flex;
  align-items: center;
}

.ant-breadcrumb-link i {
  margin-right: 8px;
}
</style>
