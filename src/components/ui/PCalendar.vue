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
import { addDays, isEqual, closestTo } from "date-fns";

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
    value: Object,
    rows: {
      type: Number,
      default: 1,
    },
  },

  model: {
    prop: "value",
    event: "change",
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
      let dates;
      const { date } = day;

      if (this.attributes[1]?.dates) {
        const { start, end } = this.attributes[1].dates as DateRange;
        const closestDate = closestTo(date, [end, start]);
        dates = {
          start: isEqual(closestDate, start) ? date : start,
          end: isEqual(closestDate, end) ? date : end,
        };
      } else {
        dates = { start: date, end: addDays(date, 1) };
      }

      this.$set(this.attributes, 1, {
        ...this.baseAttr,
        dates,
      });

      this.$emit("change", dates);
    },
  },
};
</script>
