import Vue from "vue";
import VueRouter from "vue-router";
import PDay from "@/components/day/PDay.vue";
import PTravel from "@/components/travel/views/PTravel.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/day",
    name: "Day",
    component: PDay,
  },
  {
    path: "/travels",
    name: "Travels",
    component: PTravel,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
