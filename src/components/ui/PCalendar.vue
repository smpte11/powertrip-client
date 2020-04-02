<template>
  <div>
    <v-calendar
      is-expanded
      :rows="rows"
      :attributes="attributes"
      @dayclick="handleDayClick"
    >
      <template #day-content>
        <slot name="day-content"></slot>
      </template>
    </v-calendar>
  </div>
</template>

<script lang="ts">
import addDays from "date-fns/addDays";

type Day = {
  date: Date;
};

export default {
  props: {
    rows: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      attributes: [{ key: "today", highlight: true, dates: new Date() }],
    };
  },

  methods: {
    handleDayClick(day: Day) {
      console.log(day);
      const [currentAttributes] = this.attributes;
      currentAttributes.dates = {
        start: day.date,
        end: addDays(day.date, 7),
      };
      this.$set(this.attributes, 0, currentAttributes);
    },
  },
};
</script>
