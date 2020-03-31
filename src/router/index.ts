import Vue from "vue";
import VueRouter from "vue-router";
import PDay from "@/components/day/PDay.vue";

import { PNewTravel, PTravels } from "@/components/travel/views";

Vue.use(VueRouter);

const routes = [
  {
    path: "/day",
    component: PDay,
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
