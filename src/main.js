// Global style for our app
import './assets/style/index.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import VueApexCharts from "vue3-apexcharts";

import App from './App.vue'
import {router} from './router'

// Global plugins for our app
import appPlugin from "./plugins/appPlugin.js"
import antDesignPlugin from "@/plugins/antDesignPlugin.js"

// Import html2pdf
import html2pdf from 'html2pdf.js';



const app = createApp(App)

app.use(createPinia())
    .use(router)
    .use(antDesignPlugin)
    .use(appPlugin)
    .use(VueApexCharts)
    .mount('#app')

// Make html2pdf globally available
app.config.globalProperties.$html2pdf = html2pdf;