import { createRouter, createWebHistory } from "vue-router";

import CartRoutes from './cart';
// import ProductsRoute from './products';
import CategoryRoutes from './category';
import ordersRoute from './orders';

import HomeView from "../views/HomeView.vue";
import ProductPage from "../views/ProductPage.vue";
import FeaturedCollections from "../components/FeaturedCollections.vue";
import CollectionPage from "../components/Collection/CollectionPage.vue";
import CollectionGrid from "../components/Collection/CollectionGrid.vue";
import SignupForm from "@/components/Form/SignupForm.vue";


import OrderPage from "../components/Orders/OrderPage.vue";
import TopCart from "@/components/Cart/TopCart.vue";
import TestRoute from "../views/TestRoute.vue";
import T1Select from "@/components/Cart/T1Select.vue";



import CardCatelog from "../components/Catelog/CardCatelog.vue";
import CardCatelog_v1 from "../components/Catelog/CardCatelog_v1.vue";
import CardCatelog_v2 from "../components/Catelog/CardCatelog_v2.vue";
import CardCatelog_v3 from "../components/Catelog/CardCatelog_v3.vue";
import CardCatelog_v4 from "../components/Catelog/CardCatelog_v4.vue";
import CatelogPage from "../components/Catelog/CatelogPage.vue";
import CardCatelogB from "../components/Catelog/CardCatelogB.vue";



import CardColors from "@/components/Catelog/CardColors.vue";
import FavouriteProducts from "@/components/SavedProducts/FavouriteProducts.vue";
import ProductTest from "../views/ProductTest.vue";
import ContactUs from "../views/ContactUs.vue";
import TableTest from '../components/TableTest.vue'
import PremiumOrderNew from '../components/Orders/PremiumOrder/PremiumOrderNew.vue';
import PremiumOrderStatus from '../components/Orders/PremiumOrder/PremiumOrderStatus.vue';
import PremiumOrderAction from '../components/Orders/PremiumOrder/PremiumOrderAction.vue';
import PremiumOrderComing from '../components/Orders/PremiumOrder/PremiumOrderComing.vue';
import PremiumOrderReceived from '../components/Orders/PremiumOrder/PremiumOrderReceived.vue';
import OrdinaryOrderPending from '../components/Orders/OrdinaryOrder/OrdinaryOrderPending.vue';
import OrdinaryOrderApproved from '../components/Orders/OrdinaryOrder/OrdinaryOrderApproved.vue';
import OrdinaryOrderProcessing from '../components/Orders/OrdinaryOrder/OrdinaryOrderProcessing.vue';
import OrdinaryOrderDispatched from '../components/Orders/OrdinaryOrder/OrdinaryOrderDispatched.vue';
import OrdinaryOrderDelivered from '../components/Orders/OrdinaryOrder/OrdinaryOrderDelivered.vue';

import SubCatProduct  from "../components/CategoryNew/SubCatProduct.vue";

import OrderDetail from "@/components/Orders/OrderDetail.vue";
import CartPage1Vue from "@/components/Cart copy/CartPage1.vue";
import CompletedOrderPage from "@/components/Orders/OrdinaryOrder/CompletedOrderPage.vue";
import RefundPolicy from '@/components/Form/RefundPolicy.vue';
import ReturnPolicy from '@/components/Form/ReturnPolicy.vue';
import ShippingPolicy from '@/components/Form/ShippingPolicy.vue';
import PrivacyPolicy from '@/components/Form/PrivacyPolicy.vue';
import TOSPage from '@/components/Form/TOSPage.vue';
import ProductTopnav from "@/components/NavBar/ProductTopnav.vue";
import ProductList  from "@/components/Catelog/ProductList.vue";
import UpdatePage from "@/views/notification/UpdatePage.vue";
import OffersPage from "@/views/notification/OffersPage.vue";
import PromotionPage from "@/views/notification/PromotionPage.vue";
import DefaultPage from "@/views/notification/DefaultPage.vue";
import StepperTest from '@/views/cart/StepperTest.vue';
import SupplierSignUp from '@/components/Form/SupplierSignUp.vue';

