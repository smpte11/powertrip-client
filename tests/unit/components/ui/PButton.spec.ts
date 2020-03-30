import { render } from "@testing-library/vue";
import { PButton } from "@/components/ui";

describe("Button component", () => {
  it("should render properly", () => {
    const { getByText } = render(PButton, {
      slots: {
        default: "This is a test",
      },
    });

    expect(getByText("This is a test")).toBeInTheDocument();
  });
});
