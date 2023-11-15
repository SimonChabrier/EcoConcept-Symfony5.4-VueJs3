import { createRouter, createWebHashHistory } from 'vue-router'
import HomeTpl from '@/views/HomeTpl.vue'
import ArticleTpl from '@/views/ArticleTpl.vue'
import error404 from '@/views/404Tpl.vue'
import ApiTpl from '@/views/ApiTpl.vue'
import ApiIdTpl from '@/views/ApiIdTpl.vue'

// Home page => voir la résolution des liens dans le controller HomeController de Symfony
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeTpl,
    meta: {
      scrollPos: {
        scrollReset,
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
        scrollReset,
      },
    },
  },
  {
    path: '/post/:id?',
    name: 'post_id',
    component: ApiIdTpl,
    meta: {
      scrollPos: {
        scrollReset,
      },
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: error404
  }
]

// position de la page par défaut
const scrollReset = {
  top: 0,
  left: 0,
};
// retour au top si la page est la même (ex: changement de paramètre)
const scrollBehavior = (to, from, savedPosition) => {
  if (to.name === from.name) {
      to.meta?.scrollPos && (to.meta.scrollPos.top = 0)
      return { left: 0, top: 0 }
  }
// sinon on retourne à la position sauvegardée
const scrollpos = savedPosition || to.meta?.scrollPos || { left: 0, top: 0 }
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(scrollpos)
      }, 250) // transition au bout de 250ms pour que la transition de glissé soit terminée
  })
}
// création du router avec les routes définies ci-dessus
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior,
})
// on sauvegarde la position de la page avant de changer de route
router.beforeEach((to, from, next) => {
  from.meta?.scrollPos && (from.meta.scrollPos.top = window.scrollY)
  return next()
})

export default router