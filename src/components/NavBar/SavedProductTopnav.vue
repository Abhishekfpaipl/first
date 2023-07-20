<template>
    <div>
        <div class="top-brand container d-flex justify-content-between position-fixed align-items-center py-2 border-bottom"
            :class="{ 'hide-on-scroll': isScrollingDown }" style="top: 0; z-index: 1;" ref="topnav">
            <div class="d-flex align-items-center gap-3">
                <i class="bi bi-arrow-left fs-4 brand-text" @click="goBack()"></i>
                <router-link to="/search" class="text-dark">
                    <i class="bi bi-search fs-4 brand-text"></i>
                </router-link>
            </div>
            <router-link to="/" class="text-decoration-none text-dark d-flex align-items-center">
                <img :src="logo" style="height: 40px;filter: brightness(1.5);">
                <p class="text-center m-0 fs-2 fw-bold brand-text" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
                    Deshi girl
                </p>
            </router-link>
            <div class="d-flex align-items-center gap-3">
                <router-link to="/update-page" style="text-decoration:none;color:black;">
                    <i class="bi bi-bell fs-4 brand-text"></i>
                </router-link>
                <router-link to="/contact-us" style="text-decoration:none;color:black;">
                    <i class="bi bi-chat-dots fs-4 brand-text"></i>
                </router-link>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: 'SavedProductTopnav',
    data() {
        return {
            isScrollingDown: false,
            prevScrollPos: window.pageYOffset,
            logo:'img/logo/logo.png'
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const currentScrollPos = window.pageYOffset;
            this.isScrollingDown = currentScrollPos > this.prevScrollPos;
            this.prevScrollPos = currentScrollPos;
        },
        goBack() {
            window.history.back();
        }
    }
};
</script>

<style scoped>
.container {
    transition: transform 0.3s ease-in-out;
}

.hide-on-scroll {
    transform: translateY(-100%);
}
</style>