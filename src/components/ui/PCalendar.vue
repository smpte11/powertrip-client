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
import {
  addDays,
  isAfter,
  isBefore,
  isEqual,
  closestTo,
  isWithinInterval,
} from "date-fns";

type Day = {
  date: Date;
};

type DateRange = {
  start: Date;
  end: Date;
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

  data(): {
    attributes: AttrProps[];
    baseAttr: Pick<AttrProps, "key" | "highlight">;
  } {
    return {
      attributes: [{ key: "today", dot: true, dates: new Date() }],
      baseAttr: {
        key: "travel-range",
        highlight: true,
      },
    };
  },

  methods: {
    handleDayClick(day: Day) {
      const { date } = day;

      if (this.attributes[1]?.dates) {
        const { start, end } = this.attributes[1].dates as DateRange;
        const closestDate = closestTo(date, [start, end]);
        this.$set(this.attributes, 1, {
          ...this.baseAttr,
          dates: {
            start: isEqual(closestDate, start) ? date : start,
            end: isEqual(closestDate, end) ? date : end,
          },
        });
      } else {
        console.log("HEY");
        this.attributes.push({
          ...this.baseAttr,
          dates: { start: date, end: addDays(date, 1) },
        });
      }
    },
  },
};
</script>
