<script>
import locale from 'ant-design-vue/es/date-picker/locale/fr_FR';

export default {
  name: "DatePickerMonth",
  // props: {
  //   titre: {
  //     type :String,
  //     required: true,
  //     default: 'Titre de la carte'},
  //   contenu: {
  //     type: String
  //   },
  //   class: {
  //     type: String
  //   },
  //   headStyle: {
  //     type: String,
  //   }
  // }
  data () {
    return {
      monthFormat: 'YYYY/MM',
      dateFormatList: ['MM/YYYY'],
      locale,
      dateString: '',
    }
  },
  methods: {
    // onChange(date, dateString) {
    //   console.log(dateString)
    // }
    onChange(date, dateString) {
      console.log(dateString)
    }
  }

}
</script>

<template>
  <a-date-picker :locale="locale"  v-model="dateString" :format="dateFormatList" picker="month" placeholder="Mois" @change="onChange"/>
  <div>{{dateString }}</div>
</template>

<style scoped>

</style>

