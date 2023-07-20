export default {
    namespaced: true,
    state: {
        cartProduct: [
            {
                id: 1,
                img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
                name: 'Ruffle A-Line Dress',
                style:"#23567",
                rate: '1,200',
                sku:25,
                qty: '100',
                amount: '1,20,000',
            },
            {
                img: 'https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp',
                id: 2,
                name: 'Texture Shorts Co-ords pack of 2',
                style:"#23568",
                rate: '840',
                sku:30,
                qty: '200',
                amount: '1,68,000',
            },
        ],
    },
    getters: {
        getCartProduct(state) {
            return state.cartProduct;
        },
        getCart: (state) => (productId) => {
            let index = state.cartProduct.findIndex(product => product.id == productId);
            return state.cartProduct[index];
        }
    },
    mutations: {},
    actions: {}
}