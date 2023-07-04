
const routes = [
      {
        path: "/categories",
        name: "categories",
        component:() => import("@/components/CategoryNew/CategoryNew.vue"),
        children:[
            // {
            //     path:'special-prices',
            //     name:'special-prices',
            //     component: () => import("@/components/Catelog/")
            // }
        ]
      },
      
    ];
    
    export default routes;