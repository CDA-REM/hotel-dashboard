<template>
  <a-row justify="space-around" class="box-center" >
    <a-col :span="6">
      <img class="box-center"  :style="{}" src="../../assets/pictures/logo_app_black.png" alt="logo Hôtel Arth" />
    </a-col>
    <a-col :span="12">
      <a-card
          style="width: 100%"
          :title="(key ==='Connexion') ? 'CONNEXION' : 'INSCRIPTION'"
          :tab-list="tabList"
          :active-tab-key="key"
          @tabChange="key => onTabChange(key, 'key')"
      >
        <template #customTab="item">
			<span v-if="item.key === 'Connexion'">
				{{ item.key }}
			</span>
        </template>
        <a-row >
          <a-col v-if="key === 'Connexion'" :span="24" ><login-form/></a-col>
          <a-col v-else :span="24" >{{ contentList[key] }}</a-col>
        </a-row>

        <!--      <div v-if="key === 'Connexion'"><login-form/></div>-->
        <!--      <div v-else>{{ contentList[key] }}</div>-->

      </a-card>
    </a-col>
  </a-row>



</template>

<script>
	import LoginForm from "./LoginForm.vue"


	export default {
		name: "LoginPage",
		components: {LoginForm},
    data() {
      return {
        tabList: [
          {
            key: 'Connexion',
            tab: 'Connexion',
          },
          {
            key: 'Inscription',
            tab: 'Inscription',
          },
        ],
        contentList: {
          Connexion: '',
          Inscription: 'content2',
        },

        key: 'Connexion',
        noTitleKey: 'app',
      };
	},
  methods: {
    onTabChange(key, type) {
      console.log(key, type);
      this[type] = key;
    }
  }


};

</script>

<style scoped>
  .box-center {
    transform: translate(0, 50%);
  }
</style>
