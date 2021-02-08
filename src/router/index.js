import Vue from 'vue'
import VueRouter from 'vue-router'
import Alarm from '../views/Alarm.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Alarm',
    component: Alarm
  },
]

const router = new VueRouter({
  routes
})

export default router
