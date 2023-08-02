import ApexCharts from 'apexcharts';

export default {
    install(app, options) {
        app.config.globalProperties.$ApexCharts = ApexCharts
    }
}