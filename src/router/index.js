import {createRouter, createWebHashHistory} from 'vue-router';

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
    path: '/quiz',
    name: 'quiz-page',
    component: () => import('../views/quiz-page'),
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router