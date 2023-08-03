import {defineStore} from 'pinia'
import apiRequester from "../utils/apiRequester.js"

export const useUserStore = defineStore('user', {
    state() {
        return {
            user: null
        }
    },
    actions: {
        async login(credentials) {
            const response = (await apiRequester.post("api/login", credentials)).data
            const token = response.token
            console.log("token", token)
            // Use the token for all future requests
            apiRequester.defaults.headers.common['Authorization'] = `Bearer ${token}`

            // The user will be available in all our components via `this.$userStore.user` thanks to our custom appPlugin`
            // this.user = (await apiRequester.get("api/users/me")).data.user
            this.user = response.user
            console.log("user", this.user)

        },
        async logout() {
            await apiRequester.post("api/logout")
            // await router.push({name: 'landingPage'})
        }
    }
})
