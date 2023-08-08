<template>
    <div class="daily-dashboard">
        <h1>Informations du jour</h1>
        <h2>Statistiques</h2>
        <a-divider />
        <customCardGrid />
        <h2>Occupation des chambres</h2>
        <a-divider />
        <tableComp />
    </div>

        <h2></h2>
</template>

<script>
import customCardGrid from './customCardGrid.vue';
import TableComp from './TableComp.vue';

export default {
    name: "operationalDashboard",
    components: { customCardGrid, TableComp }
}
</script>
    
<style>
   h1 { text-align: center;
        padding-bottom: 3%;
        size: 24px }
   
   .daily-dashboard { padding: 5% }
</style>