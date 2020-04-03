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
import isAfter from "date-fns/isAfter";

type Day = {
  date: Date;
};

type DateRange = {
  start: Date;
  end?: Date;
  span?: number;
};

type AttrProps = {
  key: number | string;
  highlight?: boolean;
  dot?: boolean;
  dates?: Date | DateRange | Array<Date | DateRange>;
};

export default {
  props: {
    rows: {
      type: Number,
      default: 1,
    },
  },

  data(): { attributes: AttrProps[] } {
    return {
      attributes: [{ key: "today", dot: true, dates: new Date() }],
    };
  },

  methods: {
    handleDayClick(day: Day) {
      const attr = {
        key: "travel-range",
        highlight: true,
      };
      if (this.attributes[1]?.dates) {
        const range = this.attributes[1].dates as DateRange;
        if (isAfter(day.date, range.start)) {
          range.end = day.date;
          this.attributes.splice(1, 0, {
            ...attr,
            dates: range,
          });
        } else {
          this.attributes.splice(1, 0, {
            ...attr,
            dates: {
              start: day.date,
              end: range.start,
            },
          });
        }
      } else {
        this.attributes.push({
          ...attr,
          dates: { start: day.date },
        });
      }
    },
  },
};
</script>
