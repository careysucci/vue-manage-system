import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/scss/reset.scss";
import 'element-ui/lib/theme-chalk/index.css';

import ElementUI from 'element-ui';
import http from "@/api/config";
import "@/mock";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
