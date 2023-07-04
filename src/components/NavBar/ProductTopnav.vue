<template>
    <div class="container d-flex justify-content-between align-items-center" ref="topnav"
        :style="`background-color: rgba(255, 255, 255, ${backgroundOpacity});`">
        <div class="d-flex align-items-center gap-3">
            <router-link to="/CardCatelog/Category1" class="text-dark">
                <i class="bi bi-arrow-left fs-2" @click="goBack"></i>
            </router-link>

            <i class="bi bi-search fs-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExampleSearchnew"
                aria-controls="offcanvasExampleSearchnew"></i>
        </div>
        <p class="text-center m-0 fs-4" :class="{ 'hide-on-scroll': hideOnScroll }">DeshiGirl</p>
        <div class="d-flex align-items-center gap-3">

            <router-link to="/favourite-products" :class="{ 'text-danger': currentRoute === 'SavedProduct' }"
                style="text-decoration:none;color:black">
                <i class="bi bi-heart mt-1 fs-2"></i>
            </router-link>

            <router-link to="/checkout/cart" :class="{ 'text-danger': currentRoute === 'simplestepper' }"
                style="text-decoration:none;color:black">
                <i class="bi bi-bag fs-2"></i>
            </router-link>

        </div>
    </div>

    <!-- Search -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExampleSearchnew"
        aria-labelledby="offcanvasExampleLabel" style="width:90vw">
        <div class="offcanvas-header border-bottom">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Search</h5>
            <button type="button" class="btn-close animation" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">

            <div class="">
                <select class="form-select" aria-label="Default select example">
                    <option selected>All Categories</option>
                    <option value="1">Clothing Sets</option>
                    <option value="2">Jumpsuit</option>
                    <option value="3">Jumpsuits & Jacket</option>
                    <option value="3">Kurta Sets</option>
                </select>
            </div>

            <div class=" mt-5">
                <div class="input-group d-flex justify-content-center">
                    <div class="form-outline">
                        <input type="search" id="form1" class="form-control" placeholder="Search" />
                    </div>
                    <button type="button" class="btn btn-primary">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ProductTopnav',
    data() {
        return {
            prevScrollPos: 0,
            backgroundOpacity: 0,
            hideOnScroll: true
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
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercentage = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

            if (scrollPercentage >= 10 && scrollPercentage <= 15) {
                this.backgroundOpacity = 0.5;
                this.hideOnScroll = true;
            } else if (scrollPercentage > 10) {
                this.backgroundOpacity = 1;
                this.hideOnScroll = false;
            } else {
                this.backgroundOpacity = 0;
                this.hideOnScroll = true;
            }
        },
        goBack() {
            window.history.back();
        }

    }
};
</script>
  
<style scoped>
.hide-on-scroll {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.container {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
    z-index: 10;
}

.animation:hover {
    transform: rotate(360deg) !important;
    transition: 0.6s ease-in-out !important;
}

.bi-heart::before {
    content: "\f3f7";
    margin-top: 14px;
}
</style>
  