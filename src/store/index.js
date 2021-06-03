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
        // console.log(snap.val())
        snap.forEach(data => {
          // console.log(img.val())
          console.log(data.val())
          commit('SET_CARDS', new CardClass(`${data.val().img}`, `${data.val().description}`, "corporis perferendis repellendus" ))
        })
      })
      
    }
  },
  modules: {
  }
})
