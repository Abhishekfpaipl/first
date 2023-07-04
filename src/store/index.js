import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 1,
        slug: 1,
        name: 'Zuric two pc dfsdfsdfsdfdsfsdfsd',
        moq: 12,
        info: '#23636',
        fabric:'Fabic',
        favourite: false,
        images: [
          "https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2020/03/16/1584329043f6a2b7ff18eed10fc606d386136fec59_thumbnail_750x.webp",
          "https://img.ltwebstatic.com/images3_pi/2022/09/05/166236058465db391027c27d9351d3972053af2deb_thumbnail_750x.webp",
          "https://img.ltwebstatic.com/images3_pi/2021/01/18/1610969103d94c96d640a1de246d4e7cc1c104f08e_thumbnail_750x.webp",
          "https://img.ltwebstatic.com/images3_pi/2021/05/18/1621310932862051acf1a77dd2fa5d7b29c2064d3c_thumbnail_750x.webp",
        ],
        price: 6500,
        // fav:false,
        colors: [
          { id: 1, name: 'black', img: "https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp" },
          { id: 2, name: 'red',img: "https://img.ltwebstatic.com/images3_pi/2020/03/16/1584329043f6a2b7ff18eed10fc606d386136fec59_thumbnail_750x.webp" },
          { id: 2, name: 'white',img: "https://img.ltwebstatic.com/images3_pi/2022/09/05/166236058465db391027c27d9351d3972053af2deb_thumbnail_750x.webp" },
          { id: 2, name: 'green',img: "https://img.ltwebstatic.com/images3_pi/2021/01/18/1610969103d94c96d640a1de246d4e7cc1c104f08e_thumbnail_750x.webp" },
          { id: 2, name: 'purple',img: "https://img.ltwebstatic.com/images3_pi/2021/05/18/1621310932862051acf1a77dd2fa5d7b29c2064d3c_thumbnail_750x.webp"},
        ],
        // sizes: [
        //   { id: 1, name: 'S', price: '6500', },
        //   { id: 2, name: 'M', price: '6500' },
        //   { id: 3, name: 'L', price: '6500' },
        //   { id: 4, name: 'F', price: '6500' },
        //   { id: 5, name: 'XL', price: '6500' },
        //   { id: 6, name: '2XL', price: '6500' },
        // ],
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
            price: '6500',
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
            price: '6500',
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
            price: '6500',
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
            price: '6500',
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
        info: '01-08-23636',
        favourite: false,
        images: [
          "https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images2_pi/2019/05/14/15578224524054588556_thumbnail_900x1199.webp",
          "https://img.ltwebstatic.com/images3_pi/2021/05/21/16215736080c2485af24a73cff52515c060d9c0e9e_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2021/05/25/162192916718585f2179949535d5de57db64572870_thumbnail_900x.webp",
        ],
        price: 820,
        colors: [
          { id: 1, name: 'hotpink', img:"https://img.ltwebstatic.com/images3_pi/2019/12/23/15770878616a86e80aeb3e5c5667029c6ad6d4cab9_thumbnail_900x.webp" },
          { id: 2, name: 'greenyellow', img:"https://img.ltwebstatic.com/images2_pi/2019/05/14/15578224524054588556_thumbnail_900x1199.webp" },
          { id: 2, name: 'voilet', img:"https://img.ltwebstatic.com/images3_pi/2021/05/21/16215736080c2485af24a73cff52515c060d9c0e9e_thumbnail_900x.webp"},
          { id: 2, name: 'cyan', img:"https://img.ltwebstatic.com/images3_pi/2021/05/25/162192916718585f2179949535d5de57db64572870_thumbnail_900x.webp"},
        ],
        // sizes: [
        //   { id: 1, name: 'S', price: 820, },
        //   { id: 2, name: 'M', price: 820, },
        //   { id: 3, name: 'L', price: 820, },
        //   { id: 4, name: 'F', price: 820, }
        // ],
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
        info: '01-08-23636',
        favourite: false,
        images: [
          "https://img.ltwebstatic.com/images3_pi/2019/11/27/157484286459ed9e2b1037c98c9ff519c695214cab_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2019/12/31/1577777275a6a049541520c22575516a85bc719dda_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2019/11/27/1574842852778931f48b996a3ba180d57176fc90d2_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2019/12/31/1577777275a6a049541520c22575516a85bc719dda_thumbnail_900x.webp",
        ],
        price: 250,
        colors: [
          { id: 1, name: 'Yellow', img:"https://img.ltwebstatic.com/images3_pi/2019/11/27/157484286459ed9e2b1037c98c9ff519c695214cab_thumbnail_900x.webp" },
          { id: 2, name: 'purple', img:"https://img.ltwebstatic.com/images3_pi/2019/12/31/1577777275a6a049541520c22575516a85bc719dda_thumbnail_900x.webp" },
          { id: 3, name: 'green', img:"https://img.ltwebstatic.com/images3_pi/2019/11/27/1574842852778931f48b996a3ba180d57176fc90d2_thumbnail_900x.webp"},
          { id: 4, name: 'khaki', img:"https://img.ltwebstatic.com/images3_pi/2019/12/31/1577777275a6a049541520c22575516a85bc719dda_thumbnail_900x.webp" },
        ],
        // sizes: [
        //   { id: 1, name: 'S', price: 250, },
        //   { id: 2, name: 'M', price: 250, },
        //   { id: 3, name: 'L', price: 250, },
        //   { id: 4, name: 'F', price: 250, }
        // ],
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
        info: '01-08-23636',
        favourite: false,
        images: [
          "https://img.ltwebstatic.com/images3_pi/2020/01/15/157908187102b895ac68d9286f66e7132bd7701940_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2019/09/29/1569747933696b184c8bfb16b7da53ae86f5aaf296_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2020/01/15/157908187102b895ac68d9286f66e7132bd7701940_thumbnail_900x.webp",
        ],
        price: 730,
        colors: [
          { id: 1, name: 'brown', img:"https://img.ltwebstatic.com/images3_pi/2020/01/15/157908187102b895ac68d9286f66e7132bd7701940_thumbnail_900x.webp" },
          { id: 2, name: 'red', img:"https://img.ltwebstatic.com/images3_pi/2019/09/29/1569747933696b184c8bfb16b7da53ae86f5aaf296_thumbnail_900x.webp"},
          { id: 3, name: 'brown', img:"https://img.ltwebstatic.com/images3_pi/2020/01/15/157908187102b895ac68d9286f66e7132bd7701940_thumbnail_900x.webp" },
        ],
        // sizes: [
        //   { id: 1, name: 'S', price: 730, },
        //   { id: 2, name: 'M', price: 730, },
        //   { id: 3, name: 'L', price: 730, },
        //   { id: 4, name: 'F', price: 730, }
        // ],
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
        info: '01-08-23636',
        favourite: false,
        images: [
          "https://img.ltwebstatic.com/images3_pi/2019/10/22/15717339355bd984905d3dad38aad16f10c8aa8a6d_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2021/01/13/1610505625cef5573c92b4d1df43eca292954c67e2_thumbnail_900x.webp",
        ],
        price: 324,
        colors: [
          { id: 1, name: 'black', img:"https://img.ltwebstatic.com/images3_pi/2019/10/22/15717339355bd984905d3dad38aad16f10c8aa8a6d_thumbnail_900x.webp" },
          { id: 2, name: 'blue', img:"https://img.ltwebstatic.com/images3_pi/2021/01/13/1610505625cef5573c92b4d1df43eca292954c67e2_thumbnail_900x.webp" },
        ],
        // sizes: [
        //   { id: 1, name: 'S', price: 324, },
        //   { id: 2, name: 'M', price: 324, },
        //   { id: 3, name: 'L', price: 324, },
        //   { id: 4, name: 'F', price: 324, }
        // ],
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
        info: '01-08-23636',
        favourite: false,
        images: [
          "https://img.ltwebstatic.com/images3_pi/2023/03/17/1679030387b6eeb09f553300f8cd45a6e8f7b1d02d_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2022/09/14/166313694495cfd7691ca5422891a3bd80f1a50c91_thumbnail_900x.webp",
          "https://img.ltwebstatic.com/images3_pi/2021/07/26/16272673011d5d95943a7ef250d2190675a68d56e0_thumbnail_900x.webp",
        ],
        price: 282,
        colors: [
          { id: 1, name: 'skyblue', img: "https://img.ltwebstatic.com/images3_pi/2023/03/17/1679030387b6eeb09f553300f8cd45a6e8f7b1d02d_thumbnail_900x.webp"},
          { id: 2, name: 'white', img:"https://img.ltwebstatic.com/images3_pi/2022/09/14/166313694495cfd7691ca5422891a3bd80f1a50c91_thumbnail_900x.webp" },
          { id: 3, name: 'mediumpurple', img:"https://img.ltwebstatic.com/images3_pi/2021/07/26/16272673011d5d95943a7ef250d2190675a68d56e0_thumbnail_900x.webp"},
        ],
        // sizes: [
        //   { id: 1, name: 'S', price: 282, },
        //   { id: 2, name: 'M', price: 282, },
        //   { id: 3, name: 'L', price: 282, },
        //   { id: 4, name: 'F', price: 282, }
        // ],
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
    Prodamts: [
      {
        id: 1,
        ttlamount: "2001",
        img: "img/icons/test1.png",
        avgrate: "562",
        ttlpieces: "15",
      },
      // {
      //   id: 2,
      //   ttlamount: "2001",
      //   avgrate: "562",
      //   ttlpieces: "15",
      //   imgdp: "img/icons/pd1.png",
      // },
      // {
      //   id: 3,
      //   ttlamount: "2001",
      //   avgrate: "562",
      //   ttlpieces: "15",
      //   imgdp: "img/icons/pd2.png",
      // },
    ],
    cart: [],

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
        name: 'Special Prices',
        slug: 'special-price',
        img: 'https://images.meesho.com/images/marketing/1591970222196_64.webp',
        child: {
          '': [
            {
              id: 1,
              name: 'Dresses',
              img: 'https://static2.urbanic.com/images/v/edb847e55d548b3075bef1914867caf3.png',
              route: '/CardCatelog/Category1',
            },
            {
              id: 2,
              name: 'Blouses',
              img: 'https://static2.urbanic.com/images/v/390ab1c0d82c576495e47cbb2cc0ada4.jpeg',
              route: '/CardCatelog/category2'
            },
            {
              id: 3,
              name: 'Bottoms',
              img: 'https://static2.urbanic.com/images/v/7346bf39cb60692f982ce28b58653b12.jpeg',
              route: '/CardCatelog/category3'
            },
            {
              id: 4,
              name: 'Top & T-shirts',
              img: 'https://static2.urbanic.com/images/v/3e41f5da8f8925b7e7afbb1fef946c88.jpeg',
              route: '/catelog-page'
            },
            {
              id: 5,
              name: 'Sweaters & Hoodies',
              img: 'https://static2.urbanic.com/images/v/9e866d4c97ef735d69760c24caa81f70.png',
              route: ''
            },
            {
              id: 6,
              name: 'Coats & Jackets',
              img: 'https://static2.urbanic.com/images/v/c861bf16be26f9e1c9b9594a99c4ac4c.jpg',
              route: ''
            },
            {
              id: 7,
              name: 'Co-Ords & Jumpsuits',
              img: 'https://static2.urbanic.com/images/v/fcd5d74c6b3b04b48e0e1809dcca0802.jpeg',
              route: ''
            },
            {
              id: 8,
              name: 'Demin',
              img: 'https://static2.urbanic.com/images/v/f54914eb22ad1e47e7e39d2b17c36a10.png',
              route: ''
            },
          ],

          // 'Blouses': [
          //   {
          //     id: 1,
          //     name: 'All  Kurtis',
          //     img: 'https://images.meesho.com/images/marketing/1628254804698_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 2,
          //     name: 'Anarkali Kurtis',
          //     img: 'https://images.meesho.com/images/marketing/1628254828942_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 3,
          //     name: 'Rayon Kurtis',
          //     img: 'https://images.meesho.com/images/marketing/1628254817661_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 4,
          //     name: 'Cotton Kurtis',
          //     img: 'https://images.meesho.com/images/marketing/1628254850568_128.webp',
          //     route: ''
          //   },
          // ],

          // 'Bottoms': [
          //   {
          //     id: 1,
          //     name: 'All Kurta Sets',
          //     img: 'https://images.meesho.com/images/marketing/1628254913741_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 2,
          //     name: 'Kurta Palazzo Sets',
          //     img: 'https://images.meesho.com/images/marketing/1628254949594_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 3,
          //     name: 'Rayon Kurta Sets',
          //     img: 'https://images.meesho.com/images/marketing/1628254965801_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 4,
          //     name: 'Kurta Pant Sets',
          //     img: 'https://images.meesho.com/images/marketing/1628254984268_128.webp',
          //     route: ''
          //   },
          // ],
        },
      },
      {
        id: 2,
        name: 'Dresses',
        slug: 'dresses',
        img: 'https://images.meesho.com/images/marketing/1591969710874_64.webp',
        child: {
          '': [
            {
              id: 1,
              name: 'A-Line Dresses',
              img: 'https://static2.urbanic.com/images/feeds/1673853318649/3R5A9367_1_1.png',
              route: ''
            },
            {
              id: 2,
              name: 'Bodycon Dresses',
              img: 'https://static2.urbanic.com/images/feeds/1673849284135/3R5A9552_1.png',
              route: ''
            },
            {
              id: 3,
              name: 'Party Dresses',
              img: 'https://static2.urbanic.com/images/feeds/1673852485950/3R5A9440_1_1-.png',
              route: ''
            },
            {
              id: 4,
              name: 'Sweater Dresses',
              img: 'https://static2.urbanic.com/images/feeds/1673853341256/3R5A9420_1_1.png',
              route: ''
            },
            {
              id: 5,
              name: 'Shirt Dresses',
              img: 'https://static2.urbanic.com/images/feeds/1675143512010/3R5A9404_1_1-.png',
              route: ''
            },
            {
              id: 6,
              name: 'Slip Dresses',
              img: 'https://static2.urbanic.com/images/feeds/1673853399045/3R5A9443_1_1.png',
              route: ''
            },
            {
              id: 7,
              name: 'Short sleeved Dress',
              img: 'https://static2.urbanic.com/images/feeds/1673853413306/3R5A9364_1_1.png',
              route: ''
            },
            {
              id: 8,
              name: 'Long sleeved Dress',
              img: 'https://static2.urbanic.com/images/feeds/1673850806771/3R5A9829_1_1.png',
              route: ''
            },
          ],
          // 'Bottom Wear': [
          //   {
          //     id: 1,
          //     name: 'Track Pants',
          //     img: 'https://images.meesho.com/images/marketing/1628504968143_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 2,
          //     name: 'All Bottomwear',
          //     img: 'https://images.meesho.com/images/marketing/1628498099046_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 3,
          //     name: 'Jeans',
          //     img: 'https://images.meesho.com/images/marketing/1627308091126_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 4,
          //     name: 'Trousers',
          //     img: 'https://images.meesho.com/images/marketing/1627308263559_128.webp',
          //     route: ''
          //   },
          // ],
          // 'Men Accessories': [
          //   {
          //     id: 1,
          //     name: 'All  Men Accessories',
          //     img: 'https://images.meesho.com/images/marketing/1592857892925_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 2,
          //     name: 'Watches',
          //     img: 'https://images.meesho.com/images/marketing/1592857905637_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 3,
          //     name: 'Belts & Wallets',
          //     img: 'https://images.meesho.com/images/marketing/1628502661225_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 4,
          //     name: 'Jewellery',
          //     img: 'https://images.meesho.com/images/marketing/1592857860011_128.webp',
          //     route: ''
          //   },
          // ],
        },
      },
      {
        id: 3,
        name: 'Tops',
        slug: 'tops',
        img: 'https://images.meesho.com/images/marketing/1591969693743_64.webp',
        child: {
          '': [
            {
              id: 1,
              name: 'T-shirts',
              img: 'https://static2.urbanic.com/images/feeds/1673850888214/T.png',
              route: '/CardCatelog'
            },
            {
              id: 2,
              name: 'Vests',
              img: 'https://static2.urbanic.com/images/feeds/1673850897789/tops.png',
              route: ''
            },
            {
              id: 3,
              name: 'Blouses & Shirts',
              img: 'https://static2.urbanic.com/images/feeds/1673850909782/3R5A9381_1_1.png',
              route: ''
            },
            {
              id: 4,
              name: 'Sweaters & CarDigans',
              img: 'https://static2.urbanic.com/images/feeds/1675576008651/IMG_0005.PNG',
              route: ''
            },
            {
              id: 5,
              name: 'Sweatshirts & Hoodies',
              img: 'https://static2.urbanic.com/images/feeds/1673850968108/3R5A9378_1_1.png',
              route: '/CardCatelog'
            },
            {
              id: 6,
              name: 'Coats',
              img: 'https://static2.urbanic.com/images/feeds/1673850996501/3R5A9825_1_1.png',
              route: ''
            },
            {
              id: 7,
              name: 'Jackets',
              img: 'https://static2.urbanic.com/images/feeds/1673851006787/3R5A9425_1_1.png',
              route: ''
            },
            {
              id: 4,
              name: 'Blazers',
              img: 'https://static2.urbanic.com/images/feeds/1673851015091/3R5A9299_1_1.png',
              route: ''
            },
          ],
          // 'Infant 0-2 Years': [
          //   {
          //     id: 1,
          //     name: 'Rompers',
          //     img: 'https://images.meesho.com/images/marketing/1628498914501_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 2,
          //     name: 'Baby Sets',
          //     img: 'https://images.meesho.com/images/marketing/1628498890502_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 3,
          //     name: 'Ethnicwear',
          //     img: 'https://images.meesho.com/images/marketing/1628499120147_128.webp',
          //     route: ''
          //   },
          // ],
          // 'Toys & Accessories': [
          //   {
          //     id: 1,
          //     name: 'Soft Toys',
          //     img: 'https://images.meesho.com/images/marketing/1628498835170_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 2,
          //     name: 'Footwear',
          //     img: 'https://images.meesho.com/images/marketing/1628499170267_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 3,
          //     name: 'Stationery',
          //     img: 'https://images.meesho.com/images/marketing/1628499189599_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 4,
          //     name: 'Watches',
          //     img: 'https://images.meesho.com/images/marketing/1628499200471_128.webp',
          //     route: ''
          //   },
          // ],
        },
      },
      {
        id: 4,
        name: 'Bottoms',
        slug: 'bottoms',
        img: 'https://images.meesho.com/images/marketing/1591969654748_64.webp',
        child: {
          '': [
            {
              id: 1,
              name: 'Jeans',
              img: 'https://static2.urbanic.com/images/feeds/1673851105748/3R5A8998_1.png',
              route: ''
            },
            {
              id: 2,
              name: 'Pants & Leggings',
              img: 'https://static2.urbanic.com/images/feeds/1673851112610/3R5A9393_1_1.png',
              route: ''
            },
            {
              id: 3,
              name: 'Shorts',
              img: 'https://static2.urbanic.com/images/feeds/1673851122558/3R5A8995_1.png',
              route: ''
            },
            {
              id: 4,
              name: 'Skirts',
              img: 'https://static2.urbanic.com/images/feeds/1673851138694/3R5A9839_1_1.png',
              route: ''
            },
          ],
          // 'Home Furnishing': [
          //   {
          //     id: 1,
          //     name: 'Bedsheets',
          //     img: 'https://images.meesho.com/images/marketing/1628501227809_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 2,
          //     name: 'Curtains & Sheets  ',
          //     img: 'https://images.meesho.com/images/marketing/1628501241502_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 3,
          //     name: 'Cushions & Cover',
          //     img: 'https://images.meesho.com/images/marketing/1627308752650_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 4,
          //     name: 'Carpets & Doormats',
          //     img: 'https://images.meesho.com/images/marketing/1627381851512_128.webp',
          //     route: ''
          //   },
          // ],
          // 'Home Decor': [
          //   {
          //     id: 1,
          //     name: 'All Home Decor',
          //     img: 'https://images.meesho.com/images/marketing/1628503526983_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 2,
          //     name: 'Appliances & Cover',
          //     img: 'https://images.meesho.com/images/marketing/1628503776002_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 3,
          //     name: 'Clocks',
          //     img: 'https://images.meesho.com/images/marketing/1628501425651_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 4,
          //     name: 'Showpieces',
          //     img: 'https://images.meesho.com/images/marketing/1628503539564_128.webp',
          //     route: ''
          //   },
          // ],
        },
      },
      {
        id: 5,
        name: 'Denim',
        slug: 'denim',
        img: 'https://images.meesho.com/images/marketing/1591969736036_64.webp',
        child: {
          '': [
            {
              id: 1,
              name: 'Denim',
              img: 'https://static2.urbanic.com/images/v/277b66f51668a27f1ab421cd63d49ebe.png',
              route: ''
            },
            {
              id: 2,
              name: 'Jackets',
              img: 'https://static2.urbanic.com/images/feeds/1673851211293/3R5A9422_1_1.png',
              route: ''
            },
            {
              id: 3,
              name: 'Shorts',
              img: 'https://static2.urbanic.com/images/feeds/1673851240417/3R5A8988_1.png',
              route: ''
            },
            {
              id: 4,
              name: 'Skirts',
              img: 'https://static2.urbanic.com/images/feeds/1673851258844/3R5A9014_1.png',
              route: ''
            },
          ],
          // 'Skincare': [
          //   {
          //     id: 1,
          //     name: 'View All',
          //     img: 'https://images.meesho.com/images/marketing/1628502636700_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 2,
          //     name: 'Face Masks & Peels',
          //     img: 'https://images.meesho.com/images/marketing/1627309069394_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 3,
          //     name: 'Facecare',
          //     img: 'https://images.meesho.com/images/marketing/1628501935285_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 4,
          //     name: 'Haircare',
          //     img: 'https://images.meesho.com/images/marketing/1628501905162_128.webp',
          //     route: ''
          //   },
          // ],
          // 'Baby & Mom': [
          //   {
          //     id: 1,
          //     name: 'All Home Decor',
          //     img: 'https://images.meesho.com/images/marketing/1628502179597_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 2,
          //     name: 'Mom Care',
          //     img: 'https://images.meesho.com/images/marketing/1628502200627_128.webp',
          //     route: ''
          //   },
          // ],
        },
      },
      {
        id: 6,
        name: 'Sports',
        slug: 'sports',
        img: 'https://images.meesho.com/images/marketing/1591969678285_64.webp',
        child: {
          '': [
            {
              id: 1,
              name: 'Legging',
              img: 'https://static2.urbanic.com/images/feeds/1673851305715/3R5A9011_1.png',
              route: ''
            },
            {
              id: 2,
              name: 'Pants',
              img: 'https://static2.urbanic.com/images/feeds/1673851320579/3R5A9009_1.png',
              route: ''
            },
            {
              id: 3,
              name: 'Hoodies & Sweatshirts',
              img: 'https://static2.urbanic.com/images/feeds/1673851332349/3R5A9278_1_1.png',
              route: ''
            },
            {
              id: 4,
              name: 'Bras',
              img: 'https://static2.urbanic.com/images/feeds/1673851344305/3R5A9289_1_1_1-.png',
              route: ''
            },
            {
              id: 5,
              name: 'T-Shirts & Tops',
              img: 'https://static2.urbanic.com/images/feeds/1673851358362/3R5A9831_1_1-.png',
              route: ''
            },
            {
              id: 6,
              name: 'Suits & Jumpsuits',
              img: 'https://static2.urbanic.com/images/feeds/1673851378874/3R5A9445_1_1-.png',
              route: ''
            },
            {
              id: 7,
              name: 'Shorts & Skirts',
              img: 'https://static2.urbanic.com/images/feeds/1673851393579/3R5A9711_1-.png',
              route: ''
            },
            {
              id: 8,
              name: 'Sports Acc',
              img: 'https://static2.urbanic.com/images/feeds/1673851432941/sports.png',
              route: ''
            },
            {
              id: 9,
              name: 'Swimwear',
              img: 'https://static2.urbanic.com/images/feeds/1673851461682/3R5A9477_1_1-.png',
              route: ''
            },
          ],
          // 'Men Accessories': [
          //   {
          //     id: 1,
          //     name: 'All  Men Accessories',
          //     img: 'https://images.meesho.com/images/marketing/1592857892925_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 2,
          //     name: 'Watches',
          //     img: 'https://images.meesho.com/images/marketing/1592857905637_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 3,
          //     name: 'Belts & Wallets',
          //     img: 'https://images.meesho.com/images/marketing/1628502661225_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 4,
          //     name: 'Caps & Hats',
          //     img: 'https://images.meesho.com/images/marketing/1627309261030_128.webp',
          //     route: ''
          //   },
          // ],
          // 'Women Accessories': [
          //   {
          //     id: 1,
          //     name: 'Hair Accessories',
          //     img: 'https://images.meesho.com/images/marketing/1628502779717_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 2,
          //     name: 'Sunglasses',
          //     img: 'https://images.meesho.com/images/marketing/1628502769274_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 3,
          //     name: 'Socks',
          //     img: 'https://images.meesho.com/images/marketing/1628502716131_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 4,
          //     name: 'Scarves & Stoles',
          //     img: 'https://images.meesho.com/images/marketing/1627309283025_128.webp',
          //     route: ''
          //   },
          // ],
        },
      },
      {
        id: 7,
        name: 'Payjamas & Lingeire',
        slug: 'payjamas-lingerie',
        img: 'https://images.meesho.com/images/marketing/1591969621244_64.webp',
        child: {
          '': [
            {
              id: 1,
              name: 'Pyjamas',
              img: 'https://static2.urbanic.com/images/feeds/1673851061230/3R5A9391_1_1-.png',
              route: ''
            },
            {
              id: 2,
              name: 'Lingerie',
              img: 'https://static2.urbanic.com/images/feeds/1673851081154/3R5A9835_1_1.png',
              route: ''
            },
          ],
          // 'Men Bags': [
          //   {
          //     id: 1,
          //     name: 'Men Wallets',
          //     img: 'https://images.meesho.com/images/marketing/1628502864037_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 2,
          //     name: 'Crossbody Bags & Sling Bags',
          //     img: 'https://images.meesho.com/images/marketing/1650357577770_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 3,
          //     name: 'Waist Bags',
          //     img: 'https://images.meesho.com/images/marketing/1650357638462_128.webp',
          //     route: ''
          //   },
          // ],
          // 'Men Footwear': [
          //   {
          //     id: 1,
          //     name: 'Sports Shoes',
          //     img: 'https://images.meesho.com/images/marketing/1628494549849_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 2,
          //     name: 'Casual Shoes',
          //     img: 'https://images.meesho.com/images/marketing/1627309366343_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 3,
          //     name: 'Formal Shoes',
          //     img: 'https://images.meesho.com/images/marketing/1627309386997_128.webp',
          //     route: ''
          //   },
          //   {
          //     id: 4,
          //     name: 'Sandals',
          //     img: 'https://images.meesho.com/images/marketing/1627309376767_128.webp',
          //     route: ''
          //   },
          // ],
        },
      },
      {
        id: 8,
        name: 'Co-Ords',
        slug: 'co-ords',
        img: 'https://images.meesho.com/images/marketing/1591969621244_64.webp',
        child: {
          '': [
            {
              id: 1,
              name: 'Two-Piece',
              img: 'https://static2.urbanic.com/images/feeds/1673851503423/3R5A9388_1_1-.png',
              route: ''
            },
            {
              id: 2,
              name: 'Jumpsuits',
              img: 'https://static2.urbanic.com/images/feeds/1673851517736/3R5A9342_1_1.png',
              route: ''
            },
          ],
        },
      },
      {
        id: 9,
        name: 'Curve',
        slug: 'curve',
        img: 'https://images.meesho.com/images/marketing/1591969621244_64.webp',
        child: {
          '': [
            {
              id: 1,
              name: 'Tops',
              img: 'https://static2.urbanic.com/images/feeds/1673852297103/3R5A9048.png',
              route: ''
            },
            {
              id: 2,
              name: 'Dresses',
              img: 'https://static2.urbanic.com/images/feeds/1673852311624/3R5A9030_1_1.png',
              route: ''
            },
          ],
        },
      },

    ],

    // Old order loop
    // orders: [
    //   {
    //     id: 1,
    //     img: 'img/products/21435.jpg',
    //     title: '01-20-23188',
    //     pcs: '1000',
    //     readyQty: '300 pcs',
    //     fullQty: '7 Days',
    //     date: '700 pcs',
    //     action: 'Order is Accepted as it is',
    //     bal: '1000',
    //     time: '7 Days',
    //     coming: '300',
    //     received: '300',
    //     updatedbal: '700',
    //     pull: '0',
    //     push: '300',
    //   },
    //   {
    //     id: 2,
    //     img: 'img/products/21467.jpg',
    //     title: '01-20-23188',
    //     pcs: '5000',
    //     readyQty: '300 pcs',
    //     fullQty: '7 Days',
    //     date: '800 pcs',
    //     action: 'Send me Only Ready Qty of 300 pcs',
    //     bal: '1000',
    //     time: '7 Days',
    //     coming: '200',
    //     received: '200',
    //     updatedbal: '800',
    //     pull: '0',
    //     push: '300',
    //   },
    //   {
    //     id: 3,
    //     img: 'img/products/23188.jpg',
    //     title: '01-20-23188',
    //     pcs: '9000',
    //     readyQty: '300 pcs',
    //     fullQty: '7 Days',
    //     date: '600 pcs',
    //     action: 'Send me Only Ready Qty of 300 pcs',
    //     bal: '1000',
    //     time: '7 Days',
    //     coming: '200',
    //     received: '200',
    //     updatedbal: '800',
    //     pull: '0',
    //     push: '300',
    //   },
    // ],

    orders: [
      {
        id: 1,
        oid: '5426308975',
        date: '14',
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
            amount: '720000',
            mode: 'UPI',
            details: 'Uploaded',
            status: 'Unpaid'
          }
        ],
        delivery: [
          {
            charges: '30000',
            suborder: '3',
            items: '24',
            date: '18-June-23',
            mode: 'Pickup',
            status: 'Pending',
            address: 'B-94 Okhla Industrial Area, Phase-II New Delhi South Delhi DL 110020 IN'
          }
        ],
        products: [
          {
            suboid: '12542630',
            name: 'Crochet Skirt Two-Piece Outfits pack of 2',
            img: 'img/icons/test1.png',
            amount: '2000',
            sku: '562',
            unit: '15',
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
            img: 'img/icons/test1.png',
            amount: '2000',
            sku: '562',
            unit: '15',
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
        month: 'Jul',
        oid: '54263152365',
        // price:'150000',
        // item:'25',
        // qty:'200',
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
        delivery: [
          {
            charges: '30000',
            suborder: '3',
            items: '24',
            date: '18-June-23',
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
        month: 'Aug',
        oid: '5426326574',
        // price:'150000',
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
        delivery: [
          {
            charges: '30000',
            suborder: '3',
            items: '24',
            date: '18-June-23',
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
        // price:'150000',
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
      // {
      //   id: 7,
      //   date: '14',
      //   month: 'Dec',
      //   oid: '542633124',
      //   price: '150000',
      //   item: '25',
      //   qty: '200',
      //   statusone:'Delivered',
      //   status: 'Paid',
      //   days: '7',
      //   dispatch: '2',
      //   deliver: '2'
      // },
      {
        id: 8,
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
    activeOrder: {},
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
            skuid: '655323654824',
            size: 'L',
            color: 'Blue',
            pcs: '15'
          },
          {
            id: 3,
            img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
            skuid: '457873654824',
            size: 'XL',
            color: 'Black',
            pcs: '41'
          },
          {
            id: 4,
            img: 'https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp',
            skuid: '451223654824',
            size: 'XXL',
            color: 'Burgandy',
            pcs: '50'
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
    collections: [
      {
        id: 1,
        heading: 'Under 199',
        text: 'Sleek & graceful fits for every occasion',
        order: '0',
        button: 'SHOP NOW',
        img: 'img/banner/one.png',
        one: [
          {
            id: 1,
            img: 'https://img101.urbanic.com/v1/goods-pic/27e6d1538adc45cfaac2f7f79997dd65UR_w540_h720_q85.webp',
            price: '1290'
          },
          {
            id: 2,
            img: 'https://img101.urbanic.com/v1/goods-pic/69e05a4dfe784169afd0179b6172d47cUR_w540_h720_q85.webp',
            price: '990'
          },
          {
            id: 3,
            img: 'https://img101.urbanic.com/v1/goods-pic/f5a8f7e7cfcc42238f8c4619e829c7a9UR_w540_h720_q85.webp',
            price: '1890'
          },
          {
            id: 4,
            img: 'https://img101.urbanic.com/v1/goods-pic/bfd49b51ec644c28bc316949e650f8d0UR_w540_h720_q85.webp',
            price: '1790'
          },
          {
            id: 5,
            img: 'https://img101.urbanic.com/v1/goods-pic/63f5574a5b5f440fb29f4b441141c113UR_w540_h720_q85.webp',
            price: '3490'
          },
          {
            id: 6,
            img: 'https://img101.urbanic.com/v1/goods-pic/a9d445352ac84bef80e6d957684e9802UR_w540_h720_q85.webp',
            price: '1590'
          }
        ]
      },
      {
        id: 2,
        heading: 'Under 299',
        text: 'Tops that will make you stand apart',
        order: '1',
        button: 'SHOP NOW',
        img: 'img/banner/two.png',
        one: [
          {
            id: 1,
            img: 'https://img101.urbanic.com/v1/goods-pic/a52a3d827248461bb69c8839e12e4ca5UR_w540_h720_q85.webp',
            price: '790'
          },
          {
            id: 2,
            img: 'https://img101.urbanic.com/v1/goods-pic/ce8d7bda1deb421ca5e37fabd9af4106UR_w540_h720_q85.webp',
            price: '690'
          },
          {
            id: 3,
            img: 'https://img101.urbanic.com/v1/goods-pic/aca98e67c531405b85c2d70cf930debfUR_w540_h720_q85.webp',
            price: '690'
          },
          {
            id: 4,
            img: 'https://img101.urbanic.com/v1/goods-pic/f73e659e15df46418ff4a56faf471874UR_w540_h720_q85.webp',
            price: '1190'
          },
          {
            id: 5,
            img: 'https://img101.urbanic.com/v1/goods-pic/bf48a147dfd44245bd709ff916d62966UR_w540_h720_q85.webp',
            price: '990'
          },
          {
            id: 6,
            img: 'https://img101.urbanic.com/v1/goods-pic/56ea8b04a8ff4904ab91783c85caaca2UR_w540_h720_q85.webp',
            price: '1790'
          }
        ]
      },
      {
        id: 3,
        heading: 'Under 399',
        text: 'Slack on with dungarees, pants, skirts and much',
        order: '0',
        button: 'SHOP NOW',
        img: 'img/banner/three.png',
        one: [
          {
            id: 1,
            img: 'https://img101.urbanic.com/v1/goods-pic/665b90d85f94418dbd7eaddab79bab8bUR_w540_h720_q85.webp',
            price: '1390'
          },
          {
            id: 2,
            img: 'https://img101.urbanic.com/v1/goods-pic/ead3bacdcd49498b87786e957d9c3a51UR_w540_h720_q85.webp',
            price: '1890'
          },
          {
            id: 3,
            img: 'https://img101.urbanic.com/v1/goods-pic/6c7da1814f614cc388dc42cfd2b96e76UR_w540_h720_q85.webp',
            price: '1890'
          },
          {
            id: 4,
            img: 'https://img101.urbanic.com/v1/goods-pic/1cb7e4785db74116b96e8d126f830c23UR_w540_h720_q85.webp',
            price: '1990'
          },
          {
            id: 5,
            img: 'https://img101.urbanic.com/v1/goods-pic/56f7bbddff7243338c96253745c989cfUR_w540_h720_q85.webp',
            price: '1690'
          },
          {
            id: 6,
            img: 'https://img101.urbanic.com/v1/goods-pic/997d1709ab564a669c70ec9b007cc365UR_w540_h720_q85.webp',
            price: '1290'
          }
        ]
      },
      {
        id: 4,
        heading: 'Under 499',
        text: 'Psst... They go with everything',
        order: '1',
        button: 'SHOP NOW',
        img: 'img/banner/four.png',
        one: [
          {
            id: 1,
            img: 'https://img101.urbanic.com/v1/goods-pic/cd7cc3d445b64bdca311ed8391bbff17UR_w540_h720_q85.webp',
            price: '1290'
          },
          {
            id: 2,
            img: 'https://img101.urbanic.com/v1/goods-pic/4ba3249fbb0844b7b537f35fe8142ca3UR_w540_h720_q85.webp',
            price: '1190'
          },
          {
            id: 3,
            img: 'https://img101.urbanic.com/v1/goods-pic/03eb795b1e29456c8336fe0cf5dd3820UR_w540_h720_q85.webp',
            price: '1290'
          },
          {
            id: 4,
            img: 'https://img101.urbanic.com/v1/goods-pic/12fd582c783a412283e204c30d613cd6UR_w540_h720_q85.webp',
            price: '1390'
          },
          {
            id: 5,
            img: 'https://img101.urbanic.com/v1/goods-pic/4f2d9de0478d4e37b692c8fab55d3b86UR_w540_h720_q85.webp',
            price: '1190'
          },
          {
            id: 6,
            img: 'https://img101.urbanic.com/v1/goods-pic/d8212341a0b44b59882aceeb32d33959UR_w540_h720_q85.webp',
            price: '1290'
          }
        ]
      },
      {
        id: 5,
        heading: 'Under 599',
        text: 'Get your A-game on with voguish sets & ensembles',
        order: '0',
        button: 'SHOP NOW',
        img: 'img/banner/five.png',
        one: [
          {
            id: 1,
            img: 'https://img101.urbanic.com/v1/goods-pic/396c1d0c6bd744d688af1161e3eaacd9UR_w540_h720_q85.webp',
            price: '1590'
          },
          {
            id: 2,
            img: 'https://img101.urbanic.com/v1/goods-pic/e2a8f8d972864dfe9897c38c4edfbf3eUR_w540_h720_q85.webp',
            price: '2690'
          },
          {
            id: 3,
            img: 'https://img101.urbanic.com/v1/goods-pic/3ab4dce0365249afa36fa97a1bedc0faUR_w540_h720_q85.webp',
            price: '1690'
          },
          {
            id: 4,
            img: 'https://img101.urbanic.com/v1/goods-pic/1175e59eb5a94b1bb14dc74332988436UR_w540_h720_q85.webp',
            price: '1590'
          },
          {
            id: 5,
            img: 'https://img101.urbanic.com/v1/goods-pic/031001b5097240e092131a0778530ce0UR_w540_h720_q85.webp',
            price: '1690'
          },
          {
            id: 6,
            img: 'https://img101.urbanic.com/v1/goods-pic/e0cfb5747ef64b15a89b5351659108b0UR_w540_h720_q85.webp',
            price: '2690'
          }
        ]
      },
    ],


    SubCatProducts: [
      {
        id: 1,
        img: 'https://img101.urbanic.com/v1/goods-pic/626c54fdfd92417e835c5ef39e8fc920UR_w540_h720_q85.webp',
        name: 'Beaded Bodycon Dress',
        price: '895',
        color: 'yellow',
      },
      {
        id: 2,
        img: 'https://img101.urbanic.com/v1/goods-pic/2f2a7cb90fcf4e859242dad5a8ea39ee_w1000_q90.webp',
        name: 'Beaded Bodycon Dress',
        price: '894',
        color: 'purple',
      },
      {
        id: 3,
        img: 'https://img101.urbanic.com/v1/goods-pic/04084a9545bc48b9a803a7170cc34f62UR_w540_h720_q85.webp',
        name: 'Beaded Bodycon Dress',
        price: '890',
        color: 'green',
      },
      {
        id: 4,
        img: 'https://img101.urbanic.com/v1/goods-pic/3e2f9f130fc442079e250044c328de36_w540_h720_q85.webp',
        name: 'Beaded Bodycon Dress',
        price: '899',
        color: 'red',
      },
    ],
    featuredCollection: [
      {
        id: 1,
        name: 'Dress',
        moq: '10',
        price: '438',
        img: 'https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-padded-non-wired-full-cup-longline-bralette-in-black-878341.jpg',
      },
      {
        id: 2,
        name: 'Dress',
        moq: '10',
        price: '435',
        img: 'https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-pretty-florals-two-piece-swimsuit-in-multicolour-784300.jpg',
      },
      {
        id: 3,
        name: 'Dress',
        moq: '10',
        price: '636',
        img: 'https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-padded-non-wired-full-cup-longline-bralette-in-black-878341.jpg',
      },
      {
        id: 4,
        name: 'Dress',
        moq: '10',
        price: '522',
        img: 'https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-pretty-florals-two-piece-swimsuit-in-multicolour-784300.jpg',
      },
    ],

    cartProduct:[
      {
        id:1,
        img:'https://img101.urbanic.com/v1/goods-pic/14569697283c4cd9866e5bfee6034459UR_w1000_q90.webp',
        name:'Ruffle A-Line Dress',
        amount:'120000',
        rate:'1200',
        pieces:'100'
      },
      {
        id:2,
        img:'https://img101.urbanic.com/v1/goods-pic/3ab4dce0365249afa36fa97a1bedc0faUR_w540_h720_q85.webp',
        name:'Texture Shorts Co-ords pack of 2',
        amount:'130500',
        rate:'150',
        pieces:'120'
      },
      {
        id:3,
        img:'https://img101.urbanic.com/v1/goods-pic/14569697283c4cd9866e5bfee6034459UR_w1000_q90.webp',
        name:'Ruffle A-Line Dress',
        amount:'120000',
        rate:'1200',
        pieces:'100'
      },
      {
        id:4,
        img:'https://img101.urbanic.com/v1/goods-pic/3ab4dce0365249afa36fa97a1bedc0faUR_w540_h720_q85.webp',
        name:'Texture Shorts Co-ords pack of 2',
        amount:'130500',
        rate:'150',
        pieces:'120'
      },
    ],
    activeCartProduct:{},
    activeRemoveProduct:{},
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

    getOrder: (state) => (orderId) => {
      let index = state.orders.findIndex(order => order.id == orderId);
      return state.orders[index];
    },

    getcomplete: (state) => (completeId) => {
      let index = state.completedOrders.findIndex(complete => complete.id == completeId);
      return state.completedOrders[index];
    },

    getActiveOrder(state) {
      return state.activeOrder
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
    getCompletedOrders(state) {
      return state.completedOrders
    },

    getCollections(state) {
      return state.collections;
    },

    getSubCatProducts(state) {
      return state.SubCatProducts;
    },
    getfeaturedCollection(state) {
      return state.featuredCollection;
    },
    getSavedProducts(state) {
      return state.savedProducts;
    },
    getCartProduct(state){
      return state.cartProduct;
    },
    getActiveCartProduct(state){
      return state.activeCartProduct
    },
    getActiveRemoveProduct(state){
      return state.activeRemoveProduct
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

    selectOrder(state, order) {
      state.activeOrder = order
    },
    hideProduct(state) {
      state.activeProduct = {}
    },
    saveProduct(state, data) {
      state.savedProducts.push(data)
    },
    unSaveProduct(state, productIndex) {
      state.savedProducts.splice(productIndex, 1)
    },
    selectCartProduct(state, product){
      state.activeCartProduct = product
    },
    hideCartProduct(state){
      state.activeCartProduct = {}
    },
    selectRemoveProduct(state, product){
      state.activeRemoveProduct = product
    },
    hideRemoveProduct(state){
      state.activeRemoveProduct = {}
    }
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
    },
    hideProduct({ commit }) {
      commit('hideProduct')
    },
    saveProduct({ commit }, data) {
      commit('saveProduct', data)
    },
    unSaveProduct({ commit }, productIndex) {
      commit('unSaveProduct', productIndex)
    },
    selectCartProduct({commit}, product){
      commit('selectCartProduct', product)
    },
    hideCartProduct({commit}){
      commit('hideCartProduct')
    },
    selectRemoveProduct({commit},product){
      commit('selectRemoveProduct', product)
    },
    hideRemoveProduct({commit}){
      commit('hideRemoveProduct')
    }
  },

});



