import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _355918b4 = () => interopDefault(import('..\\pages\\directores_index.vue' /* webpackChunkName: "pages/directores_index" */))
const _b47fc9dc = () => interopDefault(import('..\\pages\\estudios_index.vue' /* webpackChunkName: "pages/estudios_index" */))
const _33e3f714 = () => interopDefault(import('..\\pages\\peliculas_index.vue' /* webpackChunkName: "pages/peliculas_index" */))
const _25bfe2f9 = () => interopDefault(import('..\\pages\\directores\\_slug.vue' /* webpackChunkName: "pages/directores/_slug" */))
const _7b8da74a = () => interopDefault(import('..\\pages\\estudios\\_slug.vue' /* webpackChunkName: "pages/estudios/_slug" */))
const _e8af2112 = () => interopDefault(import('..\\pages\\peliculas\\_slug.vue' /* webpackChunkName: "pages/peliculas/_slug" */))
const _6334e6bb = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/directores_index",
    component: _355918b4,
    name: "directores_index"
  }, {
    path: "/estudios_index",
    component: _b47fc9dc,
    name: "estudios_index"
  }, {
    path: "/peliculas_index",
    component: _33e3f714,
    name: "peliculas_index"
  }, {
    path: "/directores/:slug?",
    component: _25bfe2f9,
    name: "directores-slug"
  }, {
    path: "/estudios/:slug?",
    component: _7b8da74a,
    name: "estudios-slug"
  }, {
    path: "/peliculas/:slug?",
    component: _e8af2112,
    name: "peliculas-slug"
  }, {
    path: "/",
    component: _6334e6bb,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
