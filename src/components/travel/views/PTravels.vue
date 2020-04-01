<template>
  <p-travel-layout>
    <template #header>
      <p-nav>
        <template #left>
          <p-button :clickHandler="() => {}">
            <icon height="1.5rem" width="1.5rem" icon="icon-menu"></icon>
          </p-button>
        </template>
        <template #right>
          <p-button rounded class="bg-gray-300" :clickHandler="() => {}">
            <icon height="1.5rem" width="1.5rem" icon="icon-user"></icon>
          </p-button>
        </template>
      </p-nav>
    </template>
    <template #body>
      <p-search></p-search>
      <div
        class="flex justify-between bg-white rounded shadow border-0 p-3 my-3"
      >
        <div class="text-left">
          <h2 class="text-xl text-gray-700">Where to next?</h2>
          <p class="text-gray-700">Plan your next adventure...</p>
        </div>
        <p-button rounded class="bg-gray-300" :clickHandler="toNewTravel">
          <icon height="1.5rem" width="1.5rem" icon="icon-plus"></icon>
        </p-button>
      </div>
    </template>
  </p-travel-layout>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import { PTravelLayout } from "@/components/travel/layouts";

import "@/assets/svg/icon-menu";
import "@/assets/svg/icon-plus";
import "@/assets/svg/icon-user";

export default defineComponent({
  components: { PTravelLayout },

  setup(props, ctx) {
    function toNewTravel() {
      ctx.root.$router.push("new-travel");
    }

    return {
      toNewTravel,
    };
  },

  methods: {},
});
</script>

<style lang="scss">
html,
body {
  height: 100vh;
  width: 100vw;
}
</style>
