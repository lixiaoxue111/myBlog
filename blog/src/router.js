import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AboutMe from './views/AboutMe.vue'
import Article from './views/Article'
import Bookstore from './views/Bookstore'
import Demo from './views/Demo'
import InformalEssay from './views/InformalEssay'
import Message from './views/Message'
import TreeHole from './views/TreeHole'
import Aside from './components/Aside'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path:'/',
          redirect:'/home'
      },
    {
      path: '/home',
      name: 'home',
      component:Home
    },
      {
          path: '/aboutme',
          name: 'aboutme',
          component: AboutMe
      },
      {
          path: '/article',
          name: 'article',
          component: Article
      },
      {
          path: '/bookstore',
          name: 'bookstore',
          component: Bookstore
      },
      {
          path: '/demo',
          name: 'demo',
          component: Demo
      },
      {
          path: '/informalEssay',
          name: 'informalEssay',
          component: InformalEssay
      },
      {
          path: '/message',
          name: 'message',
          component: Message
      },
      {
          path: '/treehole',
          name: 'treehole',
          component: TreeHole
      },

  ]
})
