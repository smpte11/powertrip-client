import { render } from "@testing-library/vue";
import { withGeolocation } from "@/components/enhancers";

describe("withGeolocation", async () => {
  it("should support geolocation", async () => {
    const { getByText, findByTestId } = render(withGeolocation, {
      scopedSlots: {
        default: '<span data-testid="coords">{{props.coordinates.lat}}</span>'
      }
    });

    // check default text while user is allowing geolocation
    expect(
      getByText("Unable to get your current location.")
    ).toBeInTheDocument();

    const slot = await findByTestId("coords");

    expect(slot).toBeInTheDocument();
  });
});
