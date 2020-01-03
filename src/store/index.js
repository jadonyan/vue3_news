import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const key = 'user';

export default new Vuex.Store({
    state:{
        user:null
    },
    getters: {
        getStorage(state){
            if (!state.user && localStorage.getItem(key)) {
                state.user = JSON.parse(localStorage.getItem(key))
            }
            return state.user;
        }
    },
    mutations:{
        $_setStorage(state, value) {
            state.user = value;
            localStorage.setItem(key, value);
        },
        $_removeStorage(state){
            state.user = null;
            localStorage.removeItem(key);
        }
    }
})