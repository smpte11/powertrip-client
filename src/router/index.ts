import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import { ME, IS_LOGGED_IN } from "@/components/user/queries";

import { PNewTravel, PTravels } from "@/components/travel";
import { PSignup } from "@/components/user/";

import config from "@/config";

Vue.use(VueRouter);

export enum Routes {
  Signup = "signup",
  Travels = "travels",
  NewTravels = "new-travels",
}

const routes: RouteConfig[] = [
  {
    path: `/${Routes.Signup}`,
    name: Routes.Signup,
    component: PSignup,
  },
  {
    path: `/${Routes.Travels}`,
    name: Routes.Travels,
    component: PTravels,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: `/${Routes.NewTravels}`,
    name: Routes.NewTravels,
    component: PNewTravel,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(function (to, _from, next) {
  const data = config.apolloClient.readQuery({
    query: IS_LOGGED_IN,
  });

  const isLoggedIn = data.isLoggedIn;

  if (isLoggedIn && !to.meta.requiresAuth)
    next({ name: Routes.Travels, replace: true });
  else if (!isLoggedIn && to.meta.requiresAuth)
    next({ name: Routes.Signup, replace: true });
  else next();
});

export default router;
