<template>
  <p-travel-layout>
    <template #header>
      <p-nav>
        <template #left>
          <p-button class="pl-0" :clickHandler="toTravels">
            <icon
              color="#4a5568"
              height="1.5rem"
              width="1.5rem"
              icon="icon-arrow-left"
            ></icon>
          </p-button>
        </template>
      </p-nav>
    </template>

    <template #body>
      <h1 class="h1 font-bold text-gray-700">Tell us more about your travel</h1>
      <p-input
        id="name"
        is-full
        label="What's the name of your trip?"
        placeholder="Ex. Bill &amp; Ted's Excellent Adventure"
        v-model="name"
      ></p-input>

      <p-input
        id="destination"
        is-full
        label="Where are you going?"
        placeholder="Ex. Madrid"
        v-model="destination"
      ></p-input>

      <div class="mb-4">
        <label for="dates" class="block text-gray-700 text-sm font-bold mb-2"
          >How long will it be?</label
        >
        <!-- Add wrapper -->
        <p-calendar v-model="range"></p-calendar>
      </div>
    </template>
    <template #footer>
      <apollo-mutation
        :mutation="
          (gql) => gql`
            mutation CreateTravel(
              $name: String!
              $destination: String!
              $start: DateTime!
              $end: DateTime!
            ) {
              createTravel(
                travel: {
                  name: $name
                  destination: $destination
                  start: $start
                  end: $end
                }
              ) {
                name
                destination
                start
                end
              }
            }
          `
        "
        :variables="{
          name,
          destination,
          start: range.start,
          end: range.end,
        }"
      >
        <template #default="{ mutate }">
          <!-- Add loading and error state later -->
          <p-button class="bg-primary" :clickHandler="mutate">Create</p-button>
        </template>
      </apollo-mutation>
    </template>
  </p-travel-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { PTravelLayout } from "@/components/travel/layouts";

import "@/assets/svg/icon-arrow-left";

export default defineComponent({
  name: "new-travel",
  components: { PTravelLayout },

  setup(props, ctx) {
    const name = ref("");
    const destination = ref("");
    const range = ref({});

    function toTravels() {
      ctx.root.$router.push("travels");
    }

    return {
      name,
      destination,
      range,
      toTravels,
    };
  },
});
</script>
