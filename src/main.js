import Vue from 'vue'
import App from './App.vue'
import { MdButton, MdContent, MdTabs, MdCard, MdTooltip } from 'vue-material/dist/components'
import VueClipboard from 'vue-clipboard2'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdCard)
Vue.use(MdTooltip)

Vue.use(VueClipboard)

Vue.material.scrollBar = true 

new Vue({
  render: h => h(App),
}).$mount('#app')
