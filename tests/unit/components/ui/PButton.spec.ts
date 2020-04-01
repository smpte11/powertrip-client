import { render, fireEvent } from "@testing-library/vue";
import { PButton } from "@/components/ui";

describe("Button component", () => {
  it("should render properly", () => {
    const { getByText } = render(PButton, {
      slots: {
        default: "This is a test",
      },
      props: {
        clickHandler: () => {},
      },
    });

    expect(getByText("This is a test")).toBeInTheDocument();
  });

  it("should handle clicks", async () => {
    const clickHandler = jest.fn();

    const { getByText } = render(PButton, {
      slots: {
        default: "This is a test",
      },
      props: {
        clickHandler,
      },
    });

    await fireEvent.click(getByText("This is a test"));

    expect(clickHandler).toBeCalled();
  });
});
