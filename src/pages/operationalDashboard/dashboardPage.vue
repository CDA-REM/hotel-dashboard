<template>
    <div class="daily-dashboard">
        <h1>Informations du jour</h1>
        <h2>Statistiques</h2>
        <a-divider />
        <cardGrid />
        <h2>Occupation des chambres</h2>
        <a-divider />
        <tableComp />
    </div>

        <h2></h2>
</template>

<script>
import cardGrid from './cardGrid.vue';
import tableComp from './tableComp.vue';

export default {
    name: "operationalDashboard",
    components: { cardGrid, tableComp }
}
</script>
    
<style>
   h1 { text-align: center;
        padding-bottom: 3% }
   
   .daily-dashboard { padding: 5%}
</style>