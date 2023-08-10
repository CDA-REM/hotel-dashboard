<script>
import {defineComponent} from 'vue'
import CardComp from "@/components/CardComp.vue";


export default defineComponent({
  name: "FinancialCards",
  components: {CardComp},
  data() {
    return {
      default: {
        stat: 'Pas de données à afficher. \n Veuillez choisir une autre date'
      }
    }
  },
  computed: {
    statistics() {
      return {
        averageCart: {
          id: 1,
          title: 'Panier moyen',
          stat: `${this.$dashboardTacticStore.averageCartValueTactic.average_cart_value} €` || '100 €' || null
        },
        sales: {
          id: 2,
          title: 'Chiffre d\'affaire',
          stat: this.$dashboardTacticStore.totalSalesTactic.total_sales + ' €' || '100 €' || null
        },
      }
    }
  },
})
</script>

<template>
  <div>
    <div v-if="$dashboardTacticStore.totalSalesTactic?.total_sales && $dashboardTacticStore.averageCartValueTactic.average_cart_value">
      <cardComp
      v-for="statistic in statistics"
      :key="statistic.id"
      :titre="statistic.title"
      :contenu="statistic.stat"
      head-style="background-color:var(--hotel-arth-blue); color: #ffffff; text-align: center;"
      style="margin: 3rem; color: #ffffff"
      />
    </div>
    <div v-else>
      <cardComp
          v-for="statistic in statistics"
          :key="statistic.id"
          :titre="statistic.title"
          :contenu="this.default.stat"
          head-style="background-color:var(--hotel-arth-blue); color: #ffffff; text-align: center;"
          style="margin: 3rem; color: #ffffff;"
          class="ant-card-body__font-size-1rem"
      />
    </div>
  </div>
</template>

<style scoped>

/* TODO - Bugfix : this style doesn't apply */
div.ant-card.ant-card-body__font-size-1rem > div.ant-card-body > p {
  font-size: 1rem !important;
}
</style>