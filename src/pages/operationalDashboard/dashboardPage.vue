<template>
    <div class="daily-dashboard">
        <h1>Informations du jour</h1>

        <h2>Statistiques</h2>
        <a-divider />
        <customCardGrid :people="$dashboardOperational.numberOfPeople"
            :numberOfKeys="$dashboardOperational.numberOfKeys"
            :menus="$dashboardOperational.menus"
            :freeRooms="$dashboardOperational.freeRooms"
            :occupationRate="$dashboardOperational.occupationRate"/>

        <h2>Occupation des chambres</h2>
        <a-divider />
        <tableComp :tableData="$dataStore.reservations"/>
    </div>
</template>

<script>
import customCardGrid from './customCardGrid.vue';
import TableComp from './TableComp.vue'; 

export default {
    name: "operationalDashboard",
    components: { customCardGrid, TableComp },
    async mounted() {
        await this.$dashboardOperational.loadDailyData();

        if (this.$dashboardOperational.reservations) {
            this.$dashboardOperational.countNumberOfKeys();
            this.$dashboardOperational.countFreeRooms();
            this.$dashboardOperational.calculateOccupationRate();
        }

    }
}
</script>
    
<style>
   h1 { text-align: center;
        padding-bottom: 3%;
        size: 24px }
   
   .daily-dashboard { padding: 5% }
</style>