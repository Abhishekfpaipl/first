
const routes = [
  {
    path: "/checkout",
    children:[
      {
        path:'cart',
        name: "CartPage",
        component:() => import("../views/cart/CartPage.vue"),
      },
      {
        path:'delivery_payment',
        name: "DeliveryAndPaymentMode",
        component: () => import("../views/cart/DeliveryAndPaymentMode.vue"),
      },
      {
      path:'address',
        name: "DeliveryAddress",
        component:() => import("../views/cart/DeliveryAddress.vue"),
      },
      {
        path:'confirm',
        name: "OrderConfirm",
        component: () => import("../views/cart/OrderConfirm.vue"),
      },
    ]
  },
];

export default routes;