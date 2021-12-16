import axios from 'axios'

export default {
  state:{
    new_collection_products_preview: []
  },
  mutations:{
    SET_NEW_COLLECTION_PRODUCTS_PREVIEW_TO_STATE: (state, new_collection_products_preview) => {
      state.new_collection_products_preview = new_collection_products_preview
    },
  },
  actions:{
    GET_NEW_COLLECTION_PRODUCTS_PREVIEW({commit}) {
      return axios('http://porten.api:8080/new_collection_products_preview',{
        method: "GET"
      })
      .then((new_collection_products_preview) => {
        commit('SET_NEW_COLLECTION_PRODUCTS_PREVIEW_TO_STATE', new_collection_products_preview.data)
        return new_collection_products_preview
      })
      .catch((error) => {
        console.log(error)
        return error
      })
    },
  },
  getters:{
    NEW_COLLECTION_PRODUCTS_PREVIEW(state){
      return state.new_collection_products_preview
    }
  },
}