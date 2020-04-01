<template>
  <p-travel-layout>
    <template #header>
      <p-nav>
        <template #left>
          <p-button class="pl-0" :clickHandler="toTravels">
            <icon height="1.5rem" width="1.5rem" icon="icon-arrow-left"></icon>
          </p-button>
        </template>
      </p-nav>
    </template>
    <template #body>
      <fieldset>
        <p-input
          is-full
          label="What's the name of your trip?"
          placeholder="Ex. Trip to Madrid"
        ></p-input>
      </fieldset>

      <fieldset>
        <label for="dates" class="block text-gray-700 text-sm font-bold mb-2"
          >How long will it be?</label
        >
        <!-- Add wrapper -->
        <v-calendar is-expanded :rows="2"></v-calendar>
      </fieldset>
      <p-button class="bg-blue-500 rounded" :clickHandler="() => {}"
        >Create</p-button
      >
    </template>
  </p-travel-layout>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { PTravelLayout } from "@/components/travel/layouts";

import "@/assets/svg/icon-arrow-left";

export default defineComponent({
  components: { PTravelLayout },

  setup(props, ctx) {
    function toTravels() {
      ctx.root.$router.push("travels");
    }

    return {
      toTravels,
    };
  },
});
</script>
