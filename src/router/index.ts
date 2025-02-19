import { createRouter, createWebHashHistory,  } from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'

import Login from '@/views/login.vue';
import Home from '@/views/home.vue';
import Error403 from '@/views/error/403.vue';
import Error404 from '@/views/error/404.vue';
import Error500 from '@/views/error/500.vue';
import ErrorUnknown from '@/views/error/unknown.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/403',
    name: '403',
    component: Error403,
    meta: { requiresAuth: false } // 不需要布局组件
  },
  {
    path: '/404',
    name: '404',
    component: Error404,
    meta: { requiresAuth: false } // 不需要布局组件
  },
  {
    path: '/500',
    name: '500',
    component: Error500,
    meta: { requiresAuth: false } // 不需要布局组件
  },
  {
    path: '/unknown',
    name: 'unknown',
    component: ErrorUnknown,
    meta: { requiresAuth: false } // 不需要布局组件
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false } // 不需要布局组件
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true } // 需要布局组件
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;