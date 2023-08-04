<script>
import {defineComponent} from 'vue'
import CardComp from "@/components/cardComp.vue";

export default defineComponent({
  name: "FinancialCards",
  components: {CardComp},
  data() {
    return {
      statistics: {
        averageCart : {
          id: 1, title: 'Panier moyen', stat: '234,80 €'
        },
        sales : {
          id: 2, title: 'Chiffre d\'affaire', stat: "112000,50 €"
        },
      },
    }
  }
})
</script>

<template>
  <cardComp
      v-for="statistic in statistics"
      :key="statistic.id"
      :titre="statistic.title"
      :contenu="statistic.stat"
      head-style="background-color:var(--hotel-arth-blue); color: #ffffff; text-align: center;"
      style="margin: 3rem; color: #ffffff"
  />
</template>

<style scoped>

</style>