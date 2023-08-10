<script>
import {defineComponent} from 'vue';

import cardComp from "@/components/CardComp.vue";
import { ApexCharts } from "apexcharts";

export default defineComponent({
  name: "AllocationByOptionsChart",
  components: cardComp, ApexCharts,
  data() {
    return {
      series: [44, 55, 13, 43, 4, 4, 24, 20],
      chartOptions: {
        chart: {
          width: 380,
          type: 'donut',
        },
        labels: ['Petit-déjeuner', 'Formule midi', 'Formule soir', 'Formule midi - soir', 'Pressing', 'Canal +', 'Piscine'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    }
  }
})
</script>

<template>
  <a-card title="Répartition par option" style="min-width: fit-content; min-height: 350px" head-style="text-align: center" >
    <div id="pie-chart">
      <apexchart type="donut" width="380" :options="chartOptions" :series="series"></apexchart>
    </div>
  </a-card>
</template>

<style scoped>

</style>