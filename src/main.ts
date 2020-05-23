import Vue from "vue";
import VueApollo from "@vue/apollo-option";
import { provide } from "@vue/composition-api";
import { DefaultApolloClient } from "@vue/apollo-composable";

import App from "@/App.vue";
import router from "@/router";

import { provideAuth } from "@/components/user/useAuth";

import "@/registerServiceWorker";
import "@/plugins/composition";
import "@/plugins/icons";
import "@/plugins/vcalendar";
import "@/plugins/vue-apollo";
import "@/globalComponent";

import "@/assets/css/index.css";
import config from "./config";
import firebase from "firebase";

Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: config.apolloClient,
});

new Vue({
  router,
  apolloProvider,
  /* eslint-disable */
  // @ts-ignore
  setup() {
    provideAuth();
    provide(DefaultApolloClient, config.apolloClient);
  },
  /* eslint-disable */
  render: (h) => h(App),
}).$mount("#app");
