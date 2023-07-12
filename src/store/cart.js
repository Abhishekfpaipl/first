export default {
    namespaced: true,
    state: {
        cartProduct: [
            {
                id: 1,
                img: 'https://img101.urbanic.com/v1/goods-pic/14569697283c4cd9866e5bfee6034459UR_w1000_q90.webp',
                name: 'Ruffle A-Line Dress',
                amount: '120000',
                rate: '1200',
                pieces: '100'
            },
            {
                id: 2,
                img: 'https://img101.urbanic.com/v1/goods-pic/3ab4dce0365249afa36fa97a1bedc0faUR_w540_h720_q85.webp',
                name: 'Texture Shorts Co-ords pack of 2',
                amount: '130500',
                rate: '150',
                pieces: '120'
            },
        ],
    },
    getters: {
        getCartProduct(state) {
            return state.cartProduct;
        },
    },
    mutations: {},
    actions: {}
}