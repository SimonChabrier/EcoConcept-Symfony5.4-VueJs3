import { createRouter, createWebHashHistory } from 'vue-router'


import HomeTpl from '@/views/HomeTpl.vue'
import ArticleTpl from '@/views/ArticleTpl.vue'
import error404 from '@/views/404Tpl.vue'
import ApiTpl from '@/views/ApiTpl.vue'
import ApiIdTpl from '@/views/ApiIdTpl.vue'

const routes = [
  // Home page => voir la résolution des liens dans le controller HomeController de Symfony
 
  {
    path: '/',
    name: 'home',
    component: HomeTpl,
  },
  {
    path: '/article',
    name: 'article',
    component: ArticleTpl
  },
  {
    path: '/api',
    name: 'api',
    component: ApiTpl
  },
  {
    path: '/post/:id?',
    name: 'post_id',
    component: ApiIdTpl,
    
  },

 //404 page
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: error404
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router