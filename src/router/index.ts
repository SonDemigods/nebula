import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Login from '@/views/login.vue';
import Home from '@/views/home.vue';
import Error403 from '@/views/error/403.vue';
import Error404 from '@/views/error/404.vue';
import Error500 from '@/views/error/500.vue';
import ErrorUnknown from '@/views/error/unknown.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true, title: '首页', icon: 'home-icon' } // 添加图标和标题
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false, title: '登录', icon: 'login-icon' } // 添加图标和标题
  },
  {
    path: '/unknown',
    name: 'unknown',
    component: ErrorUnknown,
    meta: { requiresAuth: false, title: '未知错误', icon: 'error-icon' } // 添加图标和标题
  },
  {
    path: '/500',
    name: '500',
    component: Error500,
    meta: { requiresAuth: false, title: '服务器错误', icon: 'error-icon' } // 添加图标和标题
  },
  {
    path: '/403',
    name: '403',
    component: Error403,
    meta: { requiresAuth: false, title: '禁止访问', icon: 'error-icon' } // 添加图标和标题
  },
  {
    path: '/:catchAll(.*)', // 匹配所有未定义的路径
    name: '404',
    component: Error404,
    meta: { requiresAuth: false, title: '页面未找到', icon: 'error-icon' } // 添加图标和标题
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;