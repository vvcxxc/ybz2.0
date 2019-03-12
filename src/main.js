import Vue from 'vue'
import router from './configs/router.js'
import store from './configs/store.js'

import { Swipe, SwipeItem } from "vant";
// 引入ajax库
import axios from 'axios'
// 引入jQuery库
import $ from 'jquery'
Vue.prototype.$axios = axios
Vue.prototype.$ = $
Vue.use(Swipe).use(SwipeItem);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h('router-view'),
}).$mount('#app')
