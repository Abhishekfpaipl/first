<template>
    <div class="top-brand d-flex justify-content-between align-items-center container position-sticky top-0 py-2 border-bottom"
        style="z-index: 12; height:63px; ">
        <div class="d-flex align-items-center">
            <router-link to="/checkout/address" class="text-decoration-none text-dark">
                <i class="bi bi-arrow-left fs-5 brand-text" @click="goback()"></i>
            </router-link>
            <p class="mb-0 ms-2 brand-text fs-5" style="font-weight: 500;">Billing Deatils</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DeliveryTopNav',
    methods:{
        goback(){
            window.history.back();
        }
    }
}
</script>

<style lang="scss" scoped></style>