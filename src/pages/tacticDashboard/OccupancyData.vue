<script>
import {defineComponent} from 'vue'
import CardComp from "@/components/cardComp.vue";

export default defineComponent({
  name: "OccupancyData",
  components: {CardComp},
  data() {
    return {
      statistics: {
        averageHotelOccupancyRate : {
          id: 1, title: 'Taux de remplissage moyen', stat: '89 %'
        },
        TotalOfReservation : {
          id: 2, title: 'Nombre de réservations', stat: '112'
        },
      },
    }
  }
})
</script>

<template>
  <a-divider orientation-margin="0px"><h2>Données d'occupation</h2></a-divider>
  <cardComp
      v-for="statistic in statistics"
      :key="statistic.id"
      :titre="statistic.title"
      :contenu="statistic.stat"
      head-style="background-color:var(--hotel-arth-yellow); text-align: center;"
      style="margin: 3rem"
  />
</template>

<style scoped>

</style>