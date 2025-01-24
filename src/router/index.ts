import { createRouter, createWebHashHistory,  } from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/403',
    name: '403',
    component: () => import('../views/system/403.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/system/404.vue')
  },
  {
    path: '/500',
    name: '500',
    component: () => import('../views/system/500.vue')
  },
  {
    path: '/unknown',
    name: 'unknown',
    component: () => import('../views/system/unknown.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
