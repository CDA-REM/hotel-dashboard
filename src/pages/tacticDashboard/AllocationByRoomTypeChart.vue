<script>
import {defineComponent} from 'vue';
import cardComp from "@/components/CardComp.vue";
import { ApexCharts } from "apexcharts";

export default defineComponent({
  name: "AllocationByRoomTypeChart",
  components: cardComp, ApexCharts,
  data() {
    return {
      series: [60, 55, 13],
      chartOptions: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['classique', 'luxe', 'suite'],
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
  <a-card title="Répartition par type de chambre" style="min-width: fit-content; min-height: 350px" head-style="text-align: center;" >
    <div id="pie-chart">
      <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
    </div>
  </a-card>
</template>

<style scoped>

</style>