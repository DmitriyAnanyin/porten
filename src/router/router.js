import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../components/pages/HomePage'
import SearchPage from '../components/pages/SearchPage'
import LikePage from '../components/pages/LikePage'
import ProfilePage from '../components/pages/ProfilePage'
import Brand from '../components/pages/Brand'
import Article from '../components/pages/Article'
import CreateProduct from '../components/pages/CreateProduct'

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/search',
      name: 'search_page',
      component: SearchPage,
      props: true
    },
    {
      path: '/like',
      name: 'like_page',
      component: LikePage,
      props: true
    },
    {
      path: '/profile',
      name: 'profile_page',
      component: ProfilePage
    },
    {
      path: '/brand',
      name: 'brand_page',
      component: Brand
    },
    {
      path: '/article',
      name: 'article_page',
      component: Article
    },
    {
      path: '/create_product',
      name: 'create_product',
      component: CreateProduct
    }
  ]
})

export default router;