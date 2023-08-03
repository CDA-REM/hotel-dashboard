<template>
  <a-form
      :model="credentials"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="login"

  >
    <a-space direction="vertical" style="width: 100%">
      <a-alert v-if="errors.length" :message=errors type="error" />
    </a-space>
<!--    <div v-if="errors.length">{{errors}}</div>-->
    <a-form-item
        label="email"
        name="email"
        :rules="[{ required: true, message: 'Saisissez votre adresse email!' }, { type: 'email', message: 'Veuillez saisir une adresse email valide'}]"
    >
      <a-input v-model:value="credentials.email" />
    </a-form-item>

    <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="credentials.password" />
    </a-form-item>

<!--    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">-->
<!--      <a-checkbox v-model:checked="credentials.remember">Remember me</a-checkbox>-->
<!--    </a-form-item>-->

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Envoyer</a-button>
    </a-form-item>
  </a-form>
</template>
<!--<script lang="ts" setup>-->
<!--import { reactive } from 'vue';-->

<!--interface FormState {-->
<!--  email: string;-->
<!--  password: string;-->
<!--  remember: boolean;-->
<!--}-->

<!--const formState = reactive<FormState>({-->
<!--  email: '',-->
<!--  password: '',-->
<!--  remember: true,-->
<!--});-->
<!--const login = (values: any) => {-->
<!--  console.log('Success:', values);-->
<!--};-->

<!--const loginFailed = (errorInfo: any) => {-->
<!--  console.log('Failed:', errorInfo);-->
<!--};-->
<!--</script>-->

<script>
import axios from "axios";
import {handleResponse} from "../../utils/apiLogin";

export default {
  name: "LoginForm",
  data() {
    return {
      credentials: {
        email: "",
        password: "",
      },
      errors: []
    }
  },
  methods: {
    async login() {
      // TODO do some validations first

      // await this.$userStore.login(this.credentials)
      this.errors = []


      try {
        // await this.$userStore.login(this.credentials)
        const response = await this.$userStore.login(this.credentials)
        // this.$userStore= response.data.user
        console.log("store", this.$userStore)
      }catch (errors) {
        this.errors = errors.response.data.errors.error
        console.log("Errors",errors)
      }
    },


  }
}
</script>


<!--<template>-->
<!--	<div>-->
<!--		<a-button type="primary" @click="login">Login</a-button>-->
<!--	</div>-->
<!--</template>-->

<!--<script>-->
<!--	export default {-->
<!--		name: "LoginForm",-->
<!--		data() {-->
<!--			return {-->
<!--				credentials: {-->
<!--					email: "",-->
<!--					password: ""-->
<!--				}-->
<!--			}-->
<!--		},-->
<!--		methods: {-->
<!--			async login() {-->
<!--				// TODO do some validations first-->

<!--				await this.$userStore.login(this.credentials)-->
<!--			}-->
<!--		}-->
<!--	}-->
<!--</script>-->

<style scoped>

</style>
