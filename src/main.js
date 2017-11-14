// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import vueEventCalendarExt from 'vue-event-calendar-ext'
import 'vue-event-calendar-ext/dist/index.css'
Vue.use(vueEventCalendarExt, {locale: 'zh'})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
