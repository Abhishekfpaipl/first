
const routes = [
    {
      path: "/orders",
      children:[
          {
              path:'running',
              name:'orders-running',
              component:() => import("@/components/Orders/OrdinaryOrder/RunningOrders.vue"),
          },
          {
              path:'completed',
              name:'orders-completed',
              component:() => import("@/components/Orders/OrdinaryOrder/CompletedOrders.vue"),
          }
      ]
    },
   
    
  ];
  
  export default routes;