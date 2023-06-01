import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductPage from "../views/ProductPage.vue";
// import ProductRating from "../components/ProductRating.vue";
// import OfferBar from "../components/OfferBar.vue";
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
import ScrollTest from '../components/ScrollTest.vue';
import ChatG from '../components/ChatG.vue';
import ContactUs from "../views/ContactUs.vue";
import ChangeIcon from "../views/ChangeIcon.vue";
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
import AddressPage from "@/components/Cart copy/AddressPage.vue";
import PaymentPage from "@/components/Cart copy/PaymentPage.vue";
import SuccessPage from "@/components/Cart copy/SuccessPage.vue";
import SimpleStepper1 from "@/components/Cart copy/SimpleStepper1.vue";
import SimpleStepper2 from "@/components/Cart copy/SimpleStepper2.vue";
import SimpleStepper3 from "@/components/Cart copy/SimpleStepper3.vue";
import SimpleStepper4 from "@/components/Cart copy/SimpleStepper4.vue";
import SubCatProduct  from "../components/CategoryNew/SubCatProduct.vue";


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
    path: "/TableTest",
    name: "TableTest",
    component: TableTest,
  },
  // {
  //   path: "/ProductRating",
  //   name: "ProductRating",
  //   component: ProductRating,
  // },
  // {
  //   path: "/OfferBar",
  //   name: "OfferBar",
  //   component: OfferBar,
  // },
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
  {
    path: "/ChatG",
    name: "ChatG",
    component: ChatG,
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/ChangeIcon",
    name: "ChangeIcon",
    component: ChangeIcon,
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
    path: "/AddressPage",
    name: "AddressPage",
    component: AddressPage,
  },
  {
    path: "/PaymentPage",
    name: "PaymentPage",
    component: PaymentPage,
  },
  {
    path: "/SuccessPage",
    name: "SuccessPage",
    component: SuccessPage,
  },
  {
    path: "/SimpleStepper1",
    name: "SimpleStepper1",
    component: SimpleStepper1,
  },
  {
    path: "/SimpleStepper2",
    name: "SimpleStepper2",
    component: SimpleStepper2,
  },
  {
    path: "/SimpleStepper3",
    name: "SimpleStepper3",
    component: SimpleStepper3,
  },
 
  {
    path: "/SimpleStepper4",
    name: "SimpleStepper4",
    component: SimpleStepper4,
  },
  {
    path: "/SubCatProduct/:categoryId",
    name: "SubCatProduct",
    component: SubCatProduct,
  },
  
 

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
