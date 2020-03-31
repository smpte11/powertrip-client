import Vue from "vue";

import App from "./App.vue";

import "./registerServiceWorker";

import router from "./router";

import { createProvider } from "./vue-apollo";

import "./plugins/composition";
import "./plugins/icons";
import "./plugins/vcalendar";

import "./globalComponent";

import buildConfig from "./config";

import "@/assets/css/index.css";

Vue.config.productionTip = false;

const config = buildConfig();

new Vue({
  router,
  apolloProvider: createProvider({
    httpEndpoint: config.apiUrl,
    wsEndpoint: null,
  }),
  render: (h) => h(App),
}).$mount("#app");
