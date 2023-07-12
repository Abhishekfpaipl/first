
const routes = [
    {
        path: "/refund-policy",
        name: "RefundPolicy",
        component: () => import('@/views/Form/RefundPolicy.vue')
    },
    {
        path: "/return-policy",
        name: "ReturnPolicy",
        component: () => import('@/views/Form/ReturnPolicy.vue')
    },
    {
        path: "/shipping-policy",
        name: "ShippingPolicy",
        component: () => import('@/views/Form/ShippingPolicy.vue')
    },
    {
        path: "/privacy-policy",
        name: "PrivacyPolicy",
        component: () => import('@/views/Form/PrivacyPolicy.vue')
    },
    {
        path: "/term-&-condition",
        name: "TOSPage",
        component: () => import('@/views/Form/TOSPage.vue')
    },
    {
        path: "/contact-us",
        name: "ContactUs",
        component: () => import('@/views/Form/ContactUs.vue')
      },
];

export default routes;