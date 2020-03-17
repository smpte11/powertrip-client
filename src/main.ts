import Vue from "vue";
import App from "./App.vue";

import "./registerServiceWorker";

import router from "./router";

import { createProvider } from "./vue-apollo";

import "./plugins/buefy";
import "./plugins/composition";

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
