<template>
    <div class="container d-flex flex-column align-items-center ps-3 justify-content-center mt-5">
        <p class=" fw-bold fs-5 mb-0">Thank you for your oder.</p>
        <p class="text-center mt-1"> Your oder has been placed, but execution will be start only after the confirmation of
            your payment.</p>
    </div>
    <p class="container ps-3 mt-3 text-center fs-5 fw-bold">Your Order ID is 5426308975</p>
    <div class="container d-flex gap-2 justify-content-center">
        <div class="">
            <p class="mb-0">Total Catalogs :</p>
            <p class="mb-0">No. of Pieces :</p>
            <p class="mb-0">Total Amount :</p>
        </div>
        <div class="">
            <p class="mb-0">2 Catalogs</p>
            <p class="mb-0">220 Pcs</p>
            <p class="mb-0">₹ 2,88,000</p>
        </div>
    </div>
    <router-link to="/orders/pending/1" class="container text-decoration-none d-flex justify-content-center mt-4">
        <button class="btn top-brand fs-4 w-100 ">Proceed For Payment</button>
    </router-link>


    <div class="container d-flex justify-content-between border p-2 mt-5">
        <label for="delivery" class="ms-2">Click here if you want to pay later</label>
        <input type="checkbox" id="delivery" v-model="show" checked>
    </div>
    <div v-if="show">
        <div class="container d-flex flex-column align-items-center ps-3 justify-content-center mt-3">
            <p class=" fw-bold fs-5 mb-0">Recommended</p>
            <p class="text-center mt-1">This option is recommended only if you want to continue for shopping. And payment
                for the order will be make later.</p>
        </div>
        <router-link to="/" class="container text-decoration-none d-flex justify-content-center mt-2">
            <button class="btn w-100 btn-outline-danger w-100" style="opacity: 80%;">Continue For Shopping & Pay Later</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CheckoutConfirm',
    data() {
        return {
            show: false
        }
    }
}
</script>

<style lang="scss" scoped></style>