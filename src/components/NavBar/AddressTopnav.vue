<template>
    <div class="d-flex justify-content-between align-items-center container position-sticky top-0 bg-light py-2"
        style="z-index: 12; height:63px; ">
        <div class="">
            <i class="bi bi-arrow-left fs-4" @click=" goback()"></i>
            <span class=" ms-2 text-uppercase" style="font-size: 16px; font-weight: 500;">select  address</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddressTopnav',
    methods: {
        goback() {
            window.history.back();
        }
    }
}
</script>

<style lang="scss" scoped></style>