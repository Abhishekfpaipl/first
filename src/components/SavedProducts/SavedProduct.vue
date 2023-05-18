<template>
    <!-- <div>
        <h1 class="text-center">No Saved Product Found. </h1>
    </div> -->

    <!-- <div>
        <div  v-for="item in items" :key="item.id">
            <img height="250" :src="item.image">
            <p>{{ item.title }}</p>
            <h6>Description</h6>
            <p>{{ item.decsription }}</p>
            <button class="btn btn-success" @click="favs">Add to Favs</button>
        </div>
    </div> -->
    <div>
        <div class="container" >
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
                <div class="col ">
                    <div class="card">
                        <img src="../../../public/img/icons/cardimg.png" alt="">
                        <p class="text-center fw-bold">Product Name</p>
                        <p class="text-center fw-bold">₹690</p>
                    </div>
                </div>
                <div class="col ">
                    <div class="card">
                        <img src="../../../public/img/icons/cardimg.png" alt="">
                        <p class="text-center fw-bold">Product Name</p>
                        <p class="text-center fw-bold">₹690</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SavedProudct',
    computed: {
        items() {
            return this.$store.state.items.filter(item => item.fav);
        }
    }
}
</script>
<style lang="">
    
</style>