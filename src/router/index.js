import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainDashboard',
      component: () => import('@/views/MainDashboard.vue'),
    },
    {
      path: '/region/:id',
      name: 'RegionDashboard',
      component: () => import('@/views/RegionDashboard.vue'),
    },
  ],
})

export default router
