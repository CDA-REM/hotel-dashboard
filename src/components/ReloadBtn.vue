<script>
import {defineComponent} from 'vue'
import {ReloadOutlined} from "@ant-design/icons-vue"

export default defineComponent({
  name: "ReloadBtn",
  components: {ReloadOutlined}
})
</script>

<template>
  <a-button type="primary" title="Mettre à jour les données"><reload-outlined />Mettre à jour les données</a-button>
</template>

<style scoped>

</style>