import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import { createDiscreteApi } from 'naive-ui'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/Home.vue')
        },
        {
          path: 'Information',
          name: 'Information',
          component: () => import('../views/information/Information.vue')
        },
        {
          path: 'Information/article/:id',
          name: 'ArticleDetail',
          component: () => import('../views/information/ArticleDetail.vue')
        },
        {
          path: 'application',
          name: 'application',
          component: () => import('../views/Application.vue')
        },
        {
          path: 'admin/articles',
          name: 'admin-articles',
          component: () => import('../views/admin/Articles.vue')
        },
        {
          path: 'admin/permissions',
          name: 'admin-permissions',
          component: () => import('../views/admin/Permissions.vue')
        },
        {
          path: 'admin/apps',
          name: 'admin-apps',
          component: () => import('../views/admin/AppManagement.vue'),
          meta: {
            title: '應用程式管理',
            requiresAuth: true,
            roles: ['admin']
          }
        }
      ]
    }
  ]
})

// 創建離散的 API 實例
const { loadingBar } = createDiscreteApi(['loadingBar'])

// 全局前置守衛
router.beforeEach((to, from, next) => {
  loadingBar.start()
  next()
})

// 全局後置守衛
router.afterEach(() => {
  loadingBar.finish()
})

// 全局錯誤處理
router.onError(() => {
  loadingBar.error()
})

export default router
