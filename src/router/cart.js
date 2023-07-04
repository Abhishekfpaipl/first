
const routes = [
//   {
//     path: "/cart",
//     name: "Cart",
//     component:() => import("../views/cart/CartStepper.vue"),
//   },
  {
    path: "/checkout",
    children:[
      {
        path:'cart',
        name: "CheckoutCart",
        component:() => import("../views/cart/CartStepper.vue"),
      },
      {
        path:'address',
        name: "CheckoutAddress",
        component:() => import("../views/cart/CheckoutAddress.vue"),
      },
      {
        path:'delivery',
        name: "CheckoutDelivery",
        component: () => import("../views/cart/CheckoutDelivery.vue"),
      },
      {
        path:'confirm',
        name: "CheckoutConfirm",
        component: () => import("../views/cart/CheckoutConfirm.vue"),
      },
    ]
  },
];

export default routes;