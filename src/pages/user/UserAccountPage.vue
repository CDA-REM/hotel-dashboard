<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "UserAccountPage",
  data() {

  }
})
</script>

<template>
  <div class="container__account">
    <h1> Mon compte </h1>

    <a-descriptions
      title="Mes informations"
      :column="{ xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }"
    >
      <a-descriptions-item label="Identité">{{ $userStore.user.firstname }} {{ $userStore.user.name }}</a-descriptions-item>
      <a-descriptions-item label="Rôle">{{  $userStore.user.user_role }}</a-descriptions-item>
      <a-descriptions-item label="Email">{{ $userStore.user.email }}</a-descriptions-item>
      <a-descriptions-item label="Téléphone">{{ $userStore.user.phone }}</a-descriptions-item>
      <a-descriptions-item label="Adresse">
        {{ $userStore.user.personal_address
        ? `${JSON.parse($userStore.user.personal_address).address}, ${JSON.parse($userStore.user.personal_address).zip_code} ${JSON.parse($userStore.user.personal_address).city.toUpperCase()}`
        : "Adresse non disponible" }}
      </a-descriptions-item>
    </a-descriptions>
  </div>

</template>
<style scoped>
.container__account {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: start;
  max-width: 600px;
}
</style>