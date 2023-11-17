import { createRouter, createWebHistory } from "vue-router";

import Index from '../views/Index.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Admin/Dashboard.vue';

 

const routes = [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/admin/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      // Add meta fields for admin routes if needed (e.g., requiresAuth: true for authentication)
      meta: {
        requiresAuth: true,
        isAdmin: true,
      },
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;