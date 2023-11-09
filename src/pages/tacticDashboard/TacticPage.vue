<template>
  <div id="printToPdf">
    <h1>Réservations</h1>
    <a-row justify="space-between">
      <a-col :span="3">
        <p class="header__paragraph">Sur la période : </p>
      </a-col>
      <a-col :span="6">
        <TacticRangePicker/>
      </a-col>
      <a-col :span="5">
        <ReloadBtn @click="console.log('Je suis dans mon composant parent')" />
      </a-col>
      <a-col :span="3.5">
        <PrintToPdfBtn @click="generatePDF()"/>
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
import CardComp from "@/components/CardComp.vue";
import html2pdf  from "html2pdf.js";

import AllocationByRoomTypeChart from "@/pages/tacticDashboard/AllocationByRoomTypeChart.vue";
import AllocationByOptionsChart from "./AllocationByOptionsChart.vue";
import OccupancyData from "./OccupancyData.vue";
import ReceptionPerformance from "@/pages/tacticDashboard/ReceptionPerformance.vue";
import TacticRangePicker from "@/pages/tacticDashboard/TacticRangePicker.vue";
import FinancialCards from "@/pages/tacticDashboard/FinancialCards.vue";
import EvolutionOfAverageCart from "@/pages/tacticDashboard/EvolutionOfAverageCart.vue";
import PrintToPdfBtn from "@/components/printToPdfBtn.vue";

export default {
  name: "TacticPage",
  components: {
    PrintToPdfBtn,
    EvolutionOfAverageCart,
    FinancialCards,
    AllocationByRoomTypeChart,
    AllocationByOptionsChart,
    TacticRangePicker,
    ReceptionPerformance,
    CardComp,
    ReloadBtn,
    OccupancyData,
  },
  methods: {
    generatePDF() {
      const element = document.getElementById('printToPdf');
      const options = {
        margin: [1.5, 2], // Haut et bas à 1.5cm, gauche et droite à 2cm
        filename: `reservations-${new Date().toLocaleDateString('fr-FR', {
          year: 'numeric', month: '2-digit', day: '2-digit'
        }).replace(/-/g, '_')}.pdf`,
        image: { type: 'png', quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: 'cm', format: 'a4', orientation: 'landscape' }
      };
      html2pdf().set(options).from(element).save().then(() => {
        console.log('PDF generated and downloaded');
      });
    }
},
};
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