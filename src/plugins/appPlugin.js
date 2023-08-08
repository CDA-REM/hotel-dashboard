import {useUserStore} from "../stores/user.js"
import { useDataStore } from "../stores/data.js"
import {useFilterStore} from "../stores/filter";

export default {
    install(app, options) {
        // Be able to use the store in all components via `this.$userStore`
        app.config.globalProperties.$userStore = useUserStore()
        // Be able to use the store in all components via `this.$dataStore`
        app.config.globalProperties.$dataStore = useDataStore()

        app.config.globalProperties.$filterStore = useFilterStore()
    }
}
