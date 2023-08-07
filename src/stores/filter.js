import {defineStore} from 'pinia'
import apiRequester from "../utils/apiRequester.js"

export const useFilterStore = defineStore('filter', {
    state() {
        return {
            dateFilter: null
        }
    },
    actions: {

    }
})
