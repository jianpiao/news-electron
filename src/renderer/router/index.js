import Vue from 'vue'
import Router from 'vue-router'

import newsView from '../components/NewsView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path:'/newsView',
      component:　newsView
    }
  ]
})
