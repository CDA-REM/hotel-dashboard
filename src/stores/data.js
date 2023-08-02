import { defineStore } from "pinia";

// TEMP : fake data import, must be replaced by API calls later
import { reservations } from "../data/reservations";
import { rooms } from "../data/rooms";
import { options } from "../data/options";

export const useDataStore = defineStore('data', {
    state() {
        return {
            reservations : reservations,
            rooms : rooms,
            options : options
        }
    },
    actions: {
        
    }
})