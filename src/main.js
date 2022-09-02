import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import VueMask from 'v-mask'
import { VMaskDirective, VMaskFilter } from "v-mask-directive-filter";
Vue.use(require('vue-moment'));
Vue.directive("mascara", VMaskDirective);
Vue.filter("mask", VMaskFilter);
Vue.use(VueMask);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
