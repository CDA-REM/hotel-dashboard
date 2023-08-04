<template>
  <a-space direction="vertical" :size="12">
    <a-range-picker v-model="value1" :format="dateFormatList" :placeholder="['Du','Au']" autofocus="true"/>
    <div v-if="value1">
      <p>Value 1: {{ formatDate(value1[0]) }} to {{ formatDate(value1[1]) }}</p>
    </div>
  </a-space>
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
      value1: ref<RangeValue>(),
      dateFormatList: ['DD/MM/YYYY', 'DD/MM/YY']
    };
  },
  methods: {
    // Format the date as per your requirement
    formatDate(date: Dayjs | null) {
      if (date) {
        console.log('date', this.value1[0]);
        return date.format(this.dateFormatList[0]);
      }
      return '';
    }
  }
});
</script>


<style scoped>

</style>