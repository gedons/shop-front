import { createRouter, createWebHistory } from "vue-router";
import store from '../store';

import Index from '../views/Index.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

import Dashboard from '../views/Admin/Dashboard.vue';

import Categories from '../views/Admin/Categories.vue';
import AddCategory from '../views/Admin/AddCategory.vue';

import Products from '../views/Admin/Products.vue';
import AddProduct from '../views/Admin/AddProduct.vue';



 

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
    //admin routes
    {
      path: '/admin/dashboard',
      name: 'Dashboard',
      component: Dashboard,      
      meta: {
        requiresAuth: true,
        isAdmin: true,
      },
    },

    //category
    { path: "/admin/category", name: "Categories", component: Categories, meta: { requiresAuth: true, isAdmin: true, }, },  
    { path: "/admin/product/newcategory", name: "AddCategory", component: AddCategory, meta: { requiresAuth: true, isAdmin: true, }, },    

    //products
    { path: "/admin/products", name: "Products", component: Products, meta: { requiresAuth: true, isAdmin: true, }, },  
    { path: "/admin/product/newproduct", name: "AddProduct", component: AddProduct, meta: { requiresAuth: true, isAdmin: true, }, },    

    //end admin routes
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