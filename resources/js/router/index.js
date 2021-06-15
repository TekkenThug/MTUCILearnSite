import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Auth from "../views/Auth";
import Dashboard from "../views/Dashboard";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: Auth,
            meta: { auth: false }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: { auth: true },
            children: [
                {
                    path: '/profile',
                    name: 'profile'
                },
                {
                    path: '/main',
                    name: 'main'
                }
            ]
        }
    ]
});

router.beforeEach(async (to, from, next) => {
    const auth = await Vue.prototype.$api.auth.isAuth();

    if (!auth && to.meta.auth) next({ name: 'login' })
    else if (!to.meta.auth && auth) router.back();
    else next()
})

export default router;

