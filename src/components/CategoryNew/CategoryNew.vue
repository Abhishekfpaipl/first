<template>
    <!-- <HomeTopnav class=""></HomeTopnav>
<OrderFilter class="position border-top border-bottom py-3 position-fixed top-0" style="z-index: 9; background-color: white;"></OrderFilter> -->
    <div class="w-100 d-flex position-relative" style="height:80%;">
        <!-- <button class="btn " @click="ss">btn</button> -->
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
// import HomeTopnav from '../NavBar/HomeTopnav.vue';
import SubCategory from './SubCategory.vue'
import CategoryLink from './CategoryLink.vue'
// import OrderFilter from '../Orders/OrdinaryOrder/OrderFilter.vue'
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
        // HomeTopnav,
        // OrderFilter
    },
    computed: {
        categories() {
            return this.$store.getters.getCategories;
        }
    },

    mounted() {
        // :class="{ active : active_el == li.id }"
        // const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]')
        // dataSpyList.forEach(dataSpyEl => {
        //     // dataSpyEl.forEach(sample => {
        //     console.log(dataSpyEl);
        //     // })
        //     var children = dataSpyEl.children;
        //     for (var i = 0; i < children.length; i++) {
        //         var child = children[i];
        //         // child.style.color = "red";
        //         console.log(child.id);
        //         if (child.id === 7) {
        //             this.ss()
        //         }
        //     }
        // })
    },
    methods: {
        
        // ss() {
        //     console.log('hh');
        //     let m = document.getElementById('product6').scrollIntoView();
        //     console.log(m);
        // }
    }

}
</script>

<style>
.list-group-item.active {
    background-color: pink !important;
    /* background-color: white !important; */
    color: black !important;
    /* font-weight: 800 !important; */
    border-color: pink !important;
    /* border-color: black !important; */
}

.test-scroll::-webkit-scrollbar {
    display: none !important;
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
}
</style>