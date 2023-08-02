<template>
		<a-card
			style="width: 100%"
			title="CONNEXION"
			:tab-list="tabList"
			:active-tab-key="key"
			@tabChange="key => onTabChange(key, 'key')"
		>
			<template #customTab="item">
			<span v-if="item.key === 'tab1'">
				{{ item.key }}
			</span>
			</template>

      <div v-if="key === 'tab1'"><login-form/></div>
      <div v-else>{{ contentList[key] }}</div>

		</a-card>


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
            key: 'tab1',
            tab: 'tab1',
          },
          {
            key: 'tab2',
            tab: 'tab2',
          },
        ],
        contentList: {
          tab1: '',
          tab2: 'content2',
        },

        key: 'tab1',
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

</style>
