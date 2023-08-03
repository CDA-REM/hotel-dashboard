<template>
    <div>
        <a-card :title=titre :bordered="false" style="width:300px">
            <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
        </a-card>
    </div>
</template>

<script>
import chartComp from './chartComp.vue';

export default {
    name : 'chartCard',
    components: { chartComp },
    props: {
        titre: String
    },
    data() {

        return {
          
          series: [ 11, 22 ],

          chartOptions: {
            labels: ["Occupées", "Disponibles"],
            chart: {
              type: 'donut',
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 300
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]}}
        }
}
</script>

<style>
    
</style>