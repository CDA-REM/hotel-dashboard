import {defineStore} from 'pinia'
import axios from "axios";

export const useDashboardTacticStore = defineStore('dashboardTactic', {
    state() {
        return {
            dateFilter: null,
            reservationsTactic: [],
            totalSalesTactic: {},
            averageCartValueTactic: {},
            averageCartEvolutionTactic: {},
            numberOfReservationTactic: {},
            occupancyRateTactic: {},
            occupancyRateByRoomTypeTactic: {},
            occupancyRateByOptionsTactic: {},
            averageTimeBetweenBookingAndCheckinTactic: {},
            receptionPerformanceTactic: {},
            formattedData: {},
            defaultTacticContent : 'Pas de données à afficher. \n Veuillez choisir une autre date',
            isLoading: false,
        }
    },
    actions: {
        async fetchReservations() {
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
            } catch (error) {
                console.error("Une erreur s'est produite lors de la récupération des réservations:", error);
            }
        },
        async fetchTotalSales() {
            try {
                const startDate = this.dateFilter[0]; // Première date du filtre
                const endDate = this.dateFilter[1]; // Deuxième date du filtre

                const response = await axios.get(`/api/dashboard/tactical/totalSales`, {
                    params: {
                        start_date: startDate,
                        end_date: endDate,
                    },
                });
                this.totalSalesTactic = response.data;
                console.log(this.totalSalesTactic);

            } catch (error) {
                console.error("Une erreur s'est produite lors de la récupération des réservations:", error);
            }
        },
        async fetchAverageCartValue() {
            try {
                const startDate = this.dateFilter[0]; // Première date du filtre
                const endDate = this.dateFilter[1]; // Deuxième date du filtre
                const response = await axios.get(`/api/dashboard/tactical/averageCart`, {
                    params: {
                        start_date: startDate,
                        end_date: endDate,
                    },
                });
                this.averageCartValueTactic = response.data;

                console.log(this.averageCartValueTactic);

            } catch (error) {
                console.error("Une erreur s'est produite lors de la récupération des données : ", error);
            }
        },
        async fetchAverageCartEvolution() {
            try {
                const startDate = this.dateFilter[0]; // Première date du filtre
                const endDate = this.dateFilter[1]; // Deuxième date du filtre

                const response = await axios.get(`/api/dashboard/tactical/averageCartEvolution`, {
                    params: {
                        start_date: startDate,
                        end_date: endDate,
                    },
                });
                this.averageCartEvolutionTactic = response.data;

                console.log(this.averageCartEvolutionTactic);

            } catch (error) {
                console.error("Une erreur s'est produite lors de la récupération des données : ", error);
            }
        },
        async fetchNumberOfReservations() {
            try {
                const startDate = this.dateFilter[0]; // Première date du filtre
                const endDate = this.dateFilter[1]; // Deuxième date du filtre

                const response = await axios.get(`/api/dashboard/tactical/occupancy`, {
                    params: {
                        start_date: startDate,
                        end_date: endDate,
                    },
                });
                this.numberOfReservationTactic = response.data;

                console.log(this.numberOfReservationTactic);

            } catch (error) {
                console.error("Une erreur s'est produite lors de la récupération des données : ", error);
            }
        },
        async fetchOccupancyRate() {
            try {
                const startDate = this.dateFilter[0]; // Première date du filtre
                const endDate = this.dateFilter[1]; // Deuxième date du filtre

                const response = await axios.get(`/api/dashboard/tactical/occupancyRate`, {
                    params: {
                        start_date: startDate,
                        end_date: endDate,
                    },
                });
                this.occupancyRateTactic = response.data;

                console.log(this.occupancyRateTactic)

            } catch (error) {
                console.error("Une erreur s'est produite lors de la récupération des données : ", error);
            }
        },
        async fetchOccupancyRateByRoomType() {
            try {
                const startDate = this.dateFilter[0]; // Première date du filtre
                const endDate = this.dateFilter[1]; // Deuxième date du filtre

                const response = await axios.get(`/api/dashboard/tactical/occupancyRateByRoomType`, {
                    params: {
                        start_date: startDate,
                        end_date: endDate,
                    },
                });
                this.occupancyRateByRoomTypeTactic = response.data;

                console.log(this.occupancyRateByRoomTypeTactic);

            } catch (error) {
                console.error("Une erreur s'est produite lors de la récupération des données : ", error);
            }
        },
        async fetchOccupancyRateByOptions() {
            try {
                const startDate = this.dateFilter[0]; // Première date du filtre
                const endDate = this.dateFilter[1]; // Deuxième date du filtre

                const response = await axios.get(`/api/dashboard/tactical/occupancyRateByOptions`, {
                    params: {
                        start_date: startDate,
                        end_date: endDate,
                    },
                });
                this.occupancyRateByOptionsTactic = response.data;

                console.log(this.occupancyRateByOptionsTactic);

            } catch (error) {
                console.error("Une erreur s'est produite lors de la récupération des données : ", error);
            }
        },
        async fetchAverageTimeBetweenBookingAndCheckin() {
            try {
                const startDate = this.dateFilter[0]; // Première date du filtre
                const endDate = this.dateFilter[1]; // Deuxième date du filtre

                const response = await axios.get(`/api/dashboard/tactical/averageTimeBetweenBookingAndCheckin`, {
                    params: {
                        start_date: startDate,
                        end_date: endDate,
                    }
                });
                this.averageTimeBetweenBookingAndCheckinTactic = response.data;

                console.log(this.averageTimeBetweenBookingAndCheckinTactic);
            } catch (error) {
                console.error("Une erreur s'est produite lors de la récupération des données : ", error);
            }
        },
        async fetchAverageDurationOfAStay() {
            try {
                const startDate = this.dateFilter[0]; // Première date du filtre
                const endDate = this.dateFilter[1]; // Deuxième date du filtre

                const response = await axios.get(`/api/dashboard/tactical/averageDurationOfAStay`, {
                    params: {
                        start_date: startDate,
                        end_date: endDate,
                    }
                });
                this.averageDurationOfAStay = response.data;

                console.log(this.averageDurationOfAStay);
            } catch (error) {
                console.error("Une erreur s'est produite lors de la récupération des données : ", error);
            }
        },

        async fetchReceptionPerformance() {
            try {
                const startDate = this.dateFilter[0]; // Première date du filtre
                const endDate = this.dateFilter[1]; // Deuxième date du filtre

                const response = await axios.get(`/api/dashboard/tactical/averageDurationOfACheckin`, {
                    params: {
                        start_date: startDate,
                        end_date: endDate,
                    }
                });
                this.receptionPerformanceTactic = response.data;

                console.log(this.receptionPerformanceTactic);

            } catch (error) {
                console.error("Une erreur s'est produite lors de la récupération des données : ", error);
            }
        }
    }
})
