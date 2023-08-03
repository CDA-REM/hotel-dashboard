<template lang="">
    <div id="chart">
        <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>

export default {
  name: 'chartComp',
  data() {
    return {
      series: [12, 20],
  
      chartOptions: {
        chart: {
          type: 'donut',
        },
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
        }]}
    }

    }
        

    }
</script>

<style>
    
</style>