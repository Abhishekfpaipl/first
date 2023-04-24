import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductPage from "../views/ProductPage.vue";
import ProductRating from "../components/ProductRating.vue";
import OfferBar from "../components/OfferBar.vue";
import FeaturedCollections from "../components/FeaturedCollections.vue";
import LastView from "@/components/LastView.vue";
import ProductPagess from "@/components/ProductPagess.vue";
import CollectionPage from "../components/Collection/CollectionPage.vue";
import CollectionGrid from "../components/Collection/CollectionGrid.vue";
import SignupForm from "@/components/Form/SignupForm.vue";
import CartPage from "@/components/Cart/CartPage.vue";
import OrderPage from "../components/Orders/OrderPage.vue";
import TopCart from "@/components/Cart/TopCart.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/color",
    name: "color",
    component: () => import("../views/ColorC.vue"),
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
  {
    path: "/CollectionPage",
    name: "CollectionPage",
    component: CollectionPage,
  },
  {
    path: "/CollectionGrid",
    name: "CollectionGrid",
    component: CollectionGrid,
  },
  {
    path: "/SignupForm",
    name: "SignupForm",
    component: SignupForm,
  },
  {
    path: "/CartPage",
    name: "CartPage",
    component: CartPage,
  },
  {
    path: "/OrderPage",
    name: "OrderPage",
    component: OrderPage,
  },
  {
    path: "/TopCart",
    name: "TopCart",
    component: TopCart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
