import { createStore } from "vuex";

export default createStore({
  state: {
    colors: [
      {
        id: 1,
        price: "₹456",
        quant: "1",
      },
      {
        id: 2,
        price: "₹56",
        quant: "1",
      },
    ],
    Prodamts: [
      {
        id: 1,
        ttlamount: "20001",
        avgrate: "562",
        ttlpieces: "15",
        imgdp: "img/icons/android-chrome-192x192.png",
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
  },
  mutations: {
    changecolor(state,color){
      // state.colors.push(color)
      
      var index = state.colors.findIndex(c => c.id == color.id);
      state.colors[index]=color;
    }
  },
  actions: {
    updatecolor({commit},color){
      commit('changecolor',color)
    },
  },
});
