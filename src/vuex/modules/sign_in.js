import axios from 'axios'

export default {
  state:
  {
    dataUser: []
  },
  mutations:{
    SET_DATA_USER_TO_STATE: (state, res) => {
      state.dataUser = res
    },
    LOG_OUT_USER: (state) => {
      state.dataUser = []
    }
  },
  actions:{
    GET_DATA_USER({commit}, data){
      return axios.get('http://porten.api:8080/sign_in', {
        params: {
          login: data.login,
          password: data.password
        }
      })
      .then((res) => {
        commit('SET_DATA_USER_TO_STATE', res.data)
        console.log(res)
      })
    },
    CREATE_USER({commit}, params) {
      return axios.post('http://porten.api:8080/create_person', params)
      .then((res) => {
        commit('SET_DATA_USER_TO_STATE', res.data)
        console.log(res)
      })
    },
    CREATE_NEW_PASSWORD({commit}, email) {
      axios.get('http://porten.api:8080/reset_password', {    params: {email: email}})
      .then((res) => {
        commit('SET_DATA_USER_TO_STATE', res.data)
        console.log(res)
      })
    }
  },
  getters:{
    DATA_USER(state){
      return state.dataUser
    }
  },
}