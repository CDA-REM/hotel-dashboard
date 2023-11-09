<script>
import {defineComponent} from 'vue';
import { VueApexCharts } from "apexcharts";
import cardComp from "@/components/CardComp.vue";
import {useDashboardTacticStore} from "@/stores/dashboardTactic";

export default defineComponent({
  name: "EvolutionOfAverageCart",
  components: VueApexCharts,cardComp,
  data() {
    return {
      series: [],
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
          type: 'numeric',
        },
        xaxis: {
          title: {
            text: 'Dates'
          },
          type: 'date',
          categories: this.$dashboardTacticStore.averageCartEvolutionTactic?.average_cart_evolution?.date_list,
        },
      },
    }
  },
  computed: {
    statistics() {
      return {
          date: this.$dashboardTacticStore.averageCartEvolutionTactic?.averageCartEvolution?.date_list,
          value: this.$dashboardTacticStore.averageCartEvolutionTactic?.averageCartEvolution?.value_list,
      }
    },
    dashboardTacticStore() {
      return useDashboardTacticStore();
    }
  },
  watch: {
    dashboardTacticStore: {
      handler(newValue, oldValue) {
        if (newValue.averageCartEvolutionTactic) {
          this.series = [{
            name: 'Panier moyen',
            data: newValue.averageCartEvolutionTactic?.average_cart_evolution?.value_list,
          }];
          this.chartOptions = {
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
              type: 'numeric',
            },
            xaxis: {
              title: {
                text: 'Dates'
              },
              type: 'date',
              categories: this.$dashboardTacticStore.averageCartEvolutionTactic?.average_cart_evolution?.date_list,
            },
          };
        }
      },
      deep: true,
      immediate: true,
    },
  }
})
</script>

<template>
  <div>
    <div v-if="$dashboardTacticStore.averageCartEvolutionTactic?.average_cart_evolution">
      <a-card title="Evolution du panier moyen" style="min-width: fit-content; min-height: 350px" head-style="text-align: center;" >
        <div id="chart">
          <div style="display: none"> {{ statistics }}</div>
          <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
        </div>
      </a-card>
    </div>
    <div v-else>
      <cardComp
          titre="Evolution du panier moyen"
          contenu="Pas de données à afficher. Veuillez choisir une autre date"
          head-style="background-color:var(--hotel-arth-blue); color: #ffffff; text-align: center;"
          style="margin: 3rem; color: #ffffff;"
          class="ant-card-body__font-size-1rem"
      />
    </div>
  </div>

</template>

<style scoped>

</style>