import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import { GET_USER, IS_LOGGED_IN } from "@/components/user/queries";

import { PNewTravel, PTravels } from "@/components/travel";
import { PSignup } from "@/components/user/";

import config from "@/config";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/signup",
    name: "signup",
    component: PSignup,
  },
  {
    path: "/travels",
    name: "travels",
    component: PTravels,
    beforeEnter(_to, _from, next) {
      const data = config.apolloClient.readQuery({
        query: IS_LOGGED_IN,
      });
      if (!data.isLoggedIn) next({ name: "signup", replace: true });
      else next();
    },
  },
  {
    path: "/new-travel",
    name: "new-travel",
    component: PNewTravel,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
