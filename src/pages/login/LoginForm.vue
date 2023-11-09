<template>
  <a-form
      :model="credentials"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="login"

  >
    <a-space direction="vertical" :style="{width: '100%', paddingBottom: '20px'}">
      <a-alert v-if="errors.length" :message=errors type="error" style="text-align: center" />
    </a-space>

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
        :rules="[{ required: true, message: 'Saisissez votre mot de passe!' }]"
    >
      <a-input-password v-model:value="credentials.password" />
    </a-form-item>


    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Envoyer</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
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
      this.errors = []

      try {
        await this.$userStore.login(this.credentials)
        console.log("store", this.$userStore)
      }catch (errors) {
        this.errors = errors.response.data.errors.error
      }
    },


  }
}
</script>

<style scoped>

</style>
