export default {
    namespaced: true,
    state: {
        orders: [
            {
                id: 1,
                oid: '5426308975',
                date: '14',
                amount: '2,88,000',
                month: 'Jun',
                item: '25',
                qty: '200',
                statusone: 'Pending',
                status: 'Unpaid',
                days: '7',
                dispatch: '2',
                deliver: '2',
                datetime: '10 June, 5.15 PM',
                invoiceno: '152364',
                payment: [
                    {
                        amount: '288000 ',
                        mode: 'UPI',
                        details: 'Uploaded',
                        status: 'Unpaid'
                    }
                ],
                orderSummary: [
                    {
                        charges: '2,88,000',
                        catalogs: '2',
                        items: '37',
                        taxes: '28,000',
                        qty: '220',
                        date: '18-June-23',
                    }
                ],
                delivery: [
                    {
                        mode: 'Pickup',
                        status: 'Pending',
                        address: 'B-94 Okhla Industrial Area, Phase-II New Delhi South Delhi DL 110020 IN'
                    }
                ],
                products: [
                    {
                        suboid: '12542630',
                        name: 'Crochet Skirt Two-Piece Outfits pack of 2',
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
                        style: "#23567",
                        amount: '1,20,000',
                        rate: '1,200',
                        sku: '25',
                        qty: '100',
                        subproduct: [
                            {
                                id: 1,
                                img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
                                skuid: '957223654824',
                                size: 'S',
                                color: 'Red',
                                pcs: '20'
                            },
                            {
                                id: 2,
                                img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
                                skuid: '6453654824',
                                size: 'M',
                                color: 'Blue',
                                pcs: '39'
                            },
                        ]
                    },
                    {
                        suboid: 'PID 542630',
                        name: ' Two-Piece Outfits pack of 2',
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp',
                        style: "#23568",
                        amount: '1,68,000',
                        rate: '840',
                        sku: '30',
                        qty: '200',
                        subproduct: [
                            {
                                id: 1,
                                img: 'https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp',
                                skuid: '957223654824',
                                size: 'S',
                                color: 'Red',
                                pcs: '20'
                            },
                            {
                                id: 2,
                                img: 'https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp',
                                skuid: '6453654824',
                                size: 'M',
                                color: 'Blue',
                                pcs: '39'
                            },
                        ]
                    }
                ]
            },
            {
                id: 2,
                date: '15',
                amount: '2,88,000',
                month: 'Jul',
                oid: '54263152365',
                statusone: 'Shipped',
                status: 'Unpaid',
                days: '7',
                dispatch: '2',
                deliver: '2',
                datetime: '09 June, 6.15 PM',
                invoiceno: '152365',
                payment: [
                    {
                        amount: '720000',
                        mode: 'UPI',
                        details: 'Uploaded',
                        status: 'Unpaid'
                    }
                ],
                orderSummary: [
                    {
                        charges: '2,88,000',
                        catalogs: '2',
                        items: '24',
                        date: '18-June-23',
                    }
                ],
                delivery: [
                    {
                        mode: 'Pickup',
                        status: 'Shipped',
                        address: 'B-94 Okhla Industrial Area, Phase-II New Delhi South Delhi DL 110020 IN'
                    }
                ],
                products: [
                    {
                        suboid: 'PID 542631',
                        name: 'Crochet Skirt Two-Piece Outfits pack of 2',
                        img: 'img/icons/pd1.png',
                        amount: '2000',
                        sku: '562',
                        unit: '15'
                    },
                    {
                        suboid: 'PID 542631',
                        name: 'Crochet Skirt Two-Piece Outfits pack of 2',
                        img: 'img/icons/pd2.png',
                        amount: '2000',
                        sku: '562',
                        unit: '15'
                    }
                ]
            },
            {
                id: 3,
                date: '14',
                amount: '298000',
                month: 'Aug',
                oid: '5426326574',
                item: '25',
                qty: '200',
                statusone: 'Delivered',
                status: 'Rejected',
                days: '7',
                dispatch: '2',
                deliver: '2',
                datetime: '09 June, 6.15 PM',
                invoiceno: '152365',
                payment: [
                    {
                        amount: '720000',
                        mode: 'UPI',
                        details: 'Uploaded',
                        status: 'Unpaid'
                    }
                ],
                orderSummary: [
                    {
                        charges: '30000',
                        suborder: '3',
                        items: '24',
                        date: '18-June-23',
                    }
                ],
                delivery: [
                    {
                        mode: 'Pickup',
                        status: 'Shipped',
                        address: 'B-94 Okhla Industrial Area, Phase-II New Delhi South Delhi DL 110020 IN'
                    }
                ],
                products: [
                    {
                        suboid: 'PID 542631',
                        name: 'Crochet Skirt Two-Piece Outfits pack of 2',
                        img: 'img/icons/pd1.png',
                        amount: '2000',
                        sku: '562',
                        unit: '15'
                    },
                    {
                        suboid: 'PID 542631',
                        name: 'Crochet Skirt Two-Piece Outfits pack of 2',
                        img: 'img/icons/pd2.png',
                        amount: '2000',
                        sku: '562',
                        unit: '15'
                    }
                ]
            },
            {
                id: 4,
                date: '14',
                month: 'Sept',
                oid: '5426333654',
                item: '25',
                qty: '200',
                statusone: 'Cancelled',
                status: 'Unpaid',
                days: '7',
                dispatch: '2',
                deliver: '2'
            },
            {
                id: 5,
                date: '14',
                month: 'Oct',
                oid: '542633245',
                price: '150000',
                item: '25',
                qty: '200',
                statusone: 'Pending',
                status: 'Paid',
                days: '7',
                dispatch: '2',
                deliver: '2'
            },
            {
                id: 6,
                date: '14',
                month: 'Nov',
                oid: '5426337854',
                price: '150000',
                item: '25',
                qty: '200',
                statusone: 'Shipped',
                status: 'Paid',
                days: '7',
                dispatch: '2',
                deliver: '2'
            },
            {
                id: 7,
                date: '14',
                month: 'Jan',
                oid: '542633568',
                price: '150000',
                item: '25',
                qty: '200',
                statusone: 'Cancelled',
                status: 'Paid',
                days: '7',
                dispatch: '2',
                deliver: '2'
            },
        ],
        activeOrderProduct: {},
        completedOrders: [
            {
                id: 1,
                img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
                oid: '4526589182365',
                name: 'Stylish Western Girl Trouser',
                datetime: '10 June, 12:30 pm',
                suboid: '4526589182365',
                sku: '8',
                unit: '200',
                amount: '240000',
                catelog_id: 1,
                payment: [
                    {
                        amount: '250500 ',
                        mode: 'UPI',
                        details: 'Uploaded',
                        status: 'Paid'
                    }
                ],
                delivery: [
                    {
                        date: '18-June-23',
                        mode: 'Pickup',
                        status: 'Pending',
                        address: 'B-94 Okhla Industrial Area, Phase-II New Delhi South Delhi DL 110020 IN'
                    }
                ],
                orderSummary: [
                    {
                        oid: '4526589182365',
                        charges: '2,88,000',
                        catalogs: '2',
                        items: '37',
                        taxes: '28,000',
                        qty: '220',
                    }
                ],
                subproduct: [
                    {
                        id: 1,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
                        skuid: '957223654824',
                        size: 'S',
                        color: 'Red',
                        pcs: '20',
                        amount: '72,000',
                    },
                    {
                        id: 2,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
                        skuid: '655323654824',
                        size: 'L',
                        color: 'Blue',
                        pcs: '15',
                        amount: '72,000',
                    },
                    {
                        id: 3,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
                        skuid: '457873654824',
                        size: 'XL',
                        color: 'Black',
                        pcs: '41',
                        amount: '72,000',
                    },
                    {
                        id: 4,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
                        skuid: '451223654824',
                        size: 'XXL',
                        color: 'Burgandy',
                        pcs: '50',
                        amount: '72,000',
                    },
                ]
            },
            {
                id: 2,
                img: 'https://img.ltwebstatic.com/images3_pi/2019/10/22/15717339355bd984905d3dad38aad16f10c8aa8a6d_thumbnail_900x.webp',
                oid: '4526589182365',
                name: 'Spun Twill 3 Pc',
                datetime: '10 June, 12:30 pm',
                suboid: '4526589182365',
                sku: '8',
                unit: '200',
                amount: '240000',
                catelog_id: 5,
                subproduct: [
                    {
                        id: 1,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/10/22/15717339355bd984905d3dad38aad16f10c8aa8a6d_thumbnail_900x.webp',
                        skuid: '451223654824',
                        size: 'XXL',
                        color: 'Burgandy',
                        pcs: '25'
                    },
                    {
                        id: 2,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/10/22/15717339355bd984905d3dad38aad16f10c8aa8a6d_thumbnail_900x.webp',
                        skuid: '451223654824',
                        size: 'XXL',
                        color: 'Burgandy',
                        pcs: '25'
                    },
                    {
                        id: 3,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/10/22/15717339355bd984905d3dad38aad16f10c8aa8a6d_thumbnail_900x.webp',
                        skuid: '451223654824',
                        size: 'XXL',
                        color: 'Burgandy',
                        pcs: '25'
                    },
                    {
                        id: 4,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/10/22/15717339355bd984905d3dad38aad16f10c8aa8a6d_thumbnail_900x.webp',
                        skuid: '451223654824',
                        size: 'XXL',
                        color: 'Burgandy',
                        pcs: '25'
                    },
                ]
            },
            {
                id: 3,
                img: 'https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp',
                oid: '4526589182365',
                name: 'RIB TOP',
                datetime: '10 June, 12:30 pm',
                suboid: '4526589182365',
                sku: '8',
                unit: '200',
                amount: '240000',
                catelog_id: 2,
                subproduct: [
                    {
                        id: 1,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp',
                        skuid: '451223654824',
                        size: 'XXL',
                        color: 'Burgandy',
                        pcs: '25'
                    },
                    {
                        id: 2,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp',
                        skuid: '451223654824',
                        size: 'XXL',
                        color: 'Burgandy',
                        pcs: '25'
                    },
                    {
                        id: 3,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp',
                        skuid: '451223654824',
                        size: 'XXL',
                        color: 'Burgandy',
                        pcs: '25'
                    },
                    {
                        id: 4,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp',
                        skuid: '451223654824',
                        size: 'XXL',
                        color: 'Burgandy',
                        pcs: '25'
                    },
                ]
            },
            {
                id: 4,
                img: 'https://img.ltwebstatic.com/images3_pi/2019/11/27/157484286459ed9e2b1037c98c9ff519c695214cab_thumbnail_900x.webp',
                oid: '4526589182365',
                name: 'Zuric Two Pc',
                datetime: '10 June, 12:30 pm',
                suboid: '4526589182365',
                sku: '8',
                unit: '200',
                amount: '240000',
                catelog_id: 3,
                subproduct: [
                    {
                        id: 1,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/11/27/157484286459ed9e2b1037c98c9ff519c695214cab_thumbnail_900x.webp',
                        skuid: '957223654824',
                        size: 'S',
                        color: 'Red',
                        pcs: '20'
                    },
                    {
                        id: 2,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/11/27/157484286459ed9e2b1037c98c9ff519c695214cab_thumbnail_900x.webp',
                        skuid: '655323654824',
                        size: 'L',
                        color: 'Blue',
                        pcs: '15'
                    },
                    {
                        id: 3,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/11/27/157484286459ed9e2b1037c98c9ff519c695214cab_thumbnail_900x.webp',
                        skuid: '457873654824',
                        size: 'XL',
                        color: 'Black',
                        pcs: '41'
                    },
                    {
                        id: 4,
                        img: 'https://img.ltwebstatic.com/images3_pi/2019/11/27/157484286459ed9e2b1037c98c9ff519c695214cab_thumbnail_900x.webp',
                        skuid: '451223654824',
                        size: 'XXL',
                        color: 'Burgandy',
                        pcs: '50'
                    },
                ]
            },
        ],
    },
    getters: {
        getOrders(state) {
            return state.orders
        },
        getOrder: (state) => (orderId) => {
            let index = state.orders.findIndex(order => order.id == orderId);
            return state.orders[index];
        },
        getActiveOrderProduct(state) {
            return state.activeOrderProduct;
        },
        getCompletedOrders(state) {
            return state.completedOrders
        },
        getcomplete: (state) => (completeId) => {
            let index = state.completedOrders.findIndex(complete => complete.id == completeId);
            return state.completedOrders[index];
        },
    },
    mutations: {
        selectOrderProduct(state, product) {
            state.activeOrderProduct = product;
        },
        hideOrderProduct(state) {
            state.activeOrderProduct = {}
        },
    },
    actions: {
        selectOrderProduct({ commit }, product) {
            commit('selectOrderProduct', product)
        },
        hideOrderProduct({ commit }) {
            commit('hideOrderProduct')
        },
    }
}