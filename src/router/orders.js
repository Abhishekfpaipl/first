
const routes = [
    {
        path: "/orders",
        children: [
            {
                path: 'pending',
                name: 'PendingOrdersPage',
                component: () => import("@/views/order/PendingOrdersPage.vue"),
            },
            {
                path: 'completed',
                name: 'CompletedOrdersPage',
                component: () => import("@/views/order/CompletedOrdersPage.vue"),
            },
            {
                path: "pending/:orderId",
                name: "PendingOrderDetailPage",
                component: () => import('@/views/order/PendingOrderDetailPage.vue'),
            },
            {
                path: "completed-order/:completeId",
                name: "CompletedOrderDetailPage",
                component: () => import('@/views/order/CompletedOrderDetailPage.vue')
            },
        ]
    },


];

export default routes;
