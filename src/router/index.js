import { createRouter, createWebHistory } from "vue-router";

import CartRoutes from './cart';
import ordersRoute from './orders';
import HomePage from "../views/HomePage.vue";
import catalogRoutes from './catalog';
import userRoutes from './user';
import staticRoutes from './static';
import authRoutes from './auth';

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  
 

  ...CartRoutes,
  ...ordersRoute,
  ...catalogRoutes,
  ...userRoutes,
  ...staticRoutes,
  ...authRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
