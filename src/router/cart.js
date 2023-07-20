
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
        path:'billing_address',
        name: "BillingAddress",
        component: () => import("../views/cart/BillingAddress.vue"),
      },
      {
      path:'delivery_address',
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
  {
    path:'/catalog-edit/:productId',
    name:'CatalogEditPage',
    component:()=> import('../views/cart/CatalogEditPage.vue')

  }
];

export default routes;