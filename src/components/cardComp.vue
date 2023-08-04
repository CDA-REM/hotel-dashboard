<template lang="">
  <div>
    <a-card :title=titre :class=class :bordered="false" :loading=false :head-style=headStyle style="min-width:300px">
        <p>{{contenu}}</p>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "cardComp",
  props: {
    titre: {
      type :String,
      required: true,
      default: 'Titre de la carte'},
    contenu: {
      type: String
    },
    class: {
      type: String
    },
    headStyle: {
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
    }
</style>