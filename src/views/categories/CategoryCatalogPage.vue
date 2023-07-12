<template>
    <HomeTopnav></HomeTopnav>
    <div style="padding-top: 40px;padding-bottom: 80px;">
        <div v-for="(category, index) in categories" :key="index" class="mt-2">
            <router-link :to="category.route" class="text-decoration-none text-dark">
                <div class="d-flex justify-content-between container align-items-center mb-2">
                    <div class="d-flex align-items-center w-100  border-bottom p-2" style="padding-top: 0 !important;">
                        <div class="rounded-circle border d-flex flex-column justify-content-center align-items-center me-3"
                            style="height:80px; width:80px; ">
                            <!-- <div style="line-height: 1rem;">{{ category.id }}</div> -->
                            <img :src="category.img" class="rounded-circle"
                                style="width: 100%; height: 100%; object-fit: fill;">
                        </div>
                        <div class="w-75">
                            <h3>{{ category.name }}</h3>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import HomeTopnav from '@/components/NavBar/HomeTopnav.vue';
export default {
    computed: {
        categories() {
            return this.$store.getters["catalog/getCategories"];
        }
    },
    components: { HomeTopnav }
}
</script>

<style lang="scss" scoped></style>