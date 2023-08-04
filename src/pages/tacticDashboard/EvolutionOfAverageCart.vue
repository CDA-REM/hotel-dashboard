<script>
import {defineComponent} from 'vue';
import { VueApexCharts } from "apexcharts";

export default defineComponent({
  name: "EvolutionOfAverageCart",
  components: VueApexCharts,
  data() {
    return {
      series: [{
        name: 'Panier moyen',
        data: [253, 350, 1000, 2500, 420, 6000, 800, 544, 389, 500, 890]
      }],
      chartOptions: {
        chart: {
          type: 'area',
          stacked: false,
          height: 350,
          zoom: {
            type: 'x',
            // enabled: false,
            enabled: true,
            autoScaleYaxis: true
          },
        },
        dataLabels: {
          enabled: true
        },
        markers: {
          size: 0,
          colors:['#ff1677'],
        },
        fill: {
          colors:['#1677ff'],
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
          },
        },
        yaxis: {
          title: {
            text: 'Montant en Euros'
          },
          // type: 'numeric',
          // categories: [0,200,400,600,800,1000,1200,1400,1600,1800,2000]
        },
        xaxis: {
          title: {
            text: 'Dates'
          },
          type: 'date',
          categories: ['10-01-2023', '11-01-2023', '12-01-2023', '13-01-2023', '14-01-2023', '15-01-2023', '16-01-2023', '17-01-2023', '18-01-2023', '19-01-2023', '20-01-2023'],

        },
      },
    }
  }
})
</script>

<template>
  <a-card title="Evolution du panier moyen" style="min-width: fit-content; min-height: 350px" head-style="text-align: center;" >
  <div id="chart">
    <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
  </a-card>
</template>

<style scoped>

</style>