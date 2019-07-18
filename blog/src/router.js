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
import Cicle from './components/cicle'

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
        /*components:{
            default:Home,
            'aside':Aside
        }*/
    },
      {
          path: '/aboutme',
          name: 'aboutme',
          component: AboutMe
         /* components:{
              default:AboutMe,
              'aside':Aside
          }*/
      },
      {
          path: '/article',
          name: 'article',
          component: Article
          /*components:{
              default:Article,
              'aside':Aside
          }*/
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
          /*components:{
              default:TreeHole,
              'aside':Aside
          }*/
      },
      {
          path:'/cicle',
          component:Cicle
      }

  ]
})
