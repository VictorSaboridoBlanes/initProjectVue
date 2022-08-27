import { createStore } from 'vuex'
import { UserModule } from './User'

export default createStore({
  state: {
  },

  getters: {
  },

  //Mutations son funciones que tienen efecto sobre las variables state
  mutations: {
  },

  actions: {
  },
  
  modules: {
    User:UserModule
  }
})
