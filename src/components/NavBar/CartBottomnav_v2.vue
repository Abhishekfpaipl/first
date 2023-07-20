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
                <b class="text-center fs-5">₹1089</b>
                <div class="me-3">
                    <router-link to="/checkout/delivery_payment" class="text-decoration-none text-dark">
                        <div class="d-flex align-items-center">
                            <p class="mb-0 me-2">220 Pcs</p>
                            <button
                            class="top-brand btn">
                                <p class="text-center m-0">Continue (2)</p>
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