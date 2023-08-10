import { defineStore } from "pinia";
import axios from "axios";

export const useDashboardOperationalStore = defineStore('dashboardOperational', {
    state() {
        return {
            reservations : [],
            numberOfPeople : 0,
            menus: []
        }
    },
    actions: {
        async loadDailyData() {
            const resa = await axios.get('http://192.168.1.95:8000/api/dashboard/operational/table');
            this.$state.reservations = resa.data;      

            const people = await axios.get('http://192.168.1.95:8000/api/dashboard/operational/total-people')
            this.$state.numberOfPeople = parseInt(people.data);

            const menus = await axios.get('http://192.168.1.95:8000/api/dashboard/operational/menus');
            this.$state.menus = menus.data;
        }
    }
})