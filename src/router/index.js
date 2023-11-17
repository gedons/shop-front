import { createRouter, createWebHistory } from "vue-router";

import Index from '../views/Index.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Admin/Dashboard.vue';
import store from '../store';

 

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

router.beforeEach((to, from, next) => {
    const isLoggedIn = store.getters['isAdminAuthenticated']; // Check if admin is logged in
    const isAdminRoute = to.matched.some((record) => record.meta.isAdmin);
  
    if (isAdminRoute && !isLoggedIn) {
      // If trying to access admin route and not authenticated as admin, redirect to login
      next('/login');
    } else {
      next(); // Proceed to the route
    }
  });


export default router;