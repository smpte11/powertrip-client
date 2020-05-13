import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import gql from "graphql-tag";

import apolloClient from "@/apollo";

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
    beforeEnter() {
      const query = gql`
        query GetUser {
          user {
            id
            token
            email
          }
        }
      `;
      const data = apolloClient.readQuery({
        query,
      });
      console.log(data);
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
