<template >
  <div style="min-width: 250px">
    <a-card  :title=titre :bordered="false" :loading=false :head-style=headStyle >
      <div :style=style>
        <p style="padding: 10px; margin: 0; color: #2D494C">{{contenu1}}</p>
        <p style="padding: 10px; margin: 0; color: #F11010">{{contenu2}}</p>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "cardMultiContent",
  props: {
    titre: {
      type :String,
      required: true,
      default: 'Titre de la carte'},
    contenu1: {
      type: String
    },
    contenu2: {
      type: String
    },
    class: {
      type: String
    },
    headStyle: {
      type: String,
    },
    style: {
      type: String,
    }
  }
}
</script>

<style lang="css">
.ant-card-body {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  padding: 5px 10px !important;
}
.ant-card-head-title {
  white-space: normal !important;
  overflow: visible !important;
}

</style>