import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Specimens from '../pages/Specimens.vue'
import Gallery from '../pages/Gallery.vue'
import References from '../pages/References.vue'
import About from '../pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/specimens', component: Specimens },
  { path: '/gallery', component: Gallery },
  { path: '/References', component:  References },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
