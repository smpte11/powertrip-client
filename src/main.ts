import Vue from "vue";
import { provide } from "@vue/composition-api";
import { DefaultApolloClient } from "@vue/apollo-composable";

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

const apolloProvider = createProvider({
  httpEndpoint: config.apiUrl,
  wsEndpoint: null,
});

new Vue({
  router,
  apolloProvider,
  /* eslint-disable */
  // @ts-ignore
  setup() {
    provide(DefaultApolloClient, apolloProvider.defaultClient);
  },
  /* eslint-disable */
  render: (h) => h(App),
}).$mount("#app");
