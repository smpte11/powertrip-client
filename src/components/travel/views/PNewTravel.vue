<template>
  <p-travel-layout>
    <template #header>
      <p-nav>
        <template #left>
          <p-button class="pl-0" :onClick="toTravels">
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

    <template #content>
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
      <p-button class="bg-primary" :onClick="createTravel">Create</p-button>
    </template>
  </p-travel-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { useMutation } from "@vue/apollo-composable";

import { ADD_TRAVEL } from "@/components/travel/mutations";
import { TRAVELS_QUERY } from "@/components/travel/queries";

import "@/assets/svg/icon-arrow-left";

type Travel = {
  id: number;
  name: string;
  destination: string;
  start: Date;
  end: Date;
};

interface TravelsResult {
  travels: Travel[];
}

export default defineComponent({
  name: "new-travel",

  setup(props, ctx) {
    const name = ref("");
    const destination = ref("");
    const range = ref({
      start: undefined,
      end: undefined,
    });

    const { mutate: createTravel, onDone } = useMutation(ADD_TRAVEL, () => ({
      variables: {
        name: name.value,
        destination: destination.value,
        ...range.value,
      },
      update(cache, { data: { createTravel } }) {
        const travels = cache.readQuery<TravelsResult>({
          query: TRAVELS_QUERY,
        })?.travels;

        if (travels) {
          cache.writeQuery({
            query: TRAVELS_QUERY,
            data: {
              travels: [...travels, createTravel],
            },
          });
        }
      },
    }));

    function toTravels() {
      ctx.root.$router.push("travels");
    }

    onDone(() => toTravels());

    return {
      name,
      destination,
      createTravel,
      toTravels,
      range,
    };
  },
});
</script>
