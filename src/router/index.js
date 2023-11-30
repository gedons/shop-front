import { createRouter, createWebHistory } from "vue-router";
import store from '../store';

import Index from '../views/Index.vue';
import Login from '../views/Login.vue';
import UserLogin from '../views/UserLogin.vue';
import Register from '../views/Register.vue';

import UserAccount from '../views/User/UserAccount.vue';
import UserProducts from '../views/Products.vue';
import ProductDetails from '../views/ProductDetails.vue';
import Terms from '../views/Terms.vue';
import Contact from '../views/Contact.vue';

import Dashboard from '../views/Admin/Dashboard.vue';
import Categories from '../views/Admin/Categories.vue';
import AddCategory from '../views/Admin/AddCategory.vue';
import Products from '../views/Admin/Products.vue';
import AddProduct from '../views/Admin/AddProduct.vue';
import Orders from '../views/Admin/Orders.vue';
import Customers from '../views/Admin/Customers.vue';
import CustomerOrder from '../views/Admin/CustomerOrder.vue';
import Settings from '../views/Admin/Settings.vue';

 

const routes = [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/admin/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/login',
      name: 'UserLogin',
      component: UserLogin,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },

    //user front routes
    { path: "/products", name: "UserProducts", component: UserProducts }, 
    { path: "/product/:id/:productName", name: "ProductDetails", component: ProductDetails },  
    { path: "/terms", name: "Terms", component: Terms },  
    { path: "/contact", name: "Contact", component: Contact },  
    {
      path: '/user/account',
      name: 'UserAccount',
      component: UserAccount,
      meta: {
        requiresAuth: true,  
        isUser: true, 
      },
    },

    //end user routes



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
    { path: "/admin/categories", name: "Categories", component: Categories, meta: { requiresAuth: true, isAdmin: true, }, },  
    { path: "/admin/category/:id", name: "CategoryEdit",  meta: { requiresAuth: true, isAdmin: true, }, },  
    { path: "/admin/category/newcategory", name: "AddCategory", component: AddCategory, meta: { requiresAuth: true, isAdmin: true, }, },    

    //products
    { path: "/admin/products", name: "Products", component: Products, meta: { requiresAuth: true, isAdmin: true, }, },  
    { path: "/admin/products/:id", name: "ProductEdit",  meta: { requiresAuth: true, isAdmin: true, }, },  
    { path: "/admin/product/newproduct", name: "AddProduct", component: AddProduct, meta: { requiresAuth: true, isAdmin: true, }, },    

    //admin order
    { path: "/admin/orders", name: "Orders", component: Orders, meta: { requiresAuth: true, isAdmin: true, }, },  

    //admin customers
    { path: "/admin/customers", name: "Customers", component: Customers, meta: { requiresAuth: true, isAdmin: true, }, }, 
    { path: "/admin/:userId/orders", name: "CustomerOrder", component: CustomerOrder, meta: { requiresAuth: true, isAdmin: true, }, },  

    //admin settings
    { path: "/admin/settings", name: "Settings", component: Settings, meta: { requiresAuth: true, isAdmin: true, }, },
    //end admin routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAdminLoggedIn = store.getters['isAdminAuthenticated'];
  const isUserLoggedIn = store.getters['isUserAuthenticated'];

  const isAdminRoute = to.matched.some((record) => record.meta.isAdmin);
  const isUserRoute = to.matched.some((record) => record.meta.isUser);

  if (isAdminRoute && !isAdminLoggedIn) {
    // Redirect if admin route and not logged in as admin
    next('/admin/login');
  } else if (isUserRoute && !isUserLoggedIn) {
    // Redirect if user route and not logged in as user
    next('/login');
  } else {
    next(); // Proceed to the route
  }
});


export default router;