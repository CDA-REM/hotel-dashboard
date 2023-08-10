import {defineStore} from 'pinia'
import axios from "axios";

export const useDashboardTacticStore = defineStore('filter', {
    state() {
        return {
            dateFilter: null,
            reservationsTactic: [],
        }
    },
    actions: {
        async fetchReservationsBetweenDates() {
            try {
                const startDate = this.dateFilter[0]; // Première date du filtre
                const endDate = this.dateFilter[1]; // Deuxième date du filtre

                console.log(startDate, endDate);

                const response = await axios.get(`/api/dashboard/tactical/reservationsBetweenDates`, {
                    params: {
                        start_date: startDate,
                        end_date: endDate,
                    },
                });

                // Met à jour les réservations dans le state avec les données reçues de l'API
                this.reservationsTactic = response.data;
                console.log('Voici le résultat de la requête : ', this.reservationsTactic);
            } catch (error) {
                console.error("Une erreur s'est produite lors de la récupération des réservations:", error);
            }
        },
    }
})
