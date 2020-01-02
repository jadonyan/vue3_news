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
            window.console.log('call getStorage');
            if (!state.user && localStorage.getItem(key)) {
                state.user = JSON.parse(localStorage.getItem(key))
            }
            return state.user;
        }
    },
    mutations:{
        $_setStorage(state, value) {
            window.console.log('call $_setStorage');
            state.user = value;
            localStorage.setItem(key, value);
        },
        $_removeStorage(state){
            window.console.log('call $_removeStorage');
            state.user = null;
            localStorage.removeItem(key);
        }
    }
})