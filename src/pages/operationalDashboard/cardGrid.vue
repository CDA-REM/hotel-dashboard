<template>
    <div>
        <div style="padding: 20px ; width: 80%">
            <a-row :gutter="16">
            <a-col :span="8">
                <cardComp titre="Chambres disponibles" contenu="12" />
            </a-col>
            <a-col :span="8">
                <cardComp titre="Clés en cours d'utilisation" contenu="24" />
            </a-col>
            <a-col :span="8">
                <cardComp titre="Taux de remplissage actuel" contenu="12%" />
            </a-col>
            <a-col :span="8">
                <chartCard titre="Taux d'occupation" />
            </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
import cardComp from '../../components/cardComp.vue';
import chartComp from './chartComp.vue';
import ChartCard from './chartCard.vue';

export default {
    name: "CardGrid",
    components: { cardComp, ChartCard, chartComp }
}
</script>

<style>
    
</style>