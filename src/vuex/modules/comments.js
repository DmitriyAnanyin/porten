import axios from 'axios'

export default {
  state: {
    all_comments: []
  },
  mutations: {
    NEW_COMMENT_TO_STATE(state, new_comment){
      state.all_comments += JSON.stringify(new_comment)
    }
  },
  actions: {
    SEND_COMMENT({commit}, dataComment){
      return axios.post('http://porten.api:8080/create_comment', dataComment)
      .then((new_comment) => {
        commit('NEW_COMMENT_TO_STATE', new_comment.data)
        console.log(new_comment)
        return new_comment
      })
    }
  },
  getters: {
    ALL_COMMENTS(state){
      return state.all_comments
    }
  },
}