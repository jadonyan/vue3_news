import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

import Login from '../page/login'
import CreateBook from '../page/manage/create.vue'

Vue.use(Router)

export default [{
    path: '/',
    component: App,
    children: [{
        path: '/home',
        name: 'home',
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
    }, {
        path: '/abroad',
        name: 'abroad',
        component: r => require.ensure([], () => r(require('../page/abroad')), 'abroad')
    },{
        path: '/login',
        name: 'login',
        component: Login
    },{
        path: '/addbook',
        name: 'addbook',
        component: CreateBook
    }]
}]