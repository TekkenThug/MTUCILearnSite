import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Auth from "../views/Auth";
import Dashboard from "../views/Dashboard";
import User from "../views/dashboard-views/User";
import Schedule from "../views/dashboard-views/Schedule"

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
            redirect: { name: 'schedule' },
            children: [
                {
                    path: 'profile',
                    name: 'profile',
                    component: User,
                },
                {
                    path: 'schedule',
                    name: 'schedule',
                    component: Schedule
                }
            ]
        }
    ]
});

router.beforeEach(async (to, from, next) => {
    const auth = await Vue.prototype.$api.auth.isAuth();
    const metaInfo = to.matched.some(record => record.meta.auth);

    if (!auth && metaInfo) next({ name: 'login' })
    else if (!metaInfo && auth) next({ name: 'dashboard' });
    else next()
})

export default router;

