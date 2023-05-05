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
        img: "img/products/21435.jpg",
        price: 650,
        fav:false,
        colors: [
          { name: 'red' },
          { name: 'hotpink' },
        ],
        sizes: [
          { name: 'S' },
          { name: 'M' },
          { name: 'L' },
          { name: 'Free' }
        ]
      },
      {
        id: 2,
        slug: 2,
        name: 'Spun Twill 3 PC',
        moq: 10,
        info: '01-08-23636',
        img: "img/products/21467.jpg",
        price: 820,
        colors: [
          { name: 'blue' },
          { name: 'green' },
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
        img: "img/products/23188.jpg",
        price: 250,
        colors: [
          { name: 'khaki' },
          { name: 'orangered' },
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
        img: "img/products/23290.jpg",
        price: 730,
        colors: [
          { name: 'purple' },
          { name: 'black' },
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
        img: "img/products/23586.jpg",
        price: 324,
        colors: [
          { name: 'red' },
          { name: 'hotpink' },
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
        img: "img/products/23708.jpg",
        price: 282,
        colors: [
          { name: 'cyan' },
          { name: 'grey' },
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
    catelogcolors: [
      {
        id: 1,
        bgcolor: 'red'
      },
      {
        id: 2,
        bgcolor: 'yellow'
      },
      {
        id: 3,
        bgcolor: 'green'
      },
    ],
    catelogsizes: [
      {
        id: 1,
        size: 'XS'
      },
      {
        id: 2,
        size: 'S'
      },
      {
        id: 3,
        size: 'M'
      },
    ],
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
    gridprod:[
      {
        id:1,
        img:'',
        title:'title'
      }
    ],
  },
  getters: {
    getColors(state) {
      return state.colors;
    },
    getCart(state) {
      return state.cart;
    },
    getProdamts(state) {
      return state.Prodamts;
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
    getgridprod(state){
      return state.gridprod
    }
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
    addToFav: (state, id) => {
      state.items[state.items.findIndex(item => item.id == id)].fav = true;
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
    }
  },

});



// sizes: [
//   {
//     name: 'S',
//     colors: [
//       { name: 'red' },
//       { name: 'hotpink' },
//     ],
//   },
//   {
//     name: 'M',
//     colors: [
//       { name: 'red' },
//       { name: 'pink' },
//     ],
//   },
//   {
//     name: 'L',
//     colors: [
//       { name: 'red' },
//       { name: 'hotpink' },
//     ],
//   },
//   {
//     name: 'Free',
//     colors: [
//       { name: 'red' },
//       { name: 'pink' },
//     ],
//   }

// ]