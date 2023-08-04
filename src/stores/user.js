import {defineStore} from 'pinia'
import apiRequester from "../utils/apiRequester.js"

export const useUserStore = defineStore('user', {
    state() {
        return {
            user: {},
            isLogged: true
        }
    },
    actions: {
        async login(credentials) {
            // await apiRequester.get('/sanctum/csrf-cookie')
            const response = (await apiRequester.post("api/sanctum/token", credentials)).data
            const token = response.token

            // Use the token for all future requests
            apiRequester.defaults.headers.common['Authorization'] = `Bearer ${token}`

            // The user will be available in all our components via `this.$userStore.user` thanks to our custom appPlugin`
            // this.user = (await apiRequester.get("api/users/admin")).data.user
            this.user = response.user

            return response
        },
        async logout() {
            await apiRequester.post("api/logout")
            // await router.push({name: 'landingPage'})
        }
    }
})
