<template>
  <div class="p-background">
    <p-fullscreen-layout>
      <template #content>
        <div class="flex flex-grow flex-col justify-center items-center">
          <div class="mb-6">
            <h1 class="text-6xl md:text-8xl font-bold text-gray-300">
              Powertrip
            </h1>
            <h2 class="text-xl md:text-2xl font-extrabold text-gray-300">
              empowering your next adventure
            </h2>
          </div>
          <div class="mb-6">
            <div v-if="showSignup === true">
              <p-input
                id="email"
                type="email"
                label="Email"
                labelClass="text-gray-200"
                placeholder="john@doe.com"
                v-model="signupState.email"
              ></p-input>
              <p-input
                id="password"
                type="password"
                label="Password"
                labelClass="text-gray-200"
                v-model="signupState.password"
              ></p-input>
              <p-button rounded class="bg-gray-300" :onClick="signup"
                >Create</p-button
              >
            </div>
            <div v-else>
              <p-button rounded class="bg-gray-300" :onClick="toggleSignup"
                >Sign up</p-button
              >
              <hr />
              <p-button rounded class="bg-gray-300" :onClick="() => {}"
                >Sign in</p-button
              >
            </div>
          </div>
        </div>
      </template>
    </p-fullscreen-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/composition-api";
import { useMutation } from "@vue/apollo-composable";

import { SIGNUP } from "@/components/user/mutations";

export default defineComponent({
  setup() {
    const showSignup = ref(false);
    // TODO maybe do a useForm hook?
    const signupState = reactive({
      email: "",
      password: "",
    });

    const { mutate: signup } = useMutation(SIGNUP, () => ({
      variables: {
        user: {
          email: signupState.email,
          password: signupState.password,
          displayName: "smpte11",
        },
      },
    }));

    function toggleSignup() {
      showSignup.value = !showSignup.value;
    }

    return {
      showSignup,
      signupState,
      signup,
      toggleSignup,
    };
  },
});
</script>

<style lang="postcss" scoped>
.p-background {
  @apply bg-cover bg-no-repeat bg-center;
  background-image: linear-gradient(
      color(black a(75%)),
      color(theme("colors.cyan.500") a(25%))
    ),
    url("https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80");
}
</style>
