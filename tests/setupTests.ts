import "@testing-library/jest-dom";
import fetch from "jest-fetch-mock";

(global as any).navigator.geolocation = {
  clearWatch: jest.fn(),
  getCurrentPosition: jest.fn((success) => {
    success({
      coords: {
        longitude: 60,
        latitude: 60,
      },
    });
  }),
  stopObserving: jest.fn(),
  watchPosition: jest.fn(),
};

(global as any).matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

fetch.enableMocks();
