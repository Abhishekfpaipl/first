<template>
    <div class="top-brand d-flex position-sticky top-0 p-2 border-bottom"
        style="z-index: 12; height:63px; ">
        <div class="d-flex align-items-center">
            <i class="bi bi-arrow-left fs-4 brand-text" @click=" goback()"></i>
            <p class=" ms-2 mb-0 fs-5 brand-text" style=" font-weight: 500;">Delivery Details</p>
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
