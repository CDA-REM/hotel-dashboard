<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "UserAccountPage",
  data() {

  }
})
</script>

<template>
  <h1> User Account Page </h1>
  <div>{{ this.$userStore.user }}</div>
</template>

<style scoped>

</style>