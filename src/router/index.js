import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TableCustomPaginatorView from '../views/TableCustomPaginatorView.vue'
//import ImagePreviewView from '../views/ImagePreviewView.vue'
import TransitionsView from '../views/TransitionsView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/table-custom-paginator',
    name: 'tablecustompaginator',
    component: TableCustomPaginatorView
  },
  // {
  //   path: '/image-preview',
  //   name: 'imagepreview',
  //   component: ImagePreviewView
  // },
  {
    path: '/transitions',
    name: 'transitions',
    component: TransitionsView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
