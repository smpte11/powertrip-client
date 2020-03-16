import { shallowMount } from "@vue/test-utils";
import { withGeolocation } from "@/components/enhancers";

describe("HelloWorld.vue", () => {
  it("should pass coordinates to children when available", () => {
    const component = shallowMount(withGeolocation, {
      scopedSlots: {
        default: "<p>{{props.coordinates.lat}}</p>"
      }
    });

    expect(component.html()).toMatch(/<p>(.*)<\/p>/);
  });

  it("should show a help message when location is not available", () => {
    const component = shallowMount(withGeolocation);

    expect(component.text()).toMatch(/Unable/);
  });
});
