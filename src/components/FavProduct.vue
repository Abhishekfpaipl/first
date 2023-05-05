<template>
    <div>
        <div v-for="item in items" :key="item.id">
            <img height="250" :src="item.image">
            <p>{{ item.title }}</p>
            <h6>Description</h6>
            <p>{{ item.decsription }}</p>
            <button class="btn btn-success" @click="favs(item.id)"> Add to Favs</button>
           
        </div>
    </div>
</template>
<script>
export default {
    name: 'FavProduct',
    data() {
        return {
        }
    },
    methods: {
        favs(id) {
            this.$store.commit("addToFav", id)
            this.$router.push({
                path: '/SavedProduct'
            })
        }
    },
    computed: {
        items() {
            return this.$store.state.items;
        }
    }
}
</script>