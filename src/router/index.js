import { createRouter, createWebHistory } from 'vue-router'
import BooksList from '../Components/BooksList.vue'
import BookForm from '../Components/BookForm.vue'
import BooksCart from '../Components/BooksCart.vue'
import AppAbout from '../Components/AppAbout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BooksList
    },
    {
      path: '/create',
      name: 'create',
      component: BookForm
    },
    {
      path: '/edit/:id', 
      name: 'edit',
      component: BookForm,
      props: true
    },
    {
      path: '/cart',
      name: 'cart',
      component: BooksCart
    },
    {
      path: '/about',
      name: 'about',
      component: AppAbout
    }
  ]
})

export default router