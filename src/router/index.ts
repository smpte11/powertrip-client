import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import { PNewTravel, PTravels } from "@/components/travel/views";
import { PSignup } from "@/components/user/views";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/signup",
    component: PSignup,
  },
  {
    path: "/travels",
    component: PTravels,
  },
  {
    path: "/new-travel",
    component: PNewTravel,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
