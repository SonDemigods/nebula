import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// 导入路由配置
import viewConfig from './view.config';
// 动态加载 views 文件夹下的所有 .vue 文件
const modules = import.meta.glob('@/views/**/*.vue');

// 动态生成路由配置
const dynamicRoutes: RouteRecordRaw[] = [];
for (const path in modules) {
  const fileName = path.match(/\/([^/]+)\.vue$/)?.[1];
  if (fileName) {
    dynamicRoutes.push({
      path: `/${fileName}`,
      name: fileName,
      component: modules[path],
      meta: viewConfig[fileName]
    });
  }
}

// 静态路由
const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    meta: { requiresAuth: true, title: '首页', icon: 'HomeOutlined' },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: { requiresAuth: false, title: '登录', icon: 'LoginOutlined' },
  },
  {
    path: '/unknown',
    name: 'unknown',
    component: () => import('@/views/error/unknown.vue'),
    meta: { requiresAuth: false, title: '未知错误', icon: 'QuestionOutlined' },
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/error/500.vue'),
    meta: { requiresAuth: false, title: '服务器错误', icon: 'CloseCircleOutlined' },
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/error/403.vue'),
    meta: { requiresAuth: false, title: '禁止访问', icon: 'StopOutlined' },
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/error/404.vue'),
    meta: { requiresAuth: false, title: '页面未找到', icon: 'QuestionCircleOutlined' },
  },
];

// 合并动态路由和静态路由
const routes: RouteRecordRaw[] = [...dynamicRoutes, ...staticRoutes];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;