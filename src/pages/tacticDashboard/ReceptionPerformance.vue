<script>
import {defineComponent} from 'vue'
import CardComp from "@/components/CardComp.vue";

export default defineComponent({
  name: "ReceptionPerformance",
  components: {CardComp},
  data() {
    return {
      statistics: {
        averageTimeBetweenBookingAndCheckin : {
          id: 1, title: 'Durée moyenne entre réservation et checkin', stat: '2j 20h 13min'
        },
        averageDurationOfACheckin : {
          id: 2, title: 'Durée moyenne d\'un accueil', stat: '10 min 32s'
        },
      },
    }
  }
})
</script>

<template>
    <a-divider orientation-margin="0px"><h2>Performance d'accueil</h2></a-divider>
    <CardComp
        v-for="statistic in statistics"
        :key="statistic.id" :titre="statistic.title"
        :contenu="statistic.stat"
        class="card-header-bg-arth-light-blue"
        head-style="background-color:var(--hotel-arth-light-blue); text-align: center;"
        style="margin: 3rem"
    />
</template>

<style scoped>

</style>