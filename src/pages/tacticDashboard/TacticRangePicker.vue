<template>
  <div>
    <a-space direction="vertical" :size="12">
      <a-range-picker
          :value="pickerValue"
          @change="onChange"
          :format="dateFormatList"
          :placeholder="['Du','Au']"
      />
    </a-space>
    <div v-if="pickerValue">
      <p>Dates sélectionnées : {{ formatDate(pickerValue) }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import { ref } from 'vue';
import dayjs, { Dayjs } from 'dayjs';

type RangeValue = [Dayjs, Dayjs];

export default defineComponent({
  name: 'RangePicker',
  data() {
    return {
      rangeValue: [Dayjs, Dayjs],
      pickerValue: this.rangeValue,
      dateFormatList: ['DD/MM/YYYY', 'DD/MM/YY']
    };
  },
  methods: {
    onChange(val: RangeValue) {
      this.pickerValue = val
      this.$filterStore.dateFilter = this.pickerValue

    },
    // function qui prend en entrée le tableau de date et qui retourne un tableau de dates formatées
    formatDate(dates :RangeValue) {
      if (dates) {
        return `du ${dayjs(dates[0]).format('DD/MM/YYYY')} au ${dayjs(dates[1]).format('DD/MM/YYYY')}`;
      }
    },
  },
  computed: {

  }
});
</script>


<style scoped>

</style>