<template>
  <div>
    <a-space direction="vertical" :size="12">
      <a-range-picker
          :value="pickerValue"
          @change="onChange"
          :format="dateFormatList"
          :placeholder="['Du','Au']"
          :locale="locale"
      />
    </a-space>
    <div v-if="pickerValue">
      <p> {{ pickerValue }}</p>
      <p>Dates sélectionnées : {{ formatDate(pickerValue) }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import dayjs, { Dayjs } from 'dayjs';
import locale from 'ant-design-vue/es/date-picker/locale/fr_FR';

type RangeValue = [Dayjs, Dayjs];

export default defineComponent({
  name: 'RangePicker',
  data() {
    return {
      rangeValue: [Dayjs, Dayjs],
      pickerValue: this.rangeValue,
      dateFormatList: ['DD/MM/YYYY', 'DD/MM/YY'],
      locale
    };
  },
  methods: {
    onChange(val: RangeValue) {
      this.pickerValue = val;
      this.$dashboardTacticStore.dateFilter = this.formatDatesToYYYYMMDD(this.pickerValue);
      this.fetchReservations();
    },
    fetchReservations() {
      this.$dashboardTacticStore.fetchReservationsBetweenDates();
    },

    /**
     * Fonction qui prend en entrée un tableau de dates et qui retourne un tableau de dates formatées en YYYY-MM-DD
     * @param dates les valeurs choisies dans le range picker
     * @returns formattedDates, un tableau de dates formatées en YYYY-MM-DD
     */
    formatDatesToYYYYMMDD(dates: RangeValue) {
      if (dates) {
        const formattedDates = dates.map(date => dayjs(date).format('YYYY-MM-DD'));
        return formattedDates;
      }
    },
    // function qui prend en entrée le tableau de date et qui retourne un tableau de dates formatées
    formatDate(dates :RangeValue) {
      if (dates) {
        return `du ${dayjs(dates[0]).format('DD/MM/YYYY')} au ${dayjs(dates[1]).format('DD/MM/YYYY')}`;
      }
    },
  },
});
</script>


<style scoped>

</style>