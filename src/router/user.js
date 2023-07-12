
const routes = [
  {
    path: "/update-page",
    name: "update-page",
    component: () => import('@/views/notification/UpdatePage.vue')
  },
  {
    path: "/promotion-page",
    name: "promotion-page",
    component: () => import('@/views/notification/PromotionPage.vue')
  },
  {
    path: "/profile-page",
    name: "ProfilePage",
    component: () => import('@/views/notification/ProfilePage.vue')
  },
];

export default routes;