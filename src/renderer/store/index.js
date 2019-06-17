import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// import { createPersistedState, createSharedMutations } from 'vuex-electron'

// import modules from './modules'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   modules,
//   plugins: [
//     createPersistedState(),
//     createSharedMutations()
//   ],
//   strict: process.env.NODE_ENV !== 'production'
// })


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

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
