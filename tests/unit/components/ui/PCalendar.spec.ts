import CompositionApi from "@vue/composition-api";
import VCalendar from "v-calendar";

import { createLocalVue, mount } from "@vue/test-utils";
import { addDays, subDays, format, isEqual } from "date-fns";

import PCalendar from "@/components/ui/PCalendar.vue";

const localVue = createLocalVue();
localVue.use(CompositionApi);
localVue.use(VCalendar, {
  theme: {
    container: {
      light: "vc-text-gray-700 vc-bg-white vc-rounded-lg shadow",
    },
  },
});

describe("Calendar component", () => {
  it("should select a simple range", () => {
    const today = new Date();
    const endDate = addDays(today, 7);

    const wrapper = mount(PCalendar, {
      localVue,
    });

    const from = wrapper.find(`.id-${format(today, "yyyy-MM-dd")}`);
    const to = wrapper.find(`.id-${format(endDate, "yyyy-MM-dd")}`);

    from.vm.$emit("dayclick", { date: today });
    to.vm.$emit("dayclick", { date: endDate });

    const { start, end } = wrapper.vm.$data.attributes[1].dates;

    expect(isEqual(start, today)).toBeTruthy();
    expect(isEqual(end, endDate)).toBeTruthy();
  });

  it("should handle having the second date before the first", () => {
    const today = new Date();
    const secondClick = subDays(today, 1);

    const wrapper = mount(PCalendar, {
      localVue,
    });

    const from = wrapper.find(`.id-${format(today, "yyyy-MM-dd")}`);
    const to = wrapper.find(`.id-${format(secondClick, "yyyy-MM-dd")}`);

    from.vm.$emit("dayclick", { date: today });
    to.vm.$emit("dayclick", { date: secondClick });
    const { start, end } = wrapper.vm.$data.attributes[1].dates;

    expect(isEqual(start, secondClick)).toBeTruthy();
    expect(isEqual(end, addDays(today, 1))).toBeTruthy();
  });
});
