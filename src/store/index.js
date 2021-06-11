import Vue from 'vue'
import Vuex from 'vuex'
import db from '../db'
import CardClass from '../helpers/CardClass'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [],
    currentUser: ""
  },
  mutations: {
    SET_CARDS: (state, data) => {
      state.cards.push(data) 
    },
    SET_CURRENT_USER: (state, data) => {
      state.currentUser = data
    }
  },
  actions: {
    async GET_CARDS({ state, commit }) {
      let collection = await db.database().ref('images')
      // console.log(state.cards)
      collection.on('value', snap => {
        snap.forEach(data => {
            if(state.cards.findIndex(i => i.img === data.val().img) > -1) {
              return;
            } else {
              commit('SET_CARDS', new CardClass(`${data.val().img}`, `${data.val().description}`, "corporis perferendis repellendus" ))
            }
        })
      })
    },
    async GET_CURRENT_USER({commit}) {
      let uid = await db.auth().currentUser.uid;
      commit('SET_CURRENT_USER', uid)
    }
  },
  modules: {
  }
})
