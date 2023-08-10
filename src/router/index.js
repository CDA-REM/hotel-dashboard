import {createRouter, createWebHistory} from 'vue-router'
import BaseLayout from '../components/BaseLayout.vue'
import UserAccountPage from "@/pages/user/UserAccountPage.vue";

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: BaseLayout, // The root of all our components, where the fixed elements will be (navbar...),
            // redirect: '/connexion',
            children: [
                {
                    path: "/mon-compte",
                    name: "userAccount",
                    component: UserAccountPage,
                    meta: {
                        key: 'userAccount',
                    }
                },
                {
                    path: 'dashboard-operational',
                    name: 'operationalDashboard',
                    component: () => import('../pages/operationalDashboard/dashboardPage.vue'),
                    meta: {
                        key: 'operationalDashboard',
                    }
                },
                {
                    path: 'dashboard-tactique',
                    name: 'tacticalDashboard',
                    component: () => import('../pages/tacticDashboard/TacticPage.vue'),
                    meta: {
                        key: 'tacticalDashboard',
                    }
                },
                {
                    path: 'dashboard-strategique',
                    name: 'strategicDashboard',
                    component: () => import('../pages/strategicDashboard/StrategicPage.vue'),
                    meta: {
                        key: 'strategicDashboard',
                    }
                },
                {
                    path: '/:pathMatch(.*)*',
                    name: 'notFound',
                    component: () => import('../pages/notFound/NotFound.vue'),
                    meta: {
                        key: 'notFound',
                    }
                }
            ]
        },
        {
            path: '/connexion',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (login.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/login/LoginPage.vue')
        },

    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return {top: 0, behavior: 'smooth'}
    },
    checkIfUserIsAuthenticated() {
    return $userStore.user ? true : false

    }

})
