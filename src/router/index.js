import { createRouter, createWebHistory } from 'vue-router'
import TestView from '@/views/TestView.vue'
import RoulesView from '@/views/RoulesView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: '/roules',
    component: TestView
  },
  {
    path: '/test',
    name: 'test',
    // redirect: '/roules',
    component: TestView
  },
  {
    path: '/roules',
    name: 'roules',
    component: RoulesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
