import {useUserStore} from "../stores/user.js"
import { useDataStore } from "../stores/data.js"
import {useDashboardTacticStore } from "../stores/dashboardTactic";
import { useDashboardOperationalStore } from "../stores/dashboardOperational.js";

export default {
    install(app, options) {
        // Be able to use the store in all components via `this.$...Store`
        app.config.globalProperties.$userStore = useUserStore()
        app.config.globalProperties.$dataStore = useDataStore()
        app.config.globalProperties.$dashboardTacticStore = useDashboardTacticStore()
        app.config.globalProperties.$dashboardOperational = useDashboardOperationalStore()
    }
}
