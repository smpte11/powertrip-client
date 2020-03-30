<template>
  <p-travel-layout>
    <template #header>
      <p-nav>
        <template #left>
          <button class="rounded inline-flex items-center h-8 w-8">
            <icon height="1.5rem" width="1.5rem" icon="icon-menu"></icon>
          </button>
        </template>
        <template #right>
          <button
            class="rounded inline-flex justify-center items-center bg-gray-300 rounded-full h-8 w-8"
          >
            <icon height="1.5rem" width="1.5rem" icon="icon-user"></icon>
          </button>
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
        <button
          class="self-center rounded inline-flex justify-center items-center bg-gray-300 rounded-full h-8 w-8"
        >
          <icon height="1.5rem" width="1.5rem" icon="icon-plus"></icon>
        </button>
      </div>
    </template>
  </p-travel-layout>
</template>

<script lang="ts">
import { PNav, PSearch } from "@/components/ui";
import { PTravelLayout } from "@/components/travel/layouts";

import "@/assets/svg/icon-menu";
import "@/assets/svg/icon-plus";
import "@/assets/svg/icon-user";

export default {
  components: { PNav, PSearch, PTravelLayout },
};
</script>

<style lang="scss">
html,
body {
  height: 100vh;
  width: 100vw;
}
</style>
