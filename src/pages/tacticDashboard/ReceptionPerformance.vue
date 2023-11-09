<script>
import { defineComponent, computed } from 'vue';
import CardComp from "@/components/CardComp.vue";

export default defineComponent({
  name: "ReceptionPerformance",
  components: {CardComp},
  data() {
    return {
      default: {
        stat: 'Pas de données à afficher. \n Veuillez choisir une autre date'
      }
    }
  },
  computed: {
    statistics() {
      return {
        averageTimeBetweenBookingAndCheckin : {
          id: 1,
          title: 'Durée moyenne entre réservation et checkin',
          stat: `${this.$dashboardTacticStore?.averageTimeBetweenBookingAndCheckinTactic?.average_time_between_booking_and_checkin} jours` || '2j 20h 13min',
        },
        averageDurationOfAStay : {
          id: 2,
          title: 'Durée moyenne d\'un séjour',
          // Utilisez la valeur du store ou une valeur par défaut
          stat: `${this.$dashboardTacticStore.averageDurationOfAStay?.average_duration_of_a_stay} jours` || '3 jours',
        },
      }
    },
    hasAverageDurationOfAStay() {
      return !!this.$dashboardTacticStore.averageDurationOfAStay?.average_duration_of_a_stay;
    },
    hasAverageTimeBetweenBookingAndCheckin() {
      return !!this.$dashboardTacticStore.averageTimeBetweenBookingAndCheckinTactic?.average_time_between_booking_and_checkin;
    }
  }
})
</script>


<template>
  <a-divider orientation-margin="0px"><h2>Performance d'accueil</h2></a-divider>
  <div v-if="hasAverageDurationOfAStay && hasAverageTimeBetweenBookingAndCheckin">
    <CardComp
      v-for="statistic in statistics"
      :key="statistic.id" :titre="statistic.title"
      :contenu="statistic.stat"
      class="card-header-bg-arth-light-blue"
      head-style="background-color:var(--hotel-arth-light-blue); text-align: center;"
      style="margin: 3rem"
    />
  </div>
  <div v-else>
    <cardComp
      titre="Durée moyenne entre réservation et checkin"
      :contenu="this.default.stat"
      head-style="background-color:var(--hotel-arth-light-blue); text-align: center;"
      style="margin: 3rem; color: #ffffff;"
      class="ant-card-body__font-size-1rem"
    />
    <cardComp
      titre="Durée moyenne d'un séjour"
      :contenu="this.default.stat"
      head-style="background-color:var(--hotel-arth-light-blue); text-align: center;"
      style="margin: 3rem; color: #ffffff;"
      class="ant-card-body__font-size-0.5rem"
    />
  </div>
</template>

<style scoped>

</style>