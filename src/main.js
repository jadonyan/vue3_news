import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

import routes from './router'
import store from "./store"

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
