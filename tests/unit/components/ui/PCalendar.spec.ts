import CompositionApi from "@vue/composition-api";
import VCalendar from "v-calendar";

import { createLocalVue } from "@vue/test-utils";
import { render, fireEvent } from "@testing-library/vue";
import { format } from "date-fns";

import { PCalendar } from "@/components/ui";

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

    const { debug, getAllByTestId, getByLabelText } = render(PCalendar, {
      localVue,
      scopedSlots: {
        "day-content": '<div data-testid="day"></div>',
      },
    });

    const [head] = getAllByTestId("day");
    console.log(head);

    console.log(format(today, "eeee, d MMMM Y"));
  });
});
