<template>
    <div>
        <!-- <nav class="navbar fixed-bottom navbar-light" style="z-index: 20 !important;" :class="{ 'navbar-hidden': navbarHidden }"> -->
        <nav class="navbar fixed-bottom navbar-light" style="z-index: 20 !important;" >
            <div class="w-100 d-flex align-items-center position-fixed"
                style="height: 63px; bottom: 0; background: #f6f6f6;">
                <div class="d-flex justify-content-around" style="width: 30%;">
                    <div class="items">
                        <routerLink to="/" class="text-dark text-decoration-none">
                            <div class="inner-items">
                                <i class="bi bi-shop-window fs-5"></i>
                            </div>
                        </routerLink>
                    </div>
                    <div class="items">
                        <router-link to="" class="text-dark text-decoration-none">
                            <div class="inner-items">
                                <button class="btn bg-outline-dark p-0" @click="favs(product.id)">
                                    <i class="bi bi-heart fs-5"></i>
                                </button>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="me-3" style="width: 70%;">
                    <div class="items">
                        <button @click="addToCart"
                            class="btn w-100 d-flex justify-content-center align-items-center text-center"
                            style="background-color: #eca1a6;">
                            <i class="bi bi-cart fs-5"></i>
                            <p class="text-center m-0 ms-2">Add to cart</p>
                        </button>
                    </div>
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
/* .nav-bottom {
    height: 20%;
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    background: #F6F6F6;
} */

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