const routes = [
  {
    path: "/",
    name: "HomeView",
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
    path: "/ProductPage/:productId",
    name: "ProductPage",
    component: ProductPage,
  },


  {
    path: "/CardCatelog/:categoryId",
    name: "CardCatelog",
    component: CardCatelog,
  },
  {
    path: "/CardCatelogB/:categoryId",
    name: "CardCatelogB",
    component: CardCatelogB,
  },
  {
    path: "/CardCatelog_v1/:categoryId",
    name: "CardCatelog_v1",
    component: CardCatelog_v1,
  },
  {
    path: "/CardCatelog_v2/:categoryId",
    name: "CardCatelog_v2",
    component: CardCatelog_v2,
  },
  {
    path: "/CardCatelog_v3/:categoryId",
    name: "CardCatelog_v3",
    component: CardCatelog_v3,
  },
  {
    path: "/CardCatelog_v4/:categoryId",
    name: "CardCatelog_v4",
    component: CardCatelog_v4,
  },

  {
    path: "/catelog-page",
    name: "catelog-page",
    component: CatelogPage,
  },

 


  {
    path: "/TableTest",
    name: "TableTest",
    component: TableTest,
  },
  {
    path: "/FeaturedCollections",
    name: "FeaturedCollections",
    component: FeaturedCollections,
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
    path: "/CartPage1",
    name: "CartPage1",
    component: CartPage1Vue,
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
    path: "/CardColors",
    name: "CardColors",
    component: CardColors,
  },
  {
    path: "/favourite-products",
    name: "FavouriteProducts",
    component: FavouriteProducts,
  },
  {
    path: "/ProductTest",
    name: "ProductTest",
    component: ProductTest,
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/PremiumOrderNew",
    name: "PremiumOrderNew",
    component: PremiumOrderNew,
  },
  {
    path: "/PremiumOrderStatus",
    name: "PremiumOrderStatus",
    component: PremiumOrderStatus,
  },
  {
    path: "/PremiumOrderAction",
    name: "PremiumOrderAction",
    component: PremiumOrderAction,
  },
  {
    path: "/PremiumOrderComing",
    name: "PremiumOrderComing",
    component: PremiumOrderComing,
  },
  {
    path: "/PremiumOrderReceived",
    name: "PremiumOrderReceived",
    component: PremiumOrderReceived,
  },
  
  {
    path: "/OrdinaryOrderPending",
    name: "OrdinaryOrderPending",
    component: OrdinaryOrderPending,
  },
  {
    path: "/OrdinaryOrderApproved",
    name: "OrdinaryOrderApproved",
    component: OrdinaryOrderApproved,
  },
  {
    path: "/OrdinaryOrderProcessing",
    name: "OrdinaryOrderProcessing",
    component: OrdinaryOrderProcessing,
  },
  {
    path: "/OrdinaryOrderDispatched",
    name: "OrdinaryOrderDispatched",
    component: OrdinaryOrderDispatched,
  },
  {
    path: "/OrdinaryOrderDelivered",
    name: "OrdinaryOrderDelivered",
    component: OrdinaryOrderDelivered,
  },


  {
    path: "/SubCatProduct/:categoryId",
    name: "SubCatProduct",
    component: SubCatProduct,
  },
  {
    path: "/OrderDetail/:orderId",
    name: "OrderDetail",
    component: OrderDetail,
  },
 
  {
    path: "/CompletedOrderPage/:completeId",
    name: "CompletedOrderPage",
    component: CompletedOrderPage,
  },
  {
    path: "/RefundPolicy",
    name: "RefundPolicy",
    component: RefundPolicy,
  },
  {
    path: "/ReturnPolicy",
    name: "ReturnPolicy",
    component: ReturnPolicy,
  },
  {
    path: "/ShippingPolicy",
    name: "ShippingPolicy",
    component: ShippingPolicy,
  },
  {
    path: "/PrivacyPolicy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
  {
    path: "/TOSPage",
    name: "TOSPage",
    component: TOSPage,
  },
  
  {
    path: "/ProductTopnav",
    name: "ProductTopnav",
    component: ProductTopnav,
  },
  {
    path: "/ProductList",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/updatepage",
    name: "updatepage",
    component: UpdatePage,
  },
  {
    path: "/offerpage",
    name: "offerpage",
    component: OffersPage,
  },
  {
    path: "/promotionpage",
    name: "promotionpage",
    component: PromotionPage,
  },
  {
    path: "/defaultpage",
    name: "defaultpage",
    component: DefaultPage,
  },
  {
    path: "/StepperTest",
    name: "StepperTest",
    component: StepperTest,
  },
  {
    path: "/supplier-signup",
    name: "SupplierSignUp",
    component: SupplierSignUp,
  },
  
  ...CartRoutes,
  // ...ProductsRoute,
  ...CategoryRoutes,
  ...ordersRoute,
 

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
