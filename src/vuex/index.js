// import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import new_products from './modules/new_products'
import new_collection_products_preview from './modules/new_collection_products'
import sign_in from './modules/sign_in'
import comments from './modules/comments'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    new_products,
    new_collection_products_preview,
    sign_in,
    comments,
  }
})