import Vue from 'vue'
import VueRouter from 'vue-router'
import Pullrefresh from '../components/Pullrefresh.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pullrefresh',
    component: Pullrefresh
  },
]

const router = new VueRouter({
  routes
})

export default router
