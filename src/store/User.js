export const UserModule = {
    namespaced: true,
    state: {
        user: null
    },

    getters: {

    },

    //Mutations son funciones que tienen efecto sobre las variables state
    mutations: {
        SET_USER(state, user) {
            state.user = user
        }
    },
    actions: {
        setUser({ commit }, user) {
            commit("SET_USER", user)
        }
    }
}
