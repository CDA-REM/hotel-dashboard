<script>
import {defineComponent} from "vue";
import {FilePdfOutlined} from "@ant-design/icons-vue"

export default defineComponent({
  name: "printToPdfBtn",
  components: { FilePdfOutlined }
})
</script>

<template>
  <a-button type="primary" title="Générer un pdf">
    <file-pdf-outlined />Générer un pdf
  </a-button>
</template>

<style scoped>

</style>