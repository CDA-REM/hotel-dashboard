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
      dateFormatList: ['MM/YYYY', 'YYYY-MM-DD'],
      locale,
      dateString: '',
    }
  },
  methods: {
    // onChange(date, dateString) {
    //   console.log(dateString)
    // }
    onChange(date, dateString) {
      this.dateString = date.$d
      console.log(date)
    }
  }

}
</script>

<template>
  <a-date-picker :locale="locale" :format="dateFormatList" picker="month" placeholder="Mois" @change="onChange"/>
  <div>test {{dateString }}</div>
</template>

<style scoped>

</style>

