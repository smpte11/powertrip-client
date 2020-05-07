import { render, fireEvent } from "@testing-library/vue";
import PButton from "@/components/ui/PButton.vue";

describe("Button component", () => {
  it("should render properly", () => {
    const { getByText } = render(PButton, {
      slots: {
        default: "This is a test",
      },
      props: {
        onClick: () => {},
      },
    });

    expect(getByText("This is a test")).toBeInTheDocument();
  });

  it("should handle clicks", async () => {
    const onClick = jest.fn();

    const { getByText } = render(PButton, {
      slots: {
        default: "This is a test",
      },
      props: {
        onClick,
      },
    });

    await fireEvent.click(getByText("This is a test"));

    expect(onClick).toBeCalled();
  });
});
