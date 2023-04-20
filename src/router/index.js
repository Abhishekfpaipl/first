import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductPage from "../views/ProductPage.vue";
import ProductRating from "../components/ProductRating.vue";
import OfferBar from "../components/OfferBar.vue";
import FeaturedCollections from "../components/FeaturedCollections.vue";
import LastView from "@/components/LastView.vue";
import ProductPagess from "@/components/ProductPagess.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/ProductPage",
    name: "ProductPage",
    component: ProductPage,
  },
  {
    path: "/ProductPagess",
    name: "ProductPagess",
    component: ProductPagess,
  },
  {
    path: "/ProductRating",
    name: "ProductRating",
    component: ProductRating,
  },
  {
    path: "/OfferBar",
    name: "OfferBar",
    component: OfferBar,
  },
  {
    path: "/FeaturedCollections",
    name: "FeaturedCollections",
    component: FeaturedCollections,
  },
  {
    path: "/LastView",
    name: "LastView",
    component: LastView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
