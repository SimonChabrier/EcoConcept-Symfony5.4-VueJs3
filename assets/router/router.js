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
    meta: {
      scrollPos: {
        top: 0,
        left: 0,
      },
    },
  },
  {
    path: '/article',
    name: 'article',
    component: ArticleTpl
  },
  {
    path: '/api',
    name: 'api',
    component: ApiTpl,
    meta: {
      scrollPos: {
        top: 0,
        left: 0,
      },
    },
  },
  {
    path: '/post/:id?',
    name: 'post_id',
    component: ApiIdTpl,
    meta: {
      scrollPos: {
        top: 0,
        left: 0,
      },
    },

  },

 //404 page
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: error404
  }
]

const scrollBehavior = (to, from, savedPosition) => {
  // retour au top si la page est la même (ex: changement de paramètre)
  if (to.name === from.name) {
      to.meta?.scrollPos && (to.meta.scrollPos.top = 0)
      return { left: 0, top: 0 }
  }
  // sinon on retourne à la position sauvegardée
  const scrollpos = savedPosition || to.meta?.scrollPos || { left: 0, top: 0 }
  
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(scrollpos)
      }, 250) // transition au bout de 250mx pour que la transition de glissé soit terminée
  })
}


const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior,
})

router.beforeEach((to, from, next) => {
  // console.log('window.scrollY:', window.scrollY)
  from.meta?.scrollPos && (from.meta.scrollPos.top = window.scrollY)
  // console.log('from:\t', from.name, '\t', from.meta?.scrollPos)
  // console.log('to:\t\t', to.name, '\t', to.meta?.scrollPos)
  return next()
})



export default router