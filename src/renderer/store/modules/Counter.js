const state = {
  newsViewItem:null,
  newsViewIndex: null
}

const mutations = {
   JUMP_NEWS_VIEW(state,item,index) {
    state.newsViewItem = item
    state.newsViewIndex = index
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  },
  jumpNewsView ({commit},item,index) {
    commit('JUMP_NEWS_VIEW',item,index)
  }
}

const getters = {
  newsViewItem: state => state.newsViewItem,
  newsViewIndex: state => state.newsViewIndex
}

export default {
  state,
  mutations,
  actions,
  getters
}
