import Vue from "vue";
import { provide } from "@vue/composition-api";
import { DefaultApolloClient } from "@vue/apollo-composable";

import App from "@/App.vue";
import router from "@/router";

import apolloClient from "@/apollo";

import { provideAuth } from "@/components/user/useAuth";

import "@/registerServiceWorker";
import "@/plugins/composition";
import "@/plugins/icons";
import "@/plugins/vcalendar";
import "@/globalComponent";

import "@/assets/css/index.css";

Vue.config.productionTip = false;

new Vue({
  router,
  /* eslint-disable */
  // @ts-ignore
  setup() {
    provideAuth();
    provide(DefaultApolloClient, apolloClient);
  },
  /* eslint-disable */
  render: (h) => h(App),
}).$mount("#app");
