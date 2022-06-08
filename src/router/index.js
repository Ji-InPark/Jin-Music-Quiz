import {createWebHistory, createRouter} from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/home-page')
  },
  {
    path: '/quiz'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router