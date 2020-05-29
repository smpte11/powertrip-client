<template>
  <p-layout>
    <template #header>
      <p-nav>
        <template #left>
          <p-button class="pl-0" @click="() => {}">
            <icon
              color="#4a5568"
              height="1.5rem"
              width="1.5rem"
              icon="icon-menu"
            ></icon>
          </p-button>
        </template>
        <template #right>
          <p-signout-button></p-signout-button>
        </template>
      </p-nav>
    </template>
    <template #content>
      <p-search></p-search>
      <p-card #card-content>
        <div class="text-left">
          <h2 class="text-xl text-gray-700">Where to next?</h2>
          <p class="text-gray-700">Plan your next adventure...</p>
        </div>
        <p-button rounded @click="toNewTravel">
          <icon height="1.5rem" width="1.5rem" icon="icon-plus"></icon>
        </p-button>
      </p-card>
      <div v-if="travels">
        <p-card #card-content :key="travel.id" v-for="travel in travels">
          <div class="text-left">
            <h2 class="text-xl text-gray-700">{{ travel.name }}</h2>
            <p class="text-gray-700">{{ travel.destination }}</p>
          </div>

          <p-button rounded @click="() => {}">
            <icon height="1.5rem" width="1.5rem" icon="icon-arrow-right"></icon>
          </p-button>
        </p-card>
      </div>
    </template>
  </p-layout>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useQuery, useResult } from "@vue/apollo-composable";

import { PSignoutButton } from "@/components/user";

import { TRAVELS_QUERY } from "@/components/travel/queries";
import { ME } from "@/components/user/queries";

import "@/assets/svg/icon-arrow-right";
import "@/assets/svg/icon-menu";
import "@/assets/svg/icon-plus";
import "@/assets/svg/icon-user";

export default defineComponent({
  components: {
    PSignoutButton,
  },
  setup(props, { root }) {
    const { result: meResult } = useQuery(ME);
    const me = useResult(meResult);

    const { result: travelResult } = useQuery(TRAVELS_QUERY, undefined, {
      fetchPolicy: "cache-and-network",
    });
    const travels = useResult(travelResult);

    function toNewTravel() {
      root.$router.push("new-travel");
    }

    return {
      travels,
      toNewTravel,
    };
  },
});
</script>

<style lang="scss">
html,
body {
  height: 100vh;
  width: 100vw;
}
</style>
