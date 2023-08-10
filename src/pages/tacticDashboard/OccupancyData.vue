<script>
import {defineComponent} from 'vue'
import cardComp from "../../components/CardComp.vue";

export default defineComponent({
  name: "OccupancyData",
  components: {cardComp},
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
        averageHotelOccupancyRate : {
          id: 1,
              title: 'Taux de remplissage moyen',
              stat: `${this.$dashboardTacticStore.occupancyRateTactic.occupancy_rate}` || '100 %' || null
        },
        TotalOfReservation : {
          id: 2,
              title: 'Nombre de réservations',
              stat: `${this.$dashboardTacticStore.numberOfReservationTactic.total_reservations}` || '100' || null
        },
      };
    }
  }
})
</script>

<template>
  <div>
    <a-divider orientation-margin="0px"><h2>Données d'occupation</h2></a-divider>
    <div v-if="$dashboardTacticStore.occupancyRateTactic?.occupancy_rate && $dashboardTacticStore.numberOfReservationTactic?.total_reservations">
      <cardComp
          v-for="statistic in statistics"
          :key="statistic.id"
          :titre="statistic.title"
          :contenu="statistic.stat"
          head-style="background-color:var(--hotel-arth-yellow); text-align: center;"
          style="margin: 3rem"
      />
    </div>
    <div v-else>
      <cardComp
          v-for="statistic in statistics"
          :key="statistic.id"
          :titre="statistic.title"
          :contenu="this.default.stat"
          head-style="background-color:var(--hotel-arth-yellow); color: #ffffff; text-align: center;"
          style="margin: 3rem; color: #ffffff;"
          class="ant-card-body__font-size-1rem"
      />
    </div>

  </div>

</template>

<style scoped>

</style>