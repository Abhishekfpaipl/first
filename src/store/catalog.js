export default {
    namespaced: true,
    state: {
        // oldcategories
        // categories: [
        //     {
        //         id: 1,
        //         name: 'Special Prices',
        //         slug: 'special-price',
        //         img: 'https://images.meesho.com/images/marketing/1591970222196_64.webp',
        //         child: {
        //             '': [
        //                 {
        //                     id: 1,
        //                     name: 'Dresses',
        //                     img: 'https://static2.urbanic.com/images/v/edb847e55d548b3075bef1914867caf3.png',
        //                     route: '/catalogs/category1',
        //                 },
        //                 {
        //                     id: 2,
        //                     name: 'Blouses',
        //                     img: 'https://static2.urbanic.com/images/v/390ab1c0d82c576495e47cbb2cc0ada4.jpeg',
        //                     route: '/catalogs/category2'
        //                 },
        //                 {
        //                     id: 3,
        //                     name: 'Bottoms',
        //                     img: 'https://static2.urbanic.com/images/v/7346bf39cb60692f982ce28b58653b12.jpeg',
        //                     route: '/catalogs/category3'
        //                 },
        //                 {
        //                     id: 4,
        //                     name: 'Top & T-shirts',
        //                     img: 'https://static2.urbanic.com/images/v/3e41f5da8f8925b7e7afbb1fef946c88.jpeg',
        //                     route: '/catalogs/category4'
        //                 },
        //                 {
        //                     id: 5,
        //                     name: 'Sweaters & Hoodies',
        //                     img: 'https://static2.urbanic.com/images/v/9e866d4c97ef735d69760c24caa81f70.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 6,
        //                     name: 'Coats & Jackets',
        //                     img: 'https://static2.urbanic.com/images/v/c861bf16be26f9e1c9b9594a99c4ac4c.jpg',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 7,
        //                     name: 'Co-Ords & Jumpsuits',
        //                     img: 'https://static2.urbanic.com/images/v/fcd5d74c6b3b04b48e0e1809dcca0802.jpeg',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 8,
        //                     name: 'Demin',
        //                     img: 'https://static2.urbanic.com/images/v/f54914eb22ad1e47e7e39d2b17c36a10.png',
        //                     route: ''
        //                 },
        //             ],

        //         },
        //     },
        //     {
        //         id: 2,
        //         name: 'Dresses',
        //         slug: 'dresses',
        //         img: 'https://images.meesho.com/images/marketing/1591969710874_64.webp',
        //         child: {
        //             '': [
        //                 {
        //                     id: 1,
        //                     name: 'A-Line Dresses',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673853318649/3R5A9367_1_1.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 2,
        //                     name: 'Bodycon Dresses',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673849284135/3R5A9552_1.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 3,
        //                     name: 'Party Dresses',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673852485950/3R5A9440_1_1-.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 4,
        //                     name: 'Sweater Dresses',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673853341256/3R5A9420_1_1.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 5,
        //                     name: 'Shirt Dresses',
        //                     img: 'https://static2.urbanic.com/images/feeds/1675143512010/3R5A9404_1_1-.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 6,
        //                     name: 'Slip Dresses',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673853399045/3R5A9443_1_1.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 7,
        //                     name: 'Short sleeved Dress',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673853413306/3R5A9364_1_1.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 8,
        //                     name: 'Long sleeved Dress',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673850806771/3R5A9829_1_1.png',
        //                     route: ''
        //                 },
        //             ],
        //         },
        //     },
        //     {
        //         id: 3,
        //         name: 'Tops',
        //         slug: 'tops',
        //         img: 'https://images.meesho.com/images/marketing/1591969693743_64.webp',
        //         child: {
        //             '': [
        //                 {
        //                     id: 1,
        //                     name: 'T-shirts',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673850888214/T.png',
        //                     route: '/CardCatelog'
        //                 },
        //                 {
        //                     id: 2,
        //                     name: 'Vests',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673850897789/tops.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 3,
        //                     name: 'Blouses & Shirts',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673850909782/3R5A9381_1_1.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 4,
        //                     name: 'Sweaters & CarDigans',
        //                     img: 'https://static2.urbanic.com/images/feeds/1675576008651/IMG_0005.PNG',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 5,
        //                     name: 'Sweatshirts & Hoodies',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673850968108/3R5A9378_1_1.png',
        //                     route: '/CardCatelog'
        //                 },
        //                 {
        //                     id: 6,
        //                     name: 'Coats',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673850996501/3R5A9825_1_1.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 7,
        //                     name: 'Jackets',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851006787/3R5A9425_1_1.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 4,
        //                     name: 'Blazers',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851015091/3R5A9299_1_1.png',
        //                     route: ''
        //                 },
        //             ],
        //         },
        //     },
        //     {
        //         id: 4,
        //         name: 'Bottoms',
        //         slug: 'bottoms',
        //         img: 'https://images.meesho.com/images/marketing/1591969654748_64.webp',
        //         child: {
        //             '': [
        //                 {
        //                     id: 1,
        //                     name: 'Jeans',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851105748/3R5A8998_1.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 2,
        //                     name: 'Pants & Leggings',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851112610/3R5A9393_1_1.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 3,
        //                     name: 'Shorts',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851122558/3R5A8995_1.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 4,
        //                     name: 'Skirts',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851138694/3R5A9839_1_1.png',
        //                     route: ''
        //                 },
        //             ],
        //         },
        //     },
        //     {
        //         id: 5,
        //         name: 'Denim',
        //         slug: 'denim',
        //         img: 'https://images.meesho.com/images/marketing/1591969736036_64.webp',
        //         child: {
        //             '': [
        //                 {
        //                     id: 1,
        //                     name: 'Denim',
        //                     img: 'https://static2.urbanic.com/images/v/277b66f51668a27f1ab421cd63d49ebe.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 2,
        //                     name: 'Jackets',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851211293/3R5A9422_1_1.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 3,
        //                     name: 'Shorts',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851240417/3R5A8988_1.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 4,
        //                     name: 'Skirts',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851258844/3R5A9014_1.png',
        //                     route: ''
        //                 },
        //             ],
        //         },
        //     },
        //     {
        //         id: 6,
        //         name: 'Sports',
        //         slug: 'sports',
        //         img: 'https://images.meesho.com/images/marketing/1591969678285_64.webp',
        //         child: {
        //             '': [
        //                 {
        //                     id: 1,
        //                     name: 'Legging',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851305715/3R5A9011_1.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 2,
        //                     name: 'Pants',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851320579/3R5A9009_1.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 3,
        //                     name: 'Hoodies & Sweatshirts',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851332349/3R5A9278_1_1.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 4,
        //                     name: 'Bras',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851344305/3R5A9289_1_1_1-.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 5,
        //                     name: 'T-Shirts & Tops',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851358362/3R5A9831_1_1-.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 6,
        //                     name: 'Suits & Jumpsuits',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851378874/3R5A9445_1_1-.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 7,
        //                     name: 'Shorts & Skirts',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851393579/3R5A9711_1-.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 8,
        //                     name: 'Sports Acc',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851432941/sports.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 9,
        //                     name: 'Swimwear',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851461682/3R5A9477_1_1-.png',
        //                     route: ''
        //                 },
        //             ],
        //         },
        //     },
        //     {
        //         id: 7,
        //         name: 'Payjamas & Lingeire',
        //         slug: 'payjamas-lingerie',
        //         img: 'https://images.meesho.com/images/marketing/1591969621244_64.webp',
        //         child: {
        //             '': [
        //                 {
        //                     id: 1,
        //                     name: 'Pyjamas',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851061230/3R5A9391_1_1-.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 2,
        //                     name: 'Lingerie',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851081154/3R5A9835_1_1.png',
        //                     route: ''
        //                 },
        //             ],
        //         },
        //     },
        //     {
        //         id: 8,
        //         name: 'Co-Ords',
        //         slug: 'co-ords',
        //         img: 'https://images.meesho.com/images/marketing/1591969621244_64.webp',
        //         child: {
        //             '': [
        //                 {
        //                     id: 1,
        //                     name: 'Two-Piece',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851503423/3R5A9388_1_1-.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 2,
        //                     name: 'Jumpsuits',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673851517736/3R5A9342_1_1.png',
        //                     route: ''
        //                 },
        //             ],
        //         },
        //     },
        //     {
        //         id: 9,
        //         name: 'Curve',
        //         slug: 'curve',
        //         img: 'https://images.meesho.com/images/marketing/1591969621244_64.webp',
        //         child: {
        //             '': [
        //                 {
        //                     id: 1,
        //                     name: 'Tops',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673852297103/3R5A9048.png',
        //                     route: ''
        //                 },
        //                 {
        //                     id: 2,
        //                     name: 'Dresses',
        //                     img: 'https://static2.urbanic.com/images/feeds/1673852311624/3R5A9030_1_1.png',
        //                     route: ''
        //                 },
        //             ],
        //         },
        //     },

        // ],

        categories:[
            {
                id:1,
                img:'https://static2.urbanic.com/images/feeds/1673850897789/tops.png',
                name:'Tops',
                route: '/catalogs/category1',
            },
            {
                id:2,
                img:'https://static2.urbanic.com/images/feeds/1673850888214/T.png',
                name:'T-Shirts',
                route: '/catalogs/category2',
            },
            {
                id:3,
                img:'https://static2.urbanic.com/images/feeds/1673851503423/3R5A9388_1_1-.png',
                name:'Co-ords',
                route: '/catalogs/category3',
            },
            {
                id:4,
                img:'https://static2.urbanic.com/images/feeds/1673851517736/3R5A9342_1_1.png',
                name:'Jumpsuits',
                route: '/catalogs/category4',
            },
            {
                id:5,
                img:'https://static2.urbanic.com/images/feeds/1673851112610/3R5A9393_1_1.png',
                name:'Bottoms',
                route: '/catalogs/category5',
            },
            {
                id:6,
                img:'https://static2.urbanic.com/images/feeds/1673852485950/3R5A9440_1_1-.png',
                name:'Dresses',
                route: '/catalogs/category6',
            },
            {
                id:7,
                img:'https://static2.urbanic.com/images/feeds/1673850909782/3R5A9381_1_1.png',
                name:'Shirts',
                route: '/catalogs/category6',
            },
        ],
        products: [
            {
                id: 1,
                slug: 1,
                name: 'Zuric two pc dfsdfsdfsdfdsfsdfsd',
                moq: 12,
                info: '#23636',
                sku:25,
                images: [
                    "https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp",
                    "https://img.ltwebstatic.com/images3_pi/2020/03/16/1584329043f6a2b7ff18eed10fc606d386136fec59_thumbnail_750x.webp",
                    "https://img.ltwebstatic.com/images3_pi/2022/09/05/166236058465db391027c27d9351d3972053af2deb_thumbnail_750x.webp",
                    "https://img.ltwebstatic.com/images3_pi/2021/01/18/1610969103d94c96d640a1de246d4e7cc1c104f08e_thumbnail_750x.webp",
                    "https://img.ltwebstatic.com/images3_pi/2021/05/18/1621310932862051acf1a77dd2fa5d7b29c2064d3c_thumbnail_750x.webp",
                ],
                price: 6500,
                colors: [
                    { id: 1, name: 'black', img: "https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp" },
                    { id: 2, name: 'red', img: "https://img.ltwebstatic.com/images3_pi/2020/03/16/1584329043f6a2b7ff18eed10fc606d386136fec59_thumbnail_750x.webp" },
                    { id: 2, name: 'white', img: "https://img.ltwebstatic.com/images3_pi/2022/09/05/166236058465db391027c27d9351d3972053af2deb_thumbnail_750x.webp" },
                    { id: 2, name: 'green', img: "https://img.ltwebstatic.com/images3_pi/2021/01/18/1610969103d94c96d640a1de246d4e7cc1c104f08e_thumbnail_750x.webp" },
                    { id: 2, name: 'purple', img: "https://img.ltwebstatic.com/images3_pi/2021/05/18/1621310932862051acf1a77dd2fa5d7b29c2064d3c_thumbnail_750x.webp" },
                ],
                sizes: [
                    {
                        name: "S",
                        price: '6500',
                        mesurements: [
                            {
                                name: "Bottom Length",
                                value: "40in"
                            },
                            {
                                name: "Hips",
                                value: "38.2in"
                            },
                            {
                                name: "Thigh",
                                value: "25.1in"
                            },
                            {
                                name: "Waist",
                                value: "38.6in"
                            },
                            {
                                name: "Bust",
                                value: "38.6in"
                            },
                            {
                                name: "Sleeve Width",
                                value: "38.6in"
                            },
                        ]
                    },
                    {
                        name: "M",
                        price: '500',
                        mesurements: [
                            {
                                name: "Length",
                                value: "45.2in"
                            },
                            {
                                name: "Hips",
                                value: "41.7in"
                            },
                            {
                                name: "Thigh",
                                value: "24.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                    {
                        name: "L",
                        price: '300',
                        mesurements: [
                            {
                                name: "Length",
                                value: "38.2in"
                            },
                            {
                                name: "Hips",
                                value: "40.7in"
                            },
                            {
                                name: "Thigh",
                                value: "22.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                    {
                        name: "XL",
                        price: '4000',
                        mesurements: [
                            {
                                name: "Length",
                                value: "38.2in"
                            },
                            {
                                name: "Hips",
                                value: "40.7in"
                            },
                            {
                                name: "Thigh",
                                value: "22.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                    {
                        name: "XXL",
                        price: '5000',
                        mesurements: [
                            {
                                name: "Length",
                                value: "38.2in"
                            },
                            {
                                name: "Hips",
                                value: "40.7in"
                            },
                            {
                                name: "Thigh",
                                value: "22.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                ],

            },
            {
                id: 2,
                slug: 2,
                name: 'Spun Twill 3 PC',
                moq: 10,
                info: '#23634',
                sku:23,
                images: [
                    "https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp",
                    "https://img.ltwebstatic.com/images2_pi/2019/05/14/15578224524054588556_thumbnail_900x1199.webp",
                    "https://img.ltwebstatic.com/images3_pi/2021/05/21/16215736080c2485af24a73cff52515c060d9c0e9e_thumbnail_900x.webp",
                    "https://img.ltwebstatic.com/images3_pi/2021/05/25/162192916718585f2179949535d5de57db64572870_thumbnail_900x.webp",
                ],
                price: 820,
                colors: [
                    { id: 1, name: 'hotpink', img: "https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp" },
                    { id: 2, name: 'greenyellow', img: "https://img.ltwebstatic.com/images2_pi/2019/05/14/15578224524054588556_thumbnail_900x1199.webp" },
                    { id: 2, name: 'voilet', img: "https://img.ltwebstatic.com/images3_pi/2021/05/21/16215736080c2485af24a73cff52515c060d9c0e9e_thumbnail_900x.webp" },
                    { id: 2, name: 'cyan', img: "https://img.ltwebstatic.com/images3_pi/2021/05/25/162192916718585f2179949535d5de57db64572870_thumbnail_900x.webp" },
                ],
                sizes: [
                    {
                        name: "S",
                        price: 820,
                        mesurements: [
                            {
                                name: "Bottom Length",
                                value: "40in"
                            },
                            {
                                name: "Hips",
                                value: "38.2in"
                            },
                            {
                                name: "Thigh",
                                value: "25.1in"
                            },
                            {
                                name: "Waist",
                                value: "38.6in"
                            },
                            {
                                name: "Bust",
                                value: "38.6in"
                            },
                            {
                                name: "Sleeve Width",
                                value: "38.6in"
                            },
                        ]
                    },
                    {
                        name: "M",
                        price: 820,
                        mesurements: [
                            {
                                name: "Length",
                                value: "45.2in"
                            },
                            {
                                name: "Hips",
                                value: "41.7in"
                            },
                            {
                                name: "Thigh",
                                value: "24.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                    {
                        name: "L",
                        price: 820,
                        mesurements: [
                            {
                                name: "Length",
                                value: "38.2in"
                            },
                            {
                                name: "Hips",
                                value: "40.7in"
                            },
                            {
                                name: "Thigh",
                                value: "22.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                    {
                        name: "XL",
                        price: 820,
                        mesurements: [
                            {
                                name: "Length",
                                value: "38.2in"
                            },
                            {
                                name: "Hips",
                                value: "40.7in"
                            },
                            {
                                name: "Thigh",
                                value: "22.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                ],
            },
            {
                id: 3,
                slug: 3,
                name: 'RIB TOP',
                moq: 10,
                info: '#23637',
                sku:30,
                images: [
                    "https://img.ltwebstatic.com/images3_pi/2019/11/27/157484286459ed9e2b1037c98c9ff519c695214cab_thumbnail_900x.webp",
                    "https://img.ltwebstatic.com/images3_pi/2019/12/31/1577777275a6a049541520c22575516a85bc719dda_thumbnail_900x.webp",
                    "https://img.ltwebstatic.com/images3_pi/2019/11/27/1574842852778931f48b996a3ba180d57176fc90d2_thumbnail_900x.webp",
                    "https://img.ltwebstatic.com/images3_pi/2019/12/31/1577777275a6a049541520c22575516a85bc719dda_thumbnail_900x.webp",
                ],
                price: 250,
                colors: [
                    { id: 1, name: 'Yellow', img: "https://img.ltwebstatic.com/images3_pi/2019/11/27/157484286459ed9e2b1037c98c9ff519c695214cab_thumbnail_900x.webp" },
                    { id: 2, name: 'purple', img: "https://img.ltwebstatic.com/images3_pi/2019/12/31/1577777275a6a049541520c22575516a85bc719dda_thumbnail_900x.webp" },
                    { id: 3, name: 'green', img: "https://img.ltwebstatic.com/images3_pi/2019/11/27/1574842852778931f48b996a3ba180d57176fc90d2_thumbnail_900x.webp" },
                    { id: 4, name: 'khaki', img: "https://img.ltwebstatic.com/images3_pi/2019/12/31/1577777275a6a049541520c22575516a85bc719dda_thumbnail_900x.webp" },
                ],
                sizes: [
                    {
                        name: "S",
                        price: 250,
                        mesurements: [
                            {
                                name: "Bottom Length",
                                value: "40in"
                            },
                            {
                                name: "Hips",
                                value: "38.2in"
                            },
                            {
                                name: "Thigh",
                                value: "25.1in"
                            },
                            {
                                name: "Waist",
                                value: "38.6in"
                            },
                            {
                                name: "Bust",
                                value: "38.6in"
                            },
                            {
                                name: "Sleeve Width",
                                value: "38.6in"
                            },
                        ]
                    },
                    {
                        name: "M",
                        price: 250,
                        mesurements: [
                            {
                                name: "Length",
                                value: "45.2in"
                            },
                            {
                                name: "Hips",
                                value: "41.7in"
                            },
                            {
                                name: "Thigh",
                                value: "24.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                    {
                        name: "L",
                        price: 250,
                        mesurements: [
                            {
                                name: "Length",
                                value: "38.2in"
                            },
                            {
                                name: "Hips",
                                value: "40.7in"
                            },
                            {
                                name: "Thigh",
                                value: "22.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                    {
                        name: "XL",
                        price: 250,
                        mesurements: [
                            {
                                name: "Length",
                                value: "38.2in"
                            },
                            {
                                name: "Hips",
                                value: "40.7in"
                            },
                            {
                                name: "Thigh",
                                value: "22.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                    {
                        name: "XXL",
                        price: 250,
                        mesurements: [
                            {
                                name: "Length",
                                value: "38.2in"
                            },
                            {
                                name: "Hips",
                                value: "40.7in"
                            },
                            {
                                name: "Thigh",
                                value: "22.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                ],
            },
            {
                id: 4,
                slug: 4,
                name: 'Zuric two pc',
                moq: 10,
                info: '#23639',
                sku:39,
                images: [
                    "https://img.ltwebstatic.com/images3_pi/2020/01/15/157908187102b895ac68d9286f66e7132bd7701940_thumbnail_900x.webp",
                    "https://img.ltwebstatic.com/images3_pi/2019/09/29/1569747933696b184c8bfb16b7da53ae86f5aaf296_thumbnail_900x.webp",
                    "https://img.ltwebstatic.com/images3_pi/2020/01/15/157908187102b895ac68d9286f66e7132bd7701940_thumbnail_900x.webp",
                ],
                price: 730,
                colors: [
                    { id: 1, name: 'brown', img: "https://img.ltwebstatic.com/images3_pi/2020/01/15/157908187102b895ac68d9286f66e7132bd7701940_thumbnail_900x.webp" },
                    { id: 2, name: 'red', img: "https://img.ltwebstatic.com/images3_pi/2019/09/29/1569747933696b184c8bfb16b7da53ae86f5aaf296_thumbnail_900x.webp" },
                    { id: 3, name: 'brown', img: "https://img.ltwebstatic.com/images3_pi/2020/01/15/157908187102b895ac68d9286f66e7132bd7701940_thumbnail_900x.webp" },
                ],
                sizes: [
                    {
                        name: "S",
                        price: 730,
                        mesurements: [
                            {
                                name: "Bottom Length",
                                value: "40in"
                            },
                            {
                                name: "Hips",
                                value: "38.2in"
                            },
                            {
                                name: "Thigh",
                                value: "25.1in"
                            },
                            {
                                name: "Waist",
                                value: "38.6in"
                            },
                            {
                                name: "Bust",
                                value: "38.6in"
                            },
                            {
                                name: "Sleeve Width",
                                value: "38.6in"
                            },
                        ]
                    },
                    {
                        name: "M",
                        price: 730,
                        mesurements: [
                            {
                                name: "Length",
                                value: "45.2in"
                            },
                            {
                                name: "Hips",
                                value: "41.7in"
                            },
                            {
                                name: "Thigh",
                                value: "24.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                    {
                        name: "L",
                        price: 730,
                        mesurements: [
                            {
                                name: "Length",
                                value: "38.2in"
                            },
                            {
                                name: "Hips",
                                value: "40.7in"
                            },
                            {
                                name: "Thigh",
                                value: "22.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                    {
                        name: "XL",
                        price: 730,
                        mesurements: [
                            {
                                name: "Length",
                                value: "38.2in"
                            },
                            {
                                name: "Hips",
                                value: "40.7in"
                            },
                            {
                                name: "Thigh",
                                value: "22.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                    {
                        name: "XXL",
                        price: 730,
                        mesurements: [
                            {
                                name: "Length",
                                value: "38.2in"
                            },
                            {
                                name: "Hips",
                                value: "40.7in"
                            },
                            {
                                name: "Thigh",
                                value: "22.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                ],
            },
            {
                id: 5,
                slug: 5,
                name: 'oversized t-shirt',
                moq: 10,
                info: '#23633',
                sku:89,
                images: [
                    "https://img.ltwebstatic.com/images3_pi/2019/10/22/15717339355bd984905d3dad38aad16f10c8aa8a6d_thumbnail_900x.webp",
                    "https://img.ltwebstatic.com/images3_pi/2021/01/13/1610505625cef5573c92b4d1df43eca292954c67e2_thumbnail_900x.webp",
                ],
                price: 324,
                colors: [
                    { id: 1, name: 'black', img: "https://img.ltwebstatic.com/images3_pi/2019/10/22/15717339355bd984905d3dad38aad16f10c8aa8a6d_thumbnail_900x.webp" },
                    { id: 2, name: 'blue', img: "https://img.ltwebstatic.com/images3_pi/2021/01/13/1610505625cef5573c92b4d1df43eca292954c67e2_thumbnail_900x.webp" },
                ],
                sizes: [
                    {
                        name: "S",
                        price: 324,
                        mesurements: [
                            {
                                name: "Bottom Length",
                                value: "40in"
                            },
                            {
                                name: "Hips",
                                value: "38.2in"
                            },
                            {
                                name: "Thigh",
                                value: "25.1in"
                            },
                            {
                                name: "Waist",
                                value: "38.6in"
                            },
                            {
                                name: "Bust",
                                value: "38.6in"
                            },
                            {
                                name: "Sleeve Width",
                                value: "38.6in"
                            },
                        ]
                    },
                    {
                        name: "M",
                        price: 324,
                        mesurements: [
                            {
                                name: "Length",
                                value: "45.2in"
                            },
                            {
                                name: "Hips",
                                value: "41.7in"
                            },
                            {
                                name: "Thigh",
                                value: "24.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                    {
                        name: "L",
                        price: 324,
                        mesurements: [
                            {
                                name: "Length",
                                value: "38.2in"
                            },
                            {
                                name: "Hips",
                                value: "40.7in"
                            },
                            {
                                name: "Thigh",
                                value: "22.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                    {
                        name: "XL",
                        price: 324,
                        mesurements: [
                            {
                                name: "Length",
                                value: "38.2in"
                            },
                            {
                                name: "Hips",
                                value: "40.7in"
                            },
                            {
                                name: "Thigh",
                                value: "22.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                    {
                        name: "XXL",
                        price: 324,
                        mesurements: [
                            {
                                name: "Length",
                                value: "38.2in"
                            },
                            {
                                name: "Hips",
                                value: "40.7in"
                            },
                            {
                                name: "Thigh",
                                value: "22.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                ],
            },
            {
                id: 6,
                slug: 6,
                name: '22y28 oversized',
                moq: 10,
                info: '#25636',
                sku:50,
                images: [
                    "https://img.ltwebstatic.com/images3_pi/2023/03/17/1679030387b6eeb09f553300f8cd45a6e8f7b1d02d_thumbnail_900x.webp",
                    "https://img.ltwebstatic.com/images3_pi/2022/09/14/166313694495cfd7691ca5422891a3bd80f1a50c91_thumbnail_900x.webp",
                    "https://img.ltwebstatic.com/images3_pi/2021/07/26/16272673011d5d95943a7ef250d2190675a68d56e0_thumbnail_900x.webp",
                ],
                price: 282,
                colors: [
                    { id: 1, name: 'skyblue', img: "https://img.ltwebstatic.com/images3_pi/2023/03/17/1679030387b6eeb09f553300f8cd45a6e8f7b1d02d_thumbnail_900x.webp" },
                    { id: 2, name: 'white', img: "https://img.ltwebstatic.com/images3_pi/2022/09/14/166313694495cfd7691ca5422891a3bd80f1a50c91_thumbnail_900x.webp" },
                    { id: 3, name: 'mediumpurple', img: "https://img.ltwebstatic.com/images3_pi/2021/07/26/16272673011d5d95943a7ef250d2190675a68d56e0_thumbnail_900x.webp" },
                ],
                sizes: [
                    {
                        name: "S",
                        price: 282,
                        mesurements: [
                            {
                                name: "Bottom Length",
                                value: "40in"
                            },
                            {
                                name: "Hips",
                                value: "38.2in"
                            },
                            {
                                name: "Thigh",
                                value: "25.1in"
                            },
                            {
                                name: "Waist",
                                value: "38.6in"
                            },
                            {
                                name: "Bust",
                                value: "38.6in"
                            },
                            {
                                name: "Sleeve Width",
                                value: "38.6in"
                            },
                        ]
                    },
                    {
                        name: "M",
                        price: 282,
                        mesurements: [
                            {
                                name: "Length",
                                value: "45.2in"
                            },
                            {
                                name: "Hips",
                                value: "41.7in"
                            },
                            {
                                name: "Thigh",
                                value: "24.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                    {
                        name: "L",
                        price: 282,
                        mesurements: [
                            {
                                name: "Length",
                                value: "38.2in"
                            },
                            {
                                name: "Hips",
                                value: "40.7in"
                            },
                            {
                                name: "Thigh",
                                value: "22.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                    {
                        name: "XL",
                        price: 282,
                        mesurements: [
                            {
                                name: "Length",
                                value: "38.2in"
                            },
                            {
                                name: "Hips",
                                value: "40.7in"
                            },
                            {
                                name: "Thigh",
                                value: "22.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                    {
                        name: "XXL",
                        price: 282,
                        mesurements: [
                            {
                                name: "Length",
                                value: "38.2in"
                            },
                            {
                                name: "Hips",
                                value: "40.7in"
                            },
                            {
                                name: "Thigh",
                                value: "22.8in"
                            },
                            {
                                name: "Waist",
                                value: "32.6in"
                            },
                        ]
                    },
                ],
            },
        ],
        activeProduct: {},
        savedProducts: [],
    },
    getters: {
        getCategories(state) {
            return state.categories;
        },
        getProducts(state) {
            return state.products;
        },
        getProduct: (state) => (productId) => {
            let index = state.products.findIndex(product => product.id == productId);
            return state.products[index];
        },
        getSavedProducts(state) {
            return state.savedProducts;
          },
    },
    mutations: {
        selectProduct(state, product) {
            state.activeProduct = product;
        },
        saveProduct(state, data) {
            state.savedProducts.push(data)
        },
        unSaveProduct(state, productIndex) {
            state.savedProducts.splice(productIndex, 1)
        },
    },
    actions: {
        selectProduct({ commit }, product) {
            commit('selectProduct', product)
        },
        saveProduct({ commit }, data) {
            commit('saveProduct', data)
        },
        unSaveProduct({ commit }, productIndex) {
            commit('unSaveProduct', productIndex)
        },
    }
}