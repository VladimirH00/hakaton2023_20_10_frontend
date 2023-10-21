import { createStore } from 'vuex'
import config from '@/config/env'

export default createStore({
  state: {
    url: config.url,
    urlStorage: config.urlStorage,
    token: undefined,
    personal: undefined,
  },
  getters: {
    getUrl(state) {
      return state.url;
    },
    getUrlStorage(state) {
      return state.urlStorage;
    },
    getToken(state) {
      return state.token;
    },
    getPersonal(state) {
      return state.personal;
    },
  },
  mutations: {
    setToken(state, value) {
      state.token = value;
    },
    setPersonal(state, value) {
      state.token = value;
    },
  },
  actions: {
  },
  modules: {
  }
})
