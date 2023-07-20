<template>
    <div class="top-brand d-flex justify-content-between align-items-center container position-sticky top-0 py-2 border-bottom"
        style="z-index: 12; height:63px; ">
        <div class="d-flex">
            <i class="bi bi-arrow-left fs-5 brand-text" @click="goBack()"></i>
            <p class="fs-4 mb-0 ms-2 brand-text" style="font-size: 16px; font-weight: 500;">My Cart</p>
        </div>
        <div class="">
            <router-link to="/favourite-catalogs" class="text-decoration-none text-dark">
                <i class="bi bi-hearts fs-1 brand-text"></i>
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
