import { createStore } from "vuex";
import catalog from "./catalog";
import order from "./order";
import cart from "./cart";
import collection from "./collection";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules:{
    catalog:catalog,
    order:order,
    cart:cart,
    collection:collection,
  }

});



