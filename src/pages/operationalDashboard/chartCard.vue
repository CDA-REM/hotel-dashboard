<template>
    <div>
        <a-card :title=titre :bordered="false" style="width:300px">
            <apexchart type="donut" :options="chartOptions" :series="occupationRate"></apexchart>
        </a-card>
    </div>
</template>

<script>

export default {
    name : 'chartCard',
    props: {
        titre: String,
        occupationRate: Array
    },
    data() {

        return {
          series: [12, 22],
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