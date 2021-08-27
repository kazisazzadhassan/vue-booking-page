import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from '@/layout/DefaultLayout'
import Home from '@/views/app/Home.vue'

import DashboardLayout from '@/layout/DashboardLayout'
import Dashboard from '@/views/dashboard/Dashboard'
import Reservation from '@/views/dashboard/Reservation'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DefaultLayout',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/dashboard/',
    name: 'DashboardLayout',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'reservation',
        name: 'Reservation',
        component: Reservation
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
