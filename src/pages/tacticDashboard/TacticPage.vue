<template>
  <h1>Réservations</h1>
  <div>
    <a-row>
      <a-col :span="4">
        <p class="header__paragraph">Sur la période</p>
      </a-col>
      <a-col :span="12">
        <TacticRangePicker/>
      </a-col>
      <a-col :span="8">
        <ReloadBtn @click="console.log('Je suis dans mon composant parent')" />
      </a-col>
    </a-row>

    <a-divider orientation="left" orientation-margin="0px"><h2>Répartition des chambres et options</h2></a-divider>

    <a-row :gutter="24">
      <a-col class="gutter-row" :span="12">
        <AllocationByRoomTypeChart />
      </a-col>
      <a-col class="gutter-row" :span="12">
        <AllocationByOptionsChart />
      </a-col>
    </a-row>

    <a-row :gutter="24">
      <a-col class="gutter-row" :span="12">
        <OccupancyData/>
      </a-col>
      <a-col class="gutter-row" :span="12">
        <ReceptionPerformance />
      </a-col>
    </a-row>

    <a-divider orientation="left" orientation-margin="0px"><h2>Météo financière</h2></a-divider>

    <a-row :gutter="24">
      <a-col class="gutter-row" :span="12">
        <EvolutionOfAverageCart />
      </a-col>
      <a-col class="gutter-row" :span="12">
        <FinancialCards />
      </a-col>
    </a-row>
  </div>


</template>

<script>
import ReloadBtn from "@/components/ReloadBtn.vue";
import CardComp from "@/components/cardComp.vue";
import AllocationByRoomTypeChart from "@/pages/tacticDashboard/AllocationByRoomTypeChart.vue";
import AllocationByOptionsChart from "./AllocationByOptionsChart.vue";
import OccupancyData from "./OccupancyData.vue";
import ReceptionPerformance from "@/pages/tacticDashboard/ReceptionPerformance.vue";
import TacticRangePicker from "@/pages/tacticDashboard/TacticRangePicker.vue";
import FinancialCards from "@/pages/tacticDashboard/FinancialCards.vue";
import EvolutionOfAverageCart from "@/pages/tacticDashboard/EvolutionOfAverageCart.vue";

export default {
  name: "TacticPage",
  components: {
    EvolutionOfAverageCart,
    FinancialCards,
    AllocationByRoomTypeChart,
    AllocationByOptionsChart,
    TacticRangePicker,
    ReceptionPerformance,
    CardComp,
    ReloadBtn,
    OccupancyData
  },
  data() {
    return {
      //
    };
  },
  methods: {
    //
  },
  computed: {
    //
  },

}
</script>

<style scoped>
.header__paragraph {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0;
}

.ant-row css-dev-only-do-not-override-jqu7eg {
  align-items: center;
}

:where(.css-dev-only-do-not-override-jqu7eg).ant-divider-horizontal.ant-divider-with-text::after {
  border-block-start: 1px solid grey;
  border-block-start-color: grey;
}
</style>