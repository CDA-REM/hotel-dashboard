<template>
    <div id="chart">
        <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
</template>
<script>
export default {
    data() {
        return {
          series: [{
            name: 'Checkouts',
            data: [null, null, null, null, 4, 5, null, 11, null, null, null, null, null, null, null, null, null, null, null, null, null]
          }, {
            name: 'Checkins',
            data: [null, null, null, null, null, null, null, null, null, 10, 15, null, 12, null, 10, 12, 15, null, null]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              },
              animations: {
                enabled: false
              }
            },
            stroke: {
              width: [5,5,4],
              curve: 'straight'
            },
            labels: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            title: {
              text: 'Répartition des checkins et checkouts'
            },
            xaxis: {
            },
          },
        }
    }
}
</script>
<style>
    
</style>