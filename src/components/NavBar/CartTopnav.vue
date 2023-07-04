<template>
    <div class="d-flex justify-content-between align-items-center container position-sticky top-0 bg-light py-2"
        style="z-index: 12; height:63px; box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;">
        <div class="">
            <!-- <router-link to="/" class="text-decoration-none text-dark"> -->
                <i class="bi bi-arrow-left fs-4" @click="goBack()"></i>
            <!-- </router-link> -->
            <span class="fs-4 ms-2" style="font-size: 16px; font-weight: 500;">My Cart</span>
        </div>
        <div class="">
            <router-link to="/favourite-products" class="text-decoration-none text-dark">
                <i class="bi bi-heart fs-4"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartTopnav',
    methods: {
        goBack() {
            window.history.back();
        }
    }
}
</script>
