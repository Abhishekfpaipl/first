<template>
    <nav class="navbar fixed-bottom " style="z-index:1;">
        <div class=" position-fixed w-100" style="bottom: 0;">
            <div style="background-color: white;">
                <div class="d-flex justify-content-evenly text-center w-100 border-top borde-light" >
                    <BottomNav v-for="(link, index) in links" :key="index" :link="link"></BottomNav>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import BottomNav from './BottomNav.vue';
export default {
    data() {
        return {
            links: [
                { id: 1, route: "/", name: "HomePage", icon: "bi bi-shop-window fs-5", label: "Home" },
                { id: 2, route: "/categories", name: "CategoryCatalogPage", icon: "bi bi-grid-1x2 fs-5", label: "Category" },
                { id: 3, route: "/favourite-catalogs", name: "FavouriteCatalogs", icon: "bi bi-hearts fs-5", label: "Wishlist" },
                { id: 4, route: "/checkout/cart", name: "CartPage", icon: "bi bi-bag fs-5", label: "Cart" },
                { id: 5, route: "/orders/pending", name: "PendingOrdersPage", icon: "bi bi-archive fs-5", label: "Orders" },
            ],
        };
    },
    components: { BottomNav }
}
</script>

<style lang="scss" scoped>
.items {
    display: flex;
    text-align: center;
}
</style>