import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import axios from 'axios'

import routes from './router'
import store from "./store"
import './mock/mock'
import {globalMethods} from './components/mixin'
Vue.mixin(globalMethods)

Vue.config.productionTip = false;
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  routes
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
