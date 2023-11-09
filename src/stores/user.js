import {defineStore} from 'pinia'
import apiRequester from "../utils/apiRequester.js"
import {router} from "@/router";
import axios from "axios";

export const useUserStore = defineStore('user', {
    state() {
        return {
            user: JSON.parse(localStorage.getItem('user')) || {},
            isLogged: false
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
            // this.user = response.user

            // return response


            // Connexion avec une requête sur une autre route en attendant que la route api/users/admin soit fonctionnelle
            await axios.get('api/users/me')
                .then((response) => {
                    this.user = response.data.user;
                    console.log(this.user);
                    // Vérifiez si l'utilisateur a le rôle admin
                    if (this.user.user_role === 'admin') {
                        localStorage.setItem('user', JSON.stringify(this.user));
                        localStorage.setItem('isUserLoggedIn', true);
                        this.isLogged = true;
                        router.push({name: 'tacticalDashboard'})
                    } else {
                        localStorage.setItem('isUserLoggedIn', false);
                        this.user = {};
                        alert("Vous devez être administrateur pour vous connecter.");
                    }
                })
                .catch((error) => {
                    if(error.response.status === 401){
                        localStorage.removeItem('user');
                        localStorage.removeItem('isUserLoggedIn');
                        alert("Échec de l'authentification. Veuillez réessayer.");
                    }

                    if(error.response.status === 403){
                        localStorage.removeItem('user');
                        localStorage.removeItem('isUserLoggedIn');
                        alert("Vous devez être administrateur pour vous connecter.");
                    }
                });
        },
        
        async logout() {
            await axios.post("api/logout")
            localStorage.removeItem('isUserLoggedIn')
            this.user = {}
            this.isLogged = false
            await router.push({name: 'connexion'})
        }
    }
})
