import axios from 'axios'

export default {
  state:{
    new_products: []
  },
  mutations:{
    SET_NEW_PRODUCTS_TO_STATE: (state, new_products) => {
      state.new_products = new_products
    },
  },
  actions:{
    GET_NEW_PRODUCTS({commit}) {
      return axios('http://porten.api:8080/new_products',{
        method: "GET"
      })
      .then((new_products) => {
        commit('SET_NEW_PRODUCTS_TO_STATE', new_products.data)
        return new_products
      })
      .catch((error) => {
        console.log(error)
        return error
      })
    },
  },
  getters:{
    ALL_NEW_PRODUCTS(state){
      return state.new_products
    }
  }
}