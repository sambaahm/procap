
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: () => import( '../views/User.vue')
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import( '../views/Notifications.vue')
  },
  {
    path: '/parameters',
    name: 'Parameters',
    component: () => import( '../views/Parameters.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/',
        name: 'signup',
        component: () => import('../components/Signup.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/Login.vue')
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('../components/ForgotPassword.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router
