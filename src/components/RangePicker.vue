<script lang="ts" setup>
import { ref } from 'vue';
import type { Dayjs } from 'dayjs';

type RangeValue = [Dayjs, Dayjs];
const value1 = ref<RangeValue>();
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
</script>

<template>
  <a-space direction="vertical" :size="12">
    <a-range-picker v-model:value="value1" :format="dateFormatList" :placeholder="['Du','Au']" />
  </a-space>
</template>

<style scoped>

</style>