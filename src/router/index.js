import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ServicesView from '../views/ServicesView.vue'
import BillingSoftware from '../views/BillingSoftware.vue'
import ContactUs from '../views/ContactUs.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component:ProductsView
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/billing',
    name: 'billing',
    component: BillingSoftware
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactUs
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line no-undef
  scrollBehavior(to , from ,savedPosition ){
    if(savedPosition){
      return savedPosition
    }else{
      return {x:0 , y:0}
    }
  }
})

export default router
