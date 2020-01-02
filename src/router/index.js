import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Login from '../page/login'

Vue.use(Router)

export default [{
    path: '/',
    component: App,
    children: [{
        path: '/home',
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
    }, {
        path: '/login',
        component: Login
    }]
}]