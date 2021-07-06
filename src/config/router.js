
import { createRouter, createWebHistory } from 'vue-router'

import Login from '../components/pages/Login.vue'
import Home from '../components/pages/Home.vue'
import ParamGet from '../components/pages/ParamGet.vue'
import Test from '../components/test/Test.vue'
import NotFound from '../components/pages/NotFound.vue'
import FormP from '../components/pages/FormP.vue'
import Category from '../components/categories/CategoryForm.vue'

// Importamos la tienda
//import store from './store.js';

//const BASE_URL = process.env.BASE_URL
const BASE_URL = 'http://localhost:8080'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/:id',
      name: 'ParamGet',
      component: ParamGet
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/form',
      name: 'FormP',
      component: FormP
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
      //meta: {requireAuth: true}
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/*
router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requireAuth);

  if(rutaProtegida && store.state.token === ''){
    // console.log(store.state.token);
    next({name: 'login'})

  }else{
    next()
  }
})
*/

export default router
