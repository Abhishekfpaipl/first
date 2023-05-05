<template>
    <!-- <div>
        <h1 class="text-center">No Saved Product Found. </h1>
    </div> -->

    <div>
        <div  v-for="item in items" :key="item.id">
            <img height="250" :src="item.image">
            <p>{{ item.title }}</p>
            <h6>Description</h6>
            <p>{{ item.decsription }}</p>
            <!-- <button class="btn btn-success" @click="favs">Add to Favs</button> -->
           

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