<template>
    <div class="w-100 d-flex position-relative" style="height:80%;">
        <div class="w-25 position-fixed test-scroll " style="height:100vh; overflow-y:scroll; padding-bottom:150px;">
            <div id="list-example" class=" list-group text-center">
                <CategoryLink v-for="(category, index) in categories" :key="index" :category="category"></CategoryLink>
            </div>
        </div>
        <div class="w-75 position-absolute" style="right:0px;padding-bottom:150px;">
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example"
                tabindex="0">
                <SubCategory v-for="(category, index) in categories" :key="index" :category="category" class="py-3">
                </SubCategory>
            </div>
        </div>

    </div>
</template>
<script>
import SubCategory from '@/components/CategoryNew/SubCategory.vue'
import CategoryLink from '@/components/CategoryNew/CategoryLink.vue'
export default {
    name: 'CategoryNew',
    data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    },
    components: {
        SubCategory,
        CategoryLink,
    },
    computed: {
        categories() {
            return this.$store.getters['catalog/getCategories'];
        }
    },
}
</script>

<style>
.list-group-item.active {
    background-color: pink !important;
    color: black !important;
    border-color: pink !important;
}

.test-scroll::-webkit-scrollbar {
    display: none !important;
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>