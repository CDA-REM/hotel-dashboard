<template>
    <div>
        <div style="padding: 20px ; width: 80%">
            <a-row :gutter="16" style="margin-bottom: 3%;">
                <a-space size="middle">
                    <a-col :span="8">
                        <cardComp titre="Chambres disponibles" contenu="12" />
                    </a-col>
                    <a-col :span="8">
                        <cardComp titre="Clés en cours d'utilisation" contenu="24" />
                    </a-col>
                    <a-col :span="8">
                        <cardComp titre="Taux de remplissage actuel" contenu="12%" />
                    </a-col>
                </a-space>
            </a-row>
            <a-row>
                    <a-col :span="8">
                        <chartCard titre="Taux d'occupation" />
                    </a-col>


                    <a-col :span="8">
                        <a-card title="Repas" style="text-align: center;">
                            <a-card-grid style="width: 33%; text-align: center" :hoverable="false">
                                <h3>PDJ</h3>
                                <a-divider />
                                <p>12</p>
                            </a-card-grid>
                            <a-card-grid style="width: 33%; text-align: center" :hoverable="false">
                                <h3>DEJ</h3>
                                <a-divider />
                                <p>5</p>
                            </a-card-grid>
                            <a-card-grid style="width: 34%; text-align: center" :hoverable="false">
                                <h3>DINER</h3>
                                <a-divider />
                                <p>12</p>
                            </a-card-grid>
                        </a-card>
                    </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
import cardComp from '../../components/CardComp.vue';
import chartComp from './chartComp.vue';
import ChartCard from './chartCard.vue';

export default {
    name: "CardGrid",
    components: { cardComp, ChartCard, chartComp }
}
</script>

<style>
    h3 {
        font-variant: small-caps;
    }
</style>