<template>
    <div>
        <nav class="navbar fixed-bottom navbar-light" style="z-index: 20 !important;">
            <div class="w-100 d-flex align-items-center justify-content-around position-fixed"
                style="height: 63px; bottom: 0; background: #f6f6f6;">
                <router-link to="/" class="text-dark text-decoration-none">
                    <div class="ms-3">
                        <i class="bi bi-shop-window fs-2" style="color: #E35D6A;"></i>
                    </div>
                </router-link>
                <div style="font-size:12px">
                    <p class="m-0 text-center fw-bold">2 Catalogs</p>
                    <div class="d-flex gap-2">
                        <p class="mb-0 text-center">Sku 37 </p>
                        <span>|</span>
                        <p class="mb-0 text-center">Qty 220</p>
                    </div>
                </div>
                <div class="me-3">
                    <router-link to="/checkout/billing_address" class="text-decoration-none text-dark">
                        <div class="d-flex align-items-center">

                            <button class="btn top-brand py-2 d-flex">
                                <p class="text-center m-0 fw-bold">₹ 2,88,000</p>
                                <i class="bi bi-arrow-right ms-2"></i>
                            </button>
                        </div>
                    </router-link>
                </div>

            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'ProductBottomnav',
    computed: {
        currentRoute() {
            return this.$route.name;
        }
    },
}
</script>