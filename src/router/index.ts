import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import { PNewTravel, PTravels } from "@/components/travel";
import { PSignup } from "@/components/user/";

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
