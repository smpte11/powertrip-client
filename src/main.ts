import Vue from "vue";

import App from "./App.vue";

import "./registerServiceWorker";

import router from "./router";

import { createProvider } from "./vue-apollo";

import "./plugins/buefy";
import "./plugins/composition";
import "./plugins/vcalendar";

import buildConfig from "./config";

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
