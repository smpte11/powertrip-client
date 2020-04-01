import Vue from "vue";
import VCalendar from "v-calendar";

Vue.use(VCalendar, {
  theme: {
    container: {
      light: "vc-text-gray-700 vc-bg-white vc-rounded-lg shadow",
    },
    bgAccentLow: {
      light: "bg-cyan-200",
    },
    bgAccentHigh: {
      light: "bg-cyan-600",
    },
  },
});
