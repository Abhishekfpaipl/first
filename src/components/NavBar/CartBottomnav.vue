<template>
    <div>
        <!-- <nav class="navbar fixed-bottom navbar-light" style="z-index: 20 !important;" :class="{ 'navbar-hidden': navbarHidden }"> -->
        <nav class="navbar fixed-bottom navbar-light" style="z-index: 20 !important;">
            <div class="w-100 d-flex align-items-center justify-content-between position-fixed"
                style="height: 63px; bottom: 0; background: #f6f6f6;">

                <div class="d-flex align-items-center ms-3">
                    <router-link to="/" class="text-dark text-decoration-none">
                        <i class="bi bi-shop-window"></i>
                    </router-link>
                    <p class="m-0 ms-2">15 Catalogs</p>
                    <!-- <p class="m-0 fs-4 ms-2 fw-bold">₹1089</p>-->
                    <!-- <div class="items" > -->
                    <!-- </div> -->
                </div>
                <div class="me-3">
                    <router-link to="/checkout/address" class="text-decoration-none text-dark">
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
    data() {
        return {
            prevScroll: window.pageYOffset,
            navbarHidden: false
        };
    },
    computed: {
        currentRoute() {
            return this.$route.name;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const currentScroll = window.pageYOffset;
            if (this.prevScroll > currentScroll) {
                this.navbarHidden = false;
            } else {
                this.navbarHidden = true;
            }
            this.prevScroll = currentScroll;
        },
    }
}
</script>

<style scoped>
.navbar {
    /* background-color: #f1f1f1; */
    height: 60px;
    transition: transform 0.5s;
    transform: translateY(0);
}

.navbar-hidden {
    transform: translateY(100%);
}
</style>