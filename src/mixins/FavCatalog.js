 const FavCatalog = {
    methods: {
        saveProduct(product) {
            this.$store.dispatch('catalog/saveProduct', product)
        },
        // goBack(){
        //     window.history.back()
        // }
    }
}
export default FavCatalog
