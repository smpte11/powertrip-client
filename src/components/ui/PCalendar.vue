<template>
  <div>
    <v-calendar
      is-expanded
      :rows="rows"
      :attributes="state.attributes"
      @dayclick="handleDayClick"
    >
      <template #day-content>
        <slot name="day-content"></slot>
      </template>
    </v-calendar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";

type Day = {
  date: Date;
};

export default defineComponent({
  props: {
    rows: {
      type: Number,
      default: 1,
    },
  },
  setup() {
    const state = reactive({
      attributes: [{ key: "today", highlight: true, dates: new Date() }],
    });

    function handleDayClick(day: Day) {
      console.log(day);
    }

    return { state, handleDayClick };
  },
});
</script>
