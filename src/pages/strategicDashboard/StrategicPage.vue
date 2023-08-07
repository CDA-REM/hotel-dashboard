<script>
import DatePickerMonth from "./DatePickerMonth.vue";
import cardMultiContent from "@/pages/strategicDashboard/cardMultiContent.vue";
export default {
  name: "strategicDashboard",
  components: {cardMultiContent, DatePickerMonth},
  data(){
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  }
}
</script>

<template>
  <h1> Données stratégiques</h1>
  <a-row justify="end">

    <a-col :span="4" ><span class ="chip chip1"><DatePickerMonth /></span></a-col>
    <a-col :span="4" ><p style="text-align: center">Par rapport à </p></a-col>
    <a-col :span="4" ><span class ="chip chip2"><DatePickerMonth /></span></a-col>
  </a-row>

  <h2>Chiffres clés</h2>
  <a-divider />
  <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }" class="v-spacer">
    <a-col class="gutter-row" :span="7">
      <div class="gutter-box flex">
        <cardMultiContent
            titre="Chiffre d'affaire"
            contenu1="200 000"
            contenu2="300 000"
            head-style="background-color:var(--hotel-arth-blue); color: #ffffff; text-align: center;"
            style="padding: 0 35px"
        />
      </div>
    </a-col>
    <a-col class="gutter-row" :span="7">
      <div class="gutter-box flex">
        <cardMultiContent
            titre="Nombre de réservations"
            contenu1="200"
            contenu2="250"
            head-style="background-color:var(--hotel-arth-blue); color: #ffffff; text-align: center;"
            style="display: flex; justify-content: space-around; flex-direction: row; padding: 35px"
        />
      </div>
    </a-col>
    <a-col class="gutter-row" :span="7">
      <div class="gutter-box flex">
        <cardMultiContent
            titre="Taux de remplissage moyen"
            contenu1="80%" contenu2="85%"
            head-style="background-color:var(--hotel-arth-blue); color: #ffffff; text-align: center;"
            style="display: flex; justify-content: space-around; flex-direction: row; padding: 35px"
        />
      </div>
    </a-col>
  </a-row>

  <h2>Evolution et comparaison</h2>
  <a-divider />
  <div class="v-spacer flex">
    <apexchart width="400" type="line" :options="options" :series="series"></apexchart>
  </div>

  <h2>Durées moyennes</h2>
  <a-divider />
  <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }" class="v-spacer">
    <a-col class="gutter-row" :span="8">
      <div class="gutter-box flex">
        <cardMultiContent
            titre="Temps moyen entre réservation et check-in"
            contenu1="12j 20h 13mn"
            contenu2="20j 12h 15mn"
            head-style="background-color:var(--hotel-arth-blue); color: #ffffff; text-align: center;"
            style="display: flex; justify-content: space-around; flex-direction: column; padding: 0"
        />
      </div>
    </a-col>
    <a-col class="gutter-row" :span="8">
      <div class="gutter-box flex">
        <cardMultiContent
            titre="Temps d'accueil moyen"
            contenu1="20mn" contenu2="15mn"
            head-style="background-color:var(--hotel-arth-blue); color: #ffffff; text-align: center;"
            style="display: flex; justify-content: space-around; flex-direction: row; padding: 35px"
        />
      </div>
    </a-col>

  </a-row>

</template>

<style scoped>
.chip::before {
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  z-index: 10;
  border-radius: 50%;
  top: -5px;
  left: -5px;
}
.chip1::before {
  background-color: #2D494C;
}
.chip2::before {
  background-color: #F11010;
}
.v-spacer {
  margin-bottom: 50px;
  justify-content: center;
}
.flex {
  display: flex;
  justify-content: center
}
</style>