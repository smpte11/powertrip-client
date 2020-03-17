import Vue from "vue";
import ApolloClient from "apollo-boost";

import App from "./App.vue";

import "./registerServiceWorker";

import router from "./router";

// import { createProvider } from "./vue-apollo";

import "./plugins/buefy";
import "./plugins/composition";
import VueApollo from "vue-apollo";

Vue.config.productionTip = false;

const apolloClient = new ApolloClient({
  uri: "http://localhost:7071/graphql"
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
