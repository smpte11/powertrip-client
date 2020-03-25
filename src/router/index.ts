import Vue from "vue";
import VueRouter from "vue-router";
import Day from "../views/Day.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/day",
    name: "Day",
    component: Day,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
