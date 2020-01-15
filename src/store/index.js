import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    province: '',
    cardnumber: '',
    cursorpos: 0
  },
  mutations: {
    provinceFunc (state, obj) {
      state.province = obj
    },
    cardNumFunc (state, obj) {
      state.cardnumber = obj
    },
    cursorPosFunc (state, obj) {
      state.cursorpos = obj
    }
  },
  actions: {

  }
})
