import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 1,
        slug: 1,
        name: 'Zuric two pc',
        moq: 12,
        info: '01-08-23636',
        images: [
          "https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2020/03/16/1584329043f6a2b7ff18eed10fc606d386136fec59_thumbnail_750x.webp",
          "https://img.ltwebstatic.com/images3_pi/2022/09/05/166236058465db391027c27d9351d3972053af2deb_thumbnail_750x.webp",
          "https://img.ltwebstatic.com/images3_pi/2021/01/18/1610969103d94c96d640a1de246d4e7cc1c104f08e_thumbnail_750x.webp",
          "https://img.ltwebstatic.com/images3_pi/2021/05/18/1621310932862051acf1a77dd2fa5d7b29c2064d3c_thumbnail_750x.webp",
        ],
        price: 650,
        // fav:false,
        colors: [
          { name: 'black' },
          { name: 'red' },
        ],
        sizes: [
          { name: 'S' },
          { name: 'M' },
          { name: 'L' },
          { name: 'F' }
        ]
      },
      {
        id: 2,
        slug: 2,
        name: 'Spun Twill 3 PC',
        moq: 10,
        info: '01-08-23636',
        images: [
          "https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images2_pi/2019/05/14/15578224524054588556_thumbnail_900x1199.webp",
          "https://img.ltwebstatic.com/images3_pi/2021/05/21/16215736080c2485af24a73cff52515c060d9c0e9e_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2021/05/25/162192916718585f2179949535d5de57db64572870_thumbnail_900x.webp",
        ],
        price: 820,
        colors: [
          { name: 'hotpink' },
          { name: 'greenyellow' },
        ],
        sizes: [
          { name: 'S' },
          { name: 'M' },
          { name: 'L' },
          { name: 'Free' }
        ]
      },
      {
        id: 3,
        slug: 3,
        name: 'RIB TOP',
        moq: 10,
        info: '01-08-23636',
        images: [
          "https://img.ltwebstatic.com/images3_pi/2019/11/27/157484286459ed9e2b1037c98c9ff519c695214cab_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2019/12/31/1577777275a6a049541520c22575516a85bc719dda_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2019/11/27/1574842852778931f48b996a3ba180d57176fc90d2_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2019/12/31/1577777275a6a049541520c22575516a85bc719dda_thumbnail_900x.webp",
        ],
        price: 250,
        colors: [
          { name: 'Yellow' },
          { name: 'khaki' },
        ],
        sizes: [
          { name: 'S' },
          { name: 'M' },
          { name: 'L' },
          { name: 'Free' }
        ]
      },
      {
        id: 4,
        slug: 4,
        name: 'Zuric two pc',
        moq: 10,
        info: '01-08-23636',
        images: [
          "https://img.ltwebstatic.com/images3_pi/2020/01/15/157908187102b895ac68d9286f66e7132bd7701940_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2019/09/29/1569747933696b184c8bfb16b7da53ae86f5aaf296_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2020/01/15/157908187102b895ac68d9286f66e7132bd7701940_thumbnail_900x.webp",
        ],
        price: 730,
        colors: [
          { name: 'brown' },
          { name: 'red' },
        ],
        sizes: [
          { name: 'S' },
          { name: 'M' },
          { name: 'L' },
          { name: 'Free' }
        ]
      },
      {
        id: 5,
        slug: 5,
        name: 'oversized t-shirt',
        moq: 10,
        info: '01-08-23636',
        images: [
          "https://img.ltwebstatic.com/images3_pi/2019/10/22/15717339355bd984905d3dad38aad16f10c8aa8a6d_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2021/01/13/1610505625cef5573c92b4d1df43eca292954c67e2_thumbnail_900x.webp",
        ],
        price: 324,
        colors: [
          { name: 'black' },
          { name: 'blue' },
        ],
        sizes: [
          { name: 'S' },
          { name: 'M' },
          { name: 'L' },
          { name: 'Free' }
        ]
      },
      {
        id: 6,
        slug: 6,
        name: '22y28 oversized',
        moq: 10,
        info: '01-08-23636',
        images: [
          "https://img.ltwebstatic.com/images3_pi/2023/03/17/1679030387b6eeb09f553300f8cd45a6e8f7b1d02d_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2022/09/14/166313694495cfd7691ca5422891a3bd80f1a50c91_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2021/07/26/16272673011d5d95943a7ef250d2190675a68d56e0_thumbnail_900x.webp",
        ],
        price: 282,
        colors: [
          { name: 'skyblue' },
          { name: 'mediumpurple' },
        ],
        sizes: [
          { name: 'S' },
          { name: 'M' },
          { name: 'L' },
          { name: 'Free' }
        ]
      },
    ],
    activeProduct: {},
    Prodamts: [
      {
        id: 1,
        ttlamount: "2001",
        avgrate: "562",
        ttlpieces: "15",
        imgdp: "img/icons/test1.png",
      },
      {
        id: 2,
        ttlamount: "2001",
        avgrate: "562",
        ttlpieces: "15",
        imgdp: "img/icons/pd1.png",
      },
      {
        id: 3,
        ttlamount: "2001",
        avgrate: "562",
        ttlpieces: "15",
        imgdp: "img/icons/pd2.png",
      },
    ],
    cart: [],
    // catelogcolors: [
    //   {
    //     id: 1,
    //     bgcolor: 'red'
    //   },
    //   {
    //     id: 2,
    //     bgcolor: 'yellow'
    //   },
    //   {
    //     id: 3,
    //     bgcolor: 'green'
    //   },
    // ],
    // catelogsizes: [
    //   {
    //     id: 1,
    //     size: 'XS'
    //   },
    //   {
    //     id: 2,
    //     size: 'S'
    //   },
    //   {
    //     id: 3,
    //     size: 'M'
    //   },
    // ],
    items: [
      {
        id: 1,
        title: 'Free guy',
        image: "https://img101.urbanic.com/v1/goods-pic/89b41fce1ea24186b598d94730aa28f5_w1000_q90.webp",
        decsription: 'A tour stop becomes a matter of life and death for a famous comic when the fallout from a night with his brother threatens to destroy everything he is built.',
        fav: false
      },

      {
        id: 2,
        title: 'true story',
        image: 'add.jpg',
        decsription: 'A tour stop becomes a matter of life and death for a famous comic when the fallout from a night with his brother threatens to destroy everything he is built.',
        fav: false
      },

      {
        id: 3,
        title: 'starwars',
        image: 'st.jpeg',
        decsription: 'A tour stop becomes a matter of life and death for a famous comic when the fallout from a night with his brother threatens to destroy everything he is built.',
        fav: false
      },

    ],
    gridprod: [
      {
        id: 1,
        img: '',
        title: 'title'
      }
    ],
    categories: [
      {
        id: 1,
        name: 'Women Ethnic',
        img: 'https://images.meesho.com/images/marketing/1591970222196_64.webp',
        child: {
          'Saree': [
            {
              id: 1,
              name: 'All  Saree',
              img: 'https://images.meesho.com/images/marketing/1628253480959_128.webp',
              route: '/CardCatelog'
            },
            {
              id: 2,
              name: 'Silk Saree',
              img: 'https://images.meesho.com/images/marketing/1628254422993_128.webp',
              route: ''
            },
            {
              id: 3,
              name: 'Banarasi Saree',
              img: 'https://images.meesho.com/images/marketing/1627307499577_128.webp',
              route: ''
            },
            {
              id: 4,
              name: 'Cotton Saree',
              img: 'https://images.meesho.com/images/marketing/1628254475139_128.webp',
              route: ''
            },
          ],
          'Kurtis': [
            {
              id: 1,
              name: 'All  Kurtis',
              img: 'https://images.meesho.com/images/marketing/1628254804698_128.webp',
              route: ''
            },
            {
              id: 2,
              name: 'Anarkali Kurtis',
              img: 'https://images.meesho.com/images/marketing/1628254828942_128.webp',
              route: ''
            },
            {
              id: 3,
              name: 'Rayon Kurtis',
              img: 'https://images.meesho.com/images/marketing/1628254817661_128.webp',
              route: ''
            },
            {
              id: 4,
              name: 'Cotton Kurtis',
              img: 'https://images.meesho.com/images/marketing/1628254850568_128.webp',
              route: ''
            },
          ],
          'Kurta Sets': [
            {
              id: 1,
              name: 'All Kurta Sets',
              img: 'https://images.meesho.com/images/marketing/1628254913741_128.webp',
              route: ''
            },
            {
              id: 2,
              name: 'Kurta Palazzo Sets',
              img: 'https://images.meesho.com/images/marketing/1628254949594_128.webp',
              route: ''
            },
            {
              id: 3,
              name: 'Rayon Kurta Sets',
              img: 'https://images.meesho.com/images/marketing/1628254965801_128.webp',
              route: ''
            },
            {
              id: 4,
              name: 'Kurta Pant Sets',
              img: 'https://images.meesho.com/images/marketing/1628254984268_128.webp',
              route: ''
            },
          ],
        },
      },
      {
        id: 2,
        name: 'Mens',
        img: 'https://images.meesho.com/images/marketing/1591969710874_64.webp',
        child: {
          'All Top Wear': [
            {
              id: 1,
              name: 'All Topp Wear',
              img: 'https://images.meesho.com/images/marketing/1628498638653_128.webp',
              route: ''
            },
            {
              id: 2,
              name: 'Tshirts',
              img: 'https://images.meesho.com/images/marketing/1628498668553_128.webp',
              route: ''
            },
            {
              id: 3,
              name: 'Winter Wear',
              img: 'https://images.meesho.com/images/marketing/1628498680565_128.webp',
              route: ''
            },
            {
              id: 4,
              name: 'Jackets',
              img: 'https://images.meesho.com/images/marketing/1628505632993_128.webp',
              route: ''
            },
          ],
          'Bottom Wear': [
            {
              id: 1,
              name: 'Track Pants',
              img: 'https://images.meesho.com/images/marketing/1628504968143_128.webp',
              route: ''
            },
            {
              id: 2,
              name: 'All Bottomwear',
              img: 'https://images.meesho.com/images/marketing/1628498099046_128.webp',
              route: ''
            },
            {
              id: 3,
              name: 'Jeans',
              img: 'https://images.meesho.com/images/marketing/1627308091126_128.webp',
              route: ''
            },
            {
              id: 4,
              name: 'Trousers',
              img: 'https://images.meesho.com/images/marketing/1627308263559_128.webp',
              route: ''
            },
          ],
          'Men Accessories': [
            {
              id: 1,
              name: 'All  Men Accessories',
              img: 'https://images.meesho.com/images/marketing/1592857892925_128.webp',
              route: ''
            },
            {
              id: 2,
              name: 'Watches',
              img: 'https://images.meesho.com/images/marketing/1592857905637_128.webp',
              route: ''
            },
            {
              id: 3,
              name: 'Belts & Wallets',
              img: 'https://images.meesho.com/images/marketing/1628502661225_128.webp',
              route: ''
            },
            {
              id: 4,
              name: 'Jewellery',
              img: 'https://images.meesho.com/images/marketing/1592857860011_128.webp',
              route: ''
            },
          ],
        },
      },
      {
        id: 3,
        name: 'Kids',
        img: 'https://images.meesho.com/images/marketing/1591969693743_64.webp',
        child: {
          'Boys & Girls 2+ Years': [
            {
              id: 1,
              name: 'Dresses',
              img: 'https://images.meesho.com/images/marketing/1628499074612_128.webp',
              route: '/CardCatelog'
            },
            {
              id: 2,
              name: 'Boys Sets',
              img: 'https://images.meesho.com/images/marketing/1628499064328_128.webp',
              route: ''
            },
            {
              id: 3,
              name: 'Girls Sets',
              img: 'https://images.meesho.com/images/marketing/1628499030211_128.webp',
              route: ''
            },
            {
              id: 4,
              name: 'Ethnicwear',
              img: 'https://images.meesho.com/images/marketing/1628499120147_128.webp',
              route: ''
            },
          ],
          'Infant 0-2 Years': [
            {
              id: 1,
              name: 'Rompers',
              img: 'https://images.meesho.com/images/marketing/1628498914501_128.webp',
              route: ''
            },
            {
              id: 2,
              name: 'Baby Sets',
              img: 'https://images.meesho.com/images/marketing/1628498890502_128.webp',
              route: ''
            },
            {
              id: 3,
              name: 'Ethnicwear',
              img: 'https://images.meesho.com/images/marketing/1628499120147_128.webp',
              route: ''
            },
          ],
          'Toys & Accessories': [
            {
              id: 1,
              name: 'Soft Toys',
              img: 'https://images.meesho.com/images/marketing/1628498835170_128.webp',
              route: ''
            },
            {
              id: 2,
              name: 'Footwear',
              img: 'https://images.meesho.com/images/marketing/1628499170267_128.webp',
              route: ''
            },
            {
              id: 3,
              name: 'Stationery',
              img: 'https://images.meesho.com/images/marketing/1628499189599_128.webp',
              route: ''
            },
            {
              id: 4,
              name: 'Watches',
              img: 'https://images.meesho.com/images/marketing/1628499200471_128.webp',
              route: ''
            },
          ],
        },
      },
      {
        id: 4,
        name: 'Home & Kitchen',
        img: 'https://images.meesho.com/images/marketing/1591969654748_64.webp',
        child: {
          'Kitchen & Appliances': [
            {
              id: 1,
              name: 'View All',
              img: 'https://images.meesho.com/images/marketing/1628502636700_128.webp',
              route: ''
            },
            {
              id: 2,
              name: 'Kitchen Tools',
              img: 'https://images.meesho.com/images/marketing/1627308552605_128.webp  ',
              route: ''
            },
            {
              id: 3,
              name: 'STorage & Organizers',
              img: 'https://images.meesho.com/images/marketing/1627308536034_128.webp',
              route: ''
            },
            {
              id: 4,
              name: 'Appliances',
              img: 'https://images.meesho.com/images/marketing/1628501692361_128.webp',
              route: ''
            },
          ],
          'Home Furnishing': [
            {
              id: 1,
              name: 'Bedsheets',
              img: 'https://images.meesho.com/images/marketing/1628501227809_128.webp',
              route: ''
            },
            {
              id: 2,
              name: 'Curtains & Sheets  ',
              img: 'https://images.meesho.com/images/marketing/1628501241502_128.webp',
              route: ''
            },
            {
              id: 3,
              name: 'Cushions & Cover',
              img: 'https://images.meesho.com/images/marketing/1627308752650_128.webp',
              route: ''
            },
            {
              id: 4,
              name: 'Carpets & Doormats',
              img: 'https://images.meesho.com/images/marketing/1627381851512_128.webp',
              route: ''
            },
          ],
          'Home Decor': [
            {
              id: 1,
              name: 'All Home Decor',
              img: 'https://images.meesho.com/images/marketing/1628503526983_128.webp',
              route: ''
            },
            {
              id: 2,
              name: 'Appliances & Cover',
              img: 'https://images.meesho.com/images/marketing/1628503776002_128.webp',
              route: ''
            },
            {
              id: 3,
              name: 'Clocks',
              img: 'https://images.meesho.com/images/marketing/1628501425651_128.webp',
              route: ''
            },
            {
              id: 4,
              name: 'Showpieces',
              img: 'https://images.meesho.com/images/marketing/1628503539564_128.webp',
              route: ''
            },
          ],
        },
      },
      {
        id: 5,
        name: 'Beauty & Health',
        img: 'https://images.meesho.com/images/marketing/1591969736036_64.webp',
        child: {
          'Make Up': [
            {
              id: 1,
              name: 'Face',
              img: 'https://images.meesho.com/images/marketing/1628501667113_128.webp',
              route: ''
            },
            {
              id: 2,
              name: 'Eyes',
              img: 'https://images.meesho.com/images/marketing/1628501717169_128.webp ',
              route: ''
            },
            {
              id: 3,
              name: 'Lips',
              img: 'https://images.meesho.com/images/marketing/1628501657058_128.webp',
              route: ''
            },
            {
              id: 4,
              name: 'Nails',
              img: 'https://images.meesho.com/images/marketing/1628501633587_128.webp',
              route: ''
            },
          ],
          'Skincare': [
            {
              id: 1,
              name: 'View All',
              img: 'https://images.meesho.com/images/marketing/1628502636700_128.webp',
              route: ''
            },
            {
              id: 2,
              name: 'Face Masks & Peels',
              img: 'https://images.meesho.com/images/marketing/1627309069394_128.webp',
              route: ''
            },
            {
              id: 3,
              name: 'Facecare',
              img: 'https://images.meesho.com/images/marketing/1628501935285_128.webp',
              route: ''
            },
            {
              id: 4,
              name: 'Haircare',
              img: 'https://images.meesho.com/images/marketing/1628501905162_128.webp',
              route: ''
            },
          ],
          'Baby & Mom': [
            {
              id: 1,
              name: 'All Home Decor',
              img: 'https://images.meesho.com/images/marketing/1628502179597_128.webp',
              route: ''
            },
            {
              id: 2,
              name: 'Mom Care',
              img: 'https://images.meesho.com/images/marketing/1628502200627_128.webp',
              route: ''
            },
          ],
        },
      },
      {
        id: 6,
        name: 'Jewellery & Accessories',
        img: 'https://images.meesho.com/images/marketing/1591969678285_64.webp',
        child: {
          'Jewellery': [
            {
              id: 1,
              name: 'All Jewellery',
              img: 'https://images.meesho.com/images/marketing/1628502583496_128.webp',
              route: ''
            },
            {
              id: 2,
              name: 'Jewellery Set',
              img: 'https://images.meesho.com/images/marketing/1628502461250_128.webp',
              route: ''
            },
            {
              id: 3,
              name: 'Earings & Studs',
              img: 'https://images.meesho.com/images/marketing/1628502488682_128.webp',
              route: ''
            },
            {
              id: 4,
              name: 'Mangalsutras',
              img: 'https://images.meesho.com/images/marketing/1628502447712_128.webp',
              route: ''
            },
          ],
          'Men Accessories': [
            {
              id: 1,
              name: 'All  Men Accessories',
              img: 'https://images.meesho.com/images/marketing/1592857892925_128.webp',
              route: ''
            },
            {
              id: 2,
              name: 'Watches',
              img: 'https://images.meesho.com/images/marketing/1592857905637_128.webp',
              route: ''
            },
            {
              id: 3,
              name: 'Belts & Wallets',
              img: 'https://images.meesho.com/images/marketing/1628502661225_128.webp',
              route: ''
            },
            {
              id: 4,
              name: 'Caps & Hats',
              img: 'https://images.meesho.com/images/marketing/1627309261030_128.webp',
              route: ''
            },
          ],
          'Women Accessories': [
            {
              id: 1,
              name: 'Hair Accessories',
              img: 'https://images.meesho.com/images/marketing/1628502779717_128.webp',
              route: ''
            },
            {
              id: 2,
              name: 'Sunglasses',
              img: 'https://images.meesho.com/images/marketing/1628502769274_128.webp',
              route: ''
            },
            {
              id: 3,
              name: 'Socks',
              img: 'https://images.meesho.com/images/marketing/1628502716131_128.webp',
              route: ''
            },
            {
              id: 4,
              name: 'Scarves & Stoles',
              img: 'https://images.meesho.com/images/marketing/1627309283025_128.webp',
              route: ''
            },
          ],
        },
      },
      {
        id: 7,
        name: 'Bags & Footwear',
        img: 'https://images.meesho.com/images/marketing/1591969621244_64.webp',
        child: {
          'Women Bags': [
            {
              id: 1,
              name: 'All Women Bags',
              img: 'https://images.meesho.com/images/marketing/1628502877981_128.webp',
              route: ''
            },
            {
              id: 2,
              name: 'Handbags',
              img: 'https://images.meesho.com/images/marketing/1628502900216_128.webp',
              route: ''
            },
            {
              id: 3,
              name: 'Clutches',
              img: 'https://images.meesho.com/images/marketing/1627309308539_128.webp',
              route: ''
            },
            {
              id: 4,
              name: 'Slingbags',
              img: 'https://images.meesho.com/images/marketing/1628502889141_128.webp',
              route: ''
            },
          ],
          'Men Bags': [
            {
              id: 1,
              name: 'Men Wallets',
              img: 'https://images.meesho.com/images/marketing/1628502864037_128.webp',
              route: ''
            },
            {
              id: 2,
              name: 'Crossbody Bags & Sling Bags',
              img: 'https://images.meesho.com/images/marketing/1650357577770_128.webp',
              route: ''
            },
            {
              id: 3,
              name: 'Waist Bags',
              img: 'https://images.meesho.com/images/marketing/1650357638462_128.webp',
              route: ''
            },
          ],
          'Men Footwear': [
            {
              id: 1,
              name: 'Sports Shoes',
              img: 'https://images.meesho.com/images/marketing/1628494549849_128.webp',
              route: ''
            },
            {
              id: 2,
              name: 'Casual Shoes',
              img: 'https://images.meesho.com/images/marketing/1627309366343_128.webp',
              route: ''
            },
            {
              id: 3,
              name: 'Formal Shoes',
              img: 'https://images.meesho.com/images/marketing/1627309386997_128.webp',
              route: ''
            },
            {
              id: 4,
              name: 'Sandals',
              img: 'https://images.meesho.com/images/marketing/1627309376767_128.webp',
              route: ''
            },
          ],
        },
      },

    ],
    orders: [
      {
        id: 1,
        img: 'img/products/21435.jpg',
        title: '01-20-23188',
        pcs: '1000',
        readyQty: '300 pcs',
        fullQty: '7 Days',
        date: '700 pcs',
        action: 'Order is Accepted as it is',
        bal: '1000',
        time: '7 Days',
        coming: '300',
        received: '300',
        updatedbal: '700',
        pull: '0',
        push: '300',
      },
      {
        id: 2,
        img: 'img/products/21467.jpg',
        title: '01-20-23188',
        pcs: '5000',
        readyQty: '300 pcs',
        fullQty: '7 Days',
        date: '700 pcs',
        action: 'Send me Only Ready Qty of 300 pcs',
        bal: '1000',
        time: '7 Days',
        coming: '200',
        received: '200',
        updatedbal: '800',
        pull: '0',
        push: '300',
      },
      {
        id: 3,
        img: 'img/products/23188.jpg',
        title: '01-20-23188',
        pcs: '9000',
        readyQty: '300 pcs',
        fullQty: '7 Days',
        date: '700 pcs',
        action: 'Send me Only Ready Qty of 300 pcs',
        bal: '1000',
        time: '7 Days',
        coming: '200',
        received: '200',
        updatedbal: '800',
        pull: '0',
        push: '300',
      },
    ],
    

  },
  getters: {
    getColors(state) {
      return state.colors;
    },
    getCategories(state) {
      return state.categories;
    },
    getCart(state) {
      return state.cart;
    },
    getProdamts(state) {
      return state.Prodamts;
    },
    getProduct: (state) => (productId) => {
      let index = state.products.findIndex(product => product.id == productId);
      return state.products[index];
    },

    getProducts(state) {
      return state.products;
    },

    getActiveProduct(state) {
      return state.activeProduct;
    },
    getCatelogColor(state) {
      return state.catelogcolors
    },
    getCatelogSize(state) {
      return state.catelogsizes
    },
    items(s) {
      return s.items
    },
    getgridprod(state) {
      return state.gridprod
    },
    getOrders(state) {
      return state.orders
    },
   
  },
  mutations: {
    changecolor(state, color) {
      // state.colors.push(color)

      var index = state.colors.findIndex(c => c.id == color.id);
      state.colors[index] = color;
    },
    addToCart(state, data) {
      let product = data.product;
      let index = state.cart.findIndex(c => c.id = product.id)
      console.log(index);
      if (Object.keys(state.cart).length) {
        // let index = state.cart.filter((item) => {
        //   if (item.id === product.id) {
        //    return item; 
        //   }
        // })
        // console.log(index);


        // state.cart.forEach((item) => {
        //   if (item.id === product.id) {
        //     item.quantity = data.quantity
        //     console.log('match')
        //   }
        //   else {
        //     console.log('not match')
        //     item.id = product.id;
        //     product.quantity = data.quantity;
        //     state.cart.push(product);
        //   }
        // })
      } else {
        console.log('first')
        product.quantity = data.quantity;
        state.cart.push(product);
      }
    },
    //   // if (state.cart.length) {
    //   //   const test = state.cart.findIndex((c) => c.id === data.id);
    //   //   if (test !== -1) {
    //   //     state.cart = [
    //   //       ...state.cart.map((item) =>
    //   //         item.id !== data.id ? item : { ...item, ...data }
    //   //       )
    //   //     ];
    //   //     state.cart = state.cart.filter((c) => c.quantity !== 0);
    //   //   } else {
    //   //     if (data.quantity) state.cart.push(data);
    //   //   }
    //   //   return;
    //   // }
    //   // if (data.quantity) state.cart.push(data);

    //   // var alreadyInCartIndex = state.cart.findIndex(item => item.id === product.id)
    //   //     if(alreadyInCartIndex){
    //   //       alreadyInCartIndex.quantity ++1;
    //   //       // state.cart.push(product.quantity)
    //   //       console.log(product);
    //   //     } else {
    //   //       alreadyInCartIndex.quantity --1;
    //   //     }
    //   // else{
    //   //   state.cart.push(product.quantity)
    //   // }



    //   // state.pieces.forEach((piece) => {
    //   //   let size = piece.size;
    //   //   let sizeQuantity = data.quantity[size];
    //   //   if (sizeQuantity) {
    //   //     let divisor = Object.keys(piece.colors).length;
    //   //     piece.colors.forEach((color, colorIndex) => {
    //   //       let newPiece = piece;
    //   //       var alreadyInCartIndex = state.cart.findIndex(item => item.id == newPiece.id);
    //   //       if (alreadyInCartIndex) {
    //   //         // Update 
    //   //         state.cart[alreadyInCartIndex].colors[colorIndex].quantity = sizeQuantity / divisor;
    //   //       } else {
    //   //         // New 
    //   //         newPiece.colors[colorIndex].quantity = sizeQuantity / divisor;
    //   //         state.cart.push(newPiece);
    //   //       }
    //   //     });
    //   //   } else {
    //   //     // Reset
    //   //     piece.colors.forEach((color, colorIndex) => {
    //   //       let newPiece = piece;
    //   //       var alreadyInCartIndex = state.cart.findIndex(item => item.id == newPiece.id);
    //   //       if (alreadyInCartIndex) {
    //   //         state.cart[alreadyInCartIndex].colors[colorIndex].quantity = 0;
    //   //       }
    //   //     });
    //   //   }

    //   //   state.cart.forEach(cartItem => {
    //   //     cartItem.sub_total = 0;
    //   //     cartItem.colors.forEach(color => {
    //   //       if (parseInt(color.quantity)) {
    //   //         cartItem.sub_total = +cartItem.sub_total + parseInt(color.price * color.quantity);
    //   //       }
    //   //     });
    //   //   });

    //   // });
    // },



    addItem(state, payload) {
      if (state.cart.length) {
        const idx = state.cart.findIndex((c) => c.id === payload.id);
        if (idx !== -1) {
          state.cart = [
            ...state.cart.map((item) =>
              item.id !== payload.id ? item : { ...item, ...payload }
            )
          ];
          state.cart = state.cart.filter((c) => c.quantity !== 0);
        } else {
          if (payload.quantity) state.cart.push(payload);
        }
        return;
      }
      if (payload.quantity) state.cart.push(payload);
    },

    // addToCart(state, data) {
    //   // let product = data.product
    //   if (state.cart.length) {
    //     const idx = state.cart.findIndex((c) => c.id === data.id);
    //     if (idx !== -1) {
    //       state.cart = [
    //         ...state.cart.map((item) =>
    //           item.id !== data.id ? item : { ...item, ...data }
    //         )
    //       ];
    //       state.cart = state.cart.filter((c) => c.quantity !== 0);
    //     } else {
    //       if (data.product) state.cart.push(data);
    //     }
    //     return;
    //   }
    //   if (data.quantity) state.cart.push(data);
    // },

    updateQuantity(state, data) {
      // console.log(data);
      // let array = data.quantity;

      state.pieces.forEach((piece, pieceIndex) => {
        let size = piece.size;

        let sizeQuantity = data.quantity[size];
        if (sizeQuantity) {
          let divisor = Object.keys(piece.colors).length;
          piece.colors.forEach((color, colorIndex) => {
            state.pieces[pieceIndex].colors[colorIndex].quantity = sizeQuantity / divisor
          });
          // console.log(divisor);
        } else {
          piece.colors.forEach((color, colorIndex) => {
            state.pieces[pieceIndex].colors[colorIndex].quantity = 0
          });
        }
      });



      // for (let index = 0; index < Object.entries(array).length; index++) {
      //   const element = array[index];
      //   console.log(element); 
      // }

      // data.quantity.forEach(quantity => {
      //   let array = quantity.split("x");
      //   let pieceId = array[0];
      //   let colorId = array[1];
      //   var pieceIndex = state.pieces.findIndex(p => p.id == pieceId);
      //   var colorIndex = state.pieces[pieceIndex].colors.findIndex(c => c.id == colorId);
      //   state.pieces[pieceIndex].colors[colorIndex].quantity = data.quantity[parseInt(pieceId) + 'x' + parseInt(colorId)];
      // });

      state.pieces.forEach(piece => {
        piece.sub_total = 0;
        piece.colors.forEach(color => {
          if (parseInt(color.quantity)) {
            piece.sub_total = +piece.sub_total + parseInt(color.price * color.quantity);
          }
        });
      });

    },
    selectProduct(state, product) {
      state.activeProduct = product;
    },
    // addToFav: (state, id) => {
    //   state.items[state.items.findIndex(item => item.id == id)].fav = true;
    // }
    
  },
  actions: {
    addToCart({ commit }, data) {
      commit('addToCart', data)
    },
    updateQuantity({ commit }, data) {
      commit('updateQuantity', data)
    },
    updatecolor({ commit }, color) {
      commit('changecolor', color)
    },
    selectProduct({ commit }, product) {
      commit('selectProduct', product)
    },
   
    addItem(context, item) {
      context.commit("addItem", item);
    }
  },

});



