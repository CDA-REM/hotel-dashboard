<template>
    <div>
        <div style="padding: 20px ; width: 80%">
            <a-row :gutter="16" style="margin-bottom: 3%;">
                <a-space size="middle">
                    <a-col :span="8">
                        <cardComp titre="Chambres disponibles" :contenu=String(freeRooms) />
                    </a-col>
                    <a-col :span="8">
                        <cardComp titre="Clés en cours d'utilisation" :contenu=String(numberOfKeys) />
                    </a-col>
                    <a-col :span="8">
                        <cardComp titre="Nombre de clients" :contenu=String(people) />
                    </a-col>
                    
                </a-space>
            </a-row>
            <a-row>
                <a-col :span="8">
                    <chartCard titre="Taux d'occupation" :occupationRate="occupationRate"/>
                </a-col>
                <a-col :span="8">
                    <antCardGrid :menus=menus />
                </a-col>
            </a-row>

            <a-row>
                <a-col :span="24">
                    <BarChart/>
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
import cardComp from '../../components/CardComp.vue';
import ChartCard from './chartCard.vue';
import antCardGrid from './antCardGrid.vue';
import BarChart from './BarChart.vue';

export default {
    name: "customCardGrid",
    components: { cardComp, ChartCard, antCardGrid, BarChart },
    props: {
        people: Number,
        menus: Array,
        numberOfKeys: Number,
        freeRooms: Number,
        occupationRate: Array
    }
}
</script>

<style>
    h3 {
        font-variant: small-caps;
    }
    :where(.css-dev-only-do-not-override-jqu7eg).ant-row {
        justify-content: space-evenly;
    }
</style>