import { defineStore } from "pinia";
import axios from "axios";

export const useDashboardOperationalStore = defineStore('dashboardOperational', {
    state() {
        return {
            reservations : [],
            numberOfPeople : 0,
            menus: [],
            numberOfKeys: 0,
            freeRooms: 0,
            occupationRate: []
        }
    },
    actions: {
        async loadDailyData() {
            const resa = await axios.get('/api/dashboard/operational/table');
            this.$state.reservations = resa.data;      

            const people = await axios.get('/api/dashboard/operational/total-people')
            this.$state.numberOfPeople = parseInt(people.data);

            const menus = await axios.get('/api/dashboard/operational/menus');
            this.$state.menus = menus.data;

            
        },
        countNumberOfKeys() {
            let reservationWithKeys = this.$state.reservations.filter((reservation) => reservation["nombreCle"] != undefined)
            let keysPerReservation = reservationWithKeys.map((reservation) => reservation["nombreCle"]);

            this.$state.numberOfKeys = keysPerReservation.reduce((acc, curr) => acc + curr, 0);
        },

        countFreeRooms() {
            this.$state.freeRooms = this.$state.reservations.filter((reservation) => reservation["tags"] == "disponible").length;
        },

        calculateOccupationRate() {
            let occupiedRooms = this.$state.reservations.filter((reservation) => reservation["tags"] == "occupée").length
            let freeRooms = this.$state.reservations.filter((reservation) => reservation["tags"] == "disponible").length

            this.$state.occupationRate = [occupiedRooms, freeRooms]
        }
    }
})