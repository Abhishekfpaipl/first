import { createStore } from "vuex";

export default createStore({
  state: {
    pieces:[
      {
        id:1,
        size:'XS',
        sub_total:"",
        quantity:"",
        colors: [
          {
            id: 1,
            price: "250",
            quantity: "",
            bg:'red'
          },
          {
            id: 2,
            price: "210",
            quantity: "",
            bg:'hotpink'
          },
          {
            id: 3,
            price: "225",
            quantity: "",
            bg:'cyan'
          },
          {
            id: 4,
            price: "425",
            quantity: "",
            bg:'Blue'
          },
          {
            id: 5,
            price: "525",
            quantity: "",
            bg:'Black'
          },
          {
            id: 6,
            price: "625",
            quantity: "",
            bg:'Yellow'
          },
        ],
      },
      {
        id:2,
        size:'S',
        sub_total:"",
        quantity:"",
        colors: [
          {
            id: 1,
            price: "150",
            quantity: "",
            bg:'orangered'
          },
          {
            id: 2,
            price: "110",
            quantity: "",
            bg:'background-color:hotpink'
          },
          {
            id: 3,
            price: "125",
            quantity: "",
            bg:'background-color:cyan'
          },
        ],
      },
      {
        id:3,
        size:'M',
        sub_total:"",
        quantity:"",
        colors: [
          {
            id: 1,
            price: "350",
            quantity: "",
            bg:'background-color:red'
          },
          {
            id: 2,
            price: "310",
            quantity: "",
            bg:'background-color:hotpink'
          },
          {
            id: 3,
            price: "325",
            quantity: "",
            bg:'background-color:cyan'
          },
        ],
      },
      {
        id:4,
        size:'L',
        sub_total:"",
        quantity:"",
        colors: [
          {
            id: 1,
            price: "450",
            quantity: "",
            bg:'background-color:red'
          },
          {
            id: 2,
            price: "410",
            quantity: "",
            bg:'background-color:hotpink'
          },
          {
            id: 3,
            price: "425",
            quantity: "",
            bg:'background-color:cyan'
          },
        ],
      },
      {
        id:5,
        size:'XL',
        sub_total:"",
        quantity:"",
        colors: [
          {
            id: 1,
            price: "550",
            quantity: "",
            bg:'background-color:red'
          },
          {
            id: 2,
            price: "510",
            quantity: "",
            bg:'background-color:hotpink'
          },
          {
            id: 3,
            price: "525",
            quantity: "",
            bg:'background-color:cyan'
          },
        ],
      },
      {
        id:6,
        size:'Free',
        sub_total:0,
        quantity:0,
        colors: [
          {
            id: 1,
            price: 250,
            quantity: 0,
            bg:'background-color:red'
          },
          {
            id: 2,
            price: 210,
            quantity: 0,
            bg:'background-color:hotpink'
          },
          {
            id: 3,
            price: 225,
            quantity: 0,
            bg:'background-color:cyan'
          },
        ],
      },
    ],
    Prodamts: [
      {
        id: 1,
        ttlamount: "20001",
        avgrate: "562",
        ttlpieces: "15",
        imgdp: "img/icons/test1.png",
      },
      {
        id: 2,
        ttlamount: "20001",
        avgrate: "562",
        ttlpieces: "15",
        imgdp: "img/icons/android-chrome-192x192.png",
      },
      {
        id: 3,
        ttlamount: "20001",
        avgrate: "562",
        ttlpieces: "15",
        imgdp: "img/icons/android-chrome-192x192.png",
      },
    ],
  },
  getters: {
    getColors(state) {
      return state.colors;
    },
    getProdamts(state) {
      return state.Prodamts;
    },
    getpieces(state){
      return state.pieces;
    }
  },
  mutations: {
    changecolor(state,color){
      // state.colors.push(color)
      
      var index = state.colors.findIndex(c => c.id == color.id);
      state.colors[index]=color;
    },
    updateQuantity(state, data){
      let pieceId = data.piece;
      let colorId = data.color;
      var pieceIndex = state.pieces.findIndex(p => p.id == pieceId);
      var colorIndex = state.pieces[pieceIndex].colors.findIndex(c => c.id == colorId);
      state.pieces[pieceIndex].colors[colorIndex].quantity = data.quantity[pieceId + 'x' + colorId];

      state.pieces.forEach(piece => {
        piece.colors.forEach(color => {
          piece.quantity = piece.quantity + parseInt(color.quantity);
          piece.sub_total =  piece.sub_total + parseInt(color.price * color.quantity);
        });
      });
    }
  },
  actions: {
    updateQuantity({commit}, data){
      commit('updateQuantity',data)
    },
    updatecolor({commit},color){
      commit('changecolor',color)
    },
  },
});
