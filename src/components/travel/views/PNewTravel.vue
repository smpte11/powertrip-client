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
      <h1 class="h1 font-bold text-gray-700">Tell us more about your travel</h1>
      <p-input
        is-full
        label="What's the name of your trip?"
        placeholder="Ex. Trip to Madrid"
        v-model="state.name"
      ></p-input>

      <div class="mb-4">
        <label for="dates" class="block text-gray-700 text-sm font-bold mb-2"
          >How long will it be?</label
        >
        <!-- Add wrapper -->
        <p-calendar></p-calendar>
      </div>
    </template>
    <template #footer>
      <p-button class="bg-primary" :clickHandler="() => {}">Create</p-button>
    </template>
  </p-travel-layout>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "@vue/composition-api";
import { PTravelLayout } from "@/components/travel/layouts";

import "@/assets/svg/icon-arrow-left";

export default defineComponent({
  components: { PTravelLayout },

  setup(props, ctx) {
    const state = reactive({
      name: "",
    });

    function toTravels() {
      ctx.root.$router.push("travels");
    }

    return {
      state,
      toTravels,
    };
  },
});
</script>
