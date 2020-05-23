import { createLocalVue } from "@vue/test-utils";
import { render } from "@testing-library/vue";
import CompositionApi from "@vue/composition-api";
import VueRouter from "vue-router";

import App from "@/App.vue";
import useAuth from "@/components/user/useAuth";

jest.mock("@/components/user/useAuth");

const localVue = createLocalVue();
localVue.use(CompositionApi);
localVue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/",
      meta: {
        authRequired: true,
      },
    },
  ],
});

describe("App component", () => {
  afterEach(() => jest.restoreAllMocks());

  it("should render guest pages without delay", () => {
    (useAuth as jest.Mock).mockReturnValue({
      loading: false,
    });
    const { queryByTestId } = render(App, {
      localVue,
      router,
    });

    expect(queryByTestId("auth-loader")).not.toBeInTheDocument();
  });

  // it("should not return a loader on page that do not need auth", () => {
  //   const $router = {
  //     currentRoute: {},
  //   };
  //   (useAuth as jest.Mock).mockReturnValue({
  //     loading: true,
  //   });
  //   const { queryByTestId } = render(App, {
  //     localVue,
  //     router,
  //   });

  //   expect(queryByTestId("auth-loader")).not.toBeInTheDocument();
  // });

  // it("should return a loader if the user is available but not logged in", () => {
  //   (useAuth as jest.Mock).mockReturnValue({
  //     loading: true,
  //   });

  //   const { getByTestId } = render(App, {
  //     localVue,
  //     router,
  //   });

  //   expect(getByTestId("auth-loader")).toBeInTheDocument();
  // });
});
