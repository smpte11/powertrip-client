import Vue from "vue";
import { InMemoryCache } from "apollo-cache-inmemory";
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

const cache = new InMemoryCache();

const apolloProvider = createProvider({
  cache,
  httpEndpoint: config.apiUrl,
  wsEndpoint: null,
});

cache.writeData({
  data: {
    travels: [],
  },
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
