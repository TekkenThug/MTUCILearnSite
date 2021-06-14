import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Auth from "../views/Auth";
import Dashboard from "../views/Dashboard";

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: Auth
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        }
    ]

})

