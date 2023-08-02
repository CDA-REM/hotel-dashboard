<!--<template>-->
<!--	&lt;!&ndash; Base layout for all sub pages, put navbar and global elements here&ndash;&gt;-->
<!--  <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">-->
<!--    <a-layout style="min-height: 100vh">-->
<!--      <main>-->
<!--        <a-layout-sider class="siderStyle">-->
<!--          <Navbar/>-->
<!--        </a-layout-sider>-->
<!--        <a-layout-content class="contentStyle">-->
<!--          <router-view/>-->
<!--        </a-layout-content>-->
<!--      </main>-->
<!--    </a-layout>-->
<!--  </a-space>-->

<!--</template>-->

<!--<script lang="ts">-->
<!--  import Navbar from "../components/Navbar.vue";-->
<!--	export default {-->
<!--		name: "BaseLayout",-->
<!--    components: {-->
<!--      Navbar-->
<!--    },-->
<!--    data() {-->
<!--      return {-->

<!--      }-->
<!--    },-->
<!--	}-->
<!--</script>-->

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item>
          <user-outlined />
          <span>{USER}</span>
        </a-menu-item><a-menu-item key="1">
          <desktop-outlined />
          <span>Tableau de bord journalier</span>
        </a-menu-item>
        <a-menu-item key="2">
          <pie-chart-outlined />
          <span>Réservations</span>
        </a-menu-item>
        <a-menu-item key="3">
          <pie-chart-outlined />
          <span>Efficacité</span>
        </a-menu-item>
        <a-menu-item key="4">
          <file-outlined />
          <span>Déconnexion</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="margin: 16px">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Hôtel Arth Dashboard - Created by REM Corporation
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
import { ref } from 'vue';
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);
</script>
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>


<style scoped>
</style>
