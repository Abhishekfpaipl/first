import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductPage from "../views/ProductPage.vue";
import ProductRating from "../components/ProductRating.vue";
import OfferBar from "../components/OfferBar.vue";
import FeaturedCollections from "../components/FeaturedCollections.vue";
import LastView from "@/components/LastView.vue";
import CollectionPage from "../components/Collection/CollectionPage.vue";
import CollectionGrid from "../components/Collection/CollectionGrid.vue";
import SignupForm from "@/components/Form/SignupForm.vue";
import CartPage from "@/components/Cart/CartPage.vue";
import OrderPage from "../components/Orders/OrderPage.vue";
import TopCart from "@/components/Cart/TopCart.vue";
import TestRoute from "../views/TestRoute.vue";
import T1Select from "@/components/Cart/T1Select.vue";
import CardCatelog from "../components/Catelog/CardCatelog.vue";
import CardColors from "@/components/Catelog/CardColors.vue";
import SavedProduct from "@/components/SavedProducts/SavedProduct.vue";
import ProductTest from "../views/ProductTest.vue";
import FavProduct from "@/components/FavProduct.vue";
import CategoryNew from "@/components/CategoryNew/CategoryNew.vue";
import ScrollTest from '../components/ScrollTest.vue'
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
  {
    path: "/TestRoute",
    name: "TestRoute",
    component: TestRoute,
  },
  {
    path: "/T1Select",
    name: "T1Select",
    component: T1Select,
  },
  {
    path: "/CardCatelog",
    name: "CardCatelog",
    component: CardCatelog,
  },
  {
    path: "/CardColors",
    name: "CardColors",
    component: CardColors,
  },
  {
    path: "/SavedProduct",
    name: "SavedProduct",
    component: SavedProduct,
  },
  {
    path: "/ProductTest",
    name: "ProductTest",
    component: ProductTest,
  },
  {
    path: "/FavProduct",
    name: "FavProduct",
    component: FavProduct,
  },
  {
    path: "/CategoryNew",
    name: "CategoryNew",
    component: CategoryNew,
  },
  {
    path: "/ScrollTest",
    name: "ScrollTest",
    component: ScrollTest,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
