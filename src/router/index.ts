import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import BaseLayout from '@/views/BaseLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tradings'
  },
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: '',
        redirect: '/tradings'
      },
      {
        name: 'home-view',
        path: 'home',
        component: () => import('@/views/HomeView.vue')
      },
      {
        name: 'tradings-view',
        path: 'tradings',
        component: () => import('@/views/TradingsView.vue')
      },
      {
        name: 'investiments-view',
        path: 'investiments',
        component: () => import('@/views/InvestimentsView.vue')
      },
      {
        name: 'tools-view',
        path: 'tools',
        component: () => import('@/views/ToolsView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
