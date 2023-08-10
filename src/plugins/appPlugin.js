import {useUserStore} from "../stores/user.js"
import { useDataStore } from "../stores/data.js"
import {useDashboardTacticStore } from "../stores/dashboardTactic";

export default {
    install(app, options) {
        // Be able to use the store in all components via `this.$userStore`
        app.config.globalProperties.$userStore = useUserStore()
        // Be able to use the store in all components via `this.$dataStore`
        app.config.globalProperties.$dataStore = useDataStore()

        app.config.globalProperties.$dashboardTacticStore = useDashboardTacticStore()
    }
}
