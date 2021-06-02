import Vue from 'vue'
import Vuex from 'vuex'
import db from '../db'
import CardClass from '../helpers/CardClass'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [],
  },
  mutations: {
    SET_CARDS: (state, data) => {
      state.cards.push(data) 
    }
  },
  actions: {
    async GET_CARDS({commit}) {
      console.log(commit)
      let collection = await db.database().ref('images')
      collection.on('value', snap => {
        snap.forEach(val => {
          commit('SET_CARDS', new CardClass(`${val.val()}`, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, laborum corporis perferendis repellendus voluptates dignissimos esse!", "corporis perferendis repellendus" ))
        })
      })
      
    }
  },
  modules: {
  }
})
