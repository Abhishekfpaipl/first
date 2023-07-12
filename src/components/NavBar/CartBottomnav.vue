<template>
    <div>
         <nav class="navbar fixed-bottom navbar-light" style="z-index: 20 !important;">
            <div class="w-100 d-flex align-items-center justify-content-between position-fixed"
                style="height: 63px; bottom: 0; background: #f6f6f6;">

                <div class="d-flex align-items-center ms-3">
                    <router-link to="/" class="text-dark text-decoration-none">
                        <i class="bi bi-shop-window"></i>
                    </router-link>
                    <p class="m-0 ms-2">15 Catalogs</p>
                </div>
                <div class="me-3">
                    <router-link to="/checkout/delivery_payment" class="text-decoration-none text-dark">
                        <div class="items d-flex align-items-center">
                            <b class="text-center me-2">₹1089</b>
                            <button class="btn w-100 d-flex me-2 justify-content-center align-items-center text-center"
                                style="background-color: #eca1a6;">
                                <p class="text-center m-0">Continue (4)</p>
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