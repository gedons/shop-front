import { createRouter, createWebHistory } from "vue-router";
 

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue"),
  },
//   {
//     path: "/login",
//     name: "Login",
//     component: () => import("../views/Login.vue"),
//   },
//   {
//     path: "/accountMode",
//     name: "AccountMode",
//     component: () => import("../views/AccountMode.vue"),
//   },

  // Other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;