<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">
        <img src="../assets/pictures/logo_app_white.png" alt="logo Hôtel Arth" />
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item>
          <RouterLink :to="{name: 'userAccount'}" />
          <user-outlined />
          <span>{ USERNAME }</span>
        </a-menu-item>

        <a-menu-item key="1" title="Tableau de bord journalier">
          <RouterLink :to="{name: 'operationalDashboard'}" />
          <dashboard-outlined />
          <span>Tableau de bord journalier</span>
        </a-menu-item>

        <a-menu-item key="2" title="Réservations">
          <RouterLink :to="{name: 'tacticalDashboard'}" />
          <pie-chart-outlined />
          <span>Réservations</span>
        </a-menu-item>

        <a-menu-item key="3" title="Efficacité économique">
          <RouterLink :to="{name: 'strategicDashboard'}" />
          <rise-outlined />
          <span>Efficacité</span>
        </a-menu-item>

        <a-menu-item key="4">
          <RouterLink :to="{name: 'login'}" />
          <api-outlined />
          <span>Déconnexion</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="margin: 16px 16px 0">
        <div class="layout-content__wrapper">
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Hôtel Arth Dashboard - Created by REM Corporation
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  PieChartOutlined,
  UserOutlined,
  ApiOutlined,
  DashboardOutlined,
  RiseOutlined,

} from '@ant-design/icons-vue';

import { ref } from 'vue';
export default {
  name: 'BaseLayout',
  components: {
    PieChartOutlined,
    UserOutlined,
    ApiOutlined,
    DashboardOutlined,
    RiseOutlined,
  },
  data() {
    return {
      collapsed : <boolean>false,
      selectedKeys: <string[]>['1'],
    };
  },
};
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

:where(.css-dev-only-do-not-override-jqu7eg).ant-layout .ant-layout-footer {
  padding: 11px 50px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  background: #f5f5f5;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo img {
  width: 100px;
  height: 100px;
}

.layout-content__wrapper {
  display: flex;
  flex-flow: column wrap;
  padding: 24px;
  //background: #fff;
  background-color: #f5f5f5;
  min-height: 100%;
}
</style>
