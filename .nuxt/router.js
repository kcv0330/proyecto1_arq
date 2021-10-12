import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _31b729f4 = () => interopDefault(import('..\\pages\\directores_index.vue' /* webpackChunkName: "pages/directores_index" */))
const _ae1d075c = () => interopDefault(import('..\\pages\\estudios_index.vue' /* webpackChunkName: "pages/estudios_index" */))
const _4908cb36 = () => interopDefault(import('..\\pages\\peliculas_index.vue' /* webpackChunkName: "pages/peliculas_index" */))
const _95b80c8e = () => interopDefault(import('..\\pages\\directores\\_slug.vue' /* webpackChunkName: "pages/directores/_slug" */))
const _2533f31b = () => interopDefault(import('..\\pages\\estudios\\_slug.vue' /* webpackChunkName: "pages/estudios/_slug" */))
const _eff2fe92 = () => interopDefault(import('..\\pages\\peliculas\\_slug.vue' /* webpackChunkName: "pages/peliculas/_slug" */))
const _0cf51d7b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _31b729f4,
    name: "directores_index"
  }, {
    path: "/estudios_index",
    component: _ae1d075c,
    name: "estudios_index"
  }, {
    path: "/peliculas_index",
    component: _4908cb36,
    name: "peliculas_index"
  }, {
    path: "/directores/:slug?",
    component: _95b80c8e,
    name: "directores-slug"
  }, {
    path: "/estudios/:slug?",
    component: _2533f31b,
    name: "estudios-slug"
  }, {
    path: "/peliculas/:slug?",
    component: _eff2fe92,
    name: "peliculas-slug"
  }, {
    path: "/",
    component: _0cf51d7b,
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
