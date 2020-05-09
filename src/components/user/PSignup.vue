<template>
  <div class="p-background">
    <p-fullscreen-layout>
      <template #content>
        <div class="flex flex-grow flex-col justify-center items-center">
          <div class="title-up mb-6" :class="{ 'title-up--on': showSignup }">
            <h1 class="text-6xl md:text-8xl font-bold text-gray-300">
              Powertrip
            </h1>
            <h2 class="text-xl md:text-2xl font-extrabold text-gray-300">
              empowering your next adventure
            </h2>
          </div>
          <transition name="slide-up">
            <div class="flex flex-col items-center mb-6" v-if="showSignup">
              <p-input
                id="email"
                type="email"
                label="Email"
                labelClass="text-gray-200"
                placeholder="john@doe.com"
                v-model="identityState.email"
              ></p-input>
              <p-input
                id="password"
                type="password"
                label="Password"
                labelClass="text-gray-200"
                v-model="identityState.password"
              ></p-input>
              <div class="flex flex-row">
                <p-button @click="toggleSignup">
                  <icon
                    color="#e2e8f0"
                    height="1.5rem"
                    width="1.5rem"
                    icon="icon-arrow-left"
                  ></icon>
                </p-button>
                <p-button
                  rounded
                  class="bg-gray-300"
                  @click="onSignup(identityState.email, identityState.password)"
                  >Create</p-button
                >
              </div>
            </div>

            <div class="flex flex-col items-center mb-6" v-else-if="showSignin">
              <p-input
                id="email"
                type="email"
                label="Email"
                labelClass="text-gray-200"
                placeholder="john@doe.com"
                v-model="identityState.email"
              ></p-input>
              <p-input
                id="password"
                type="password"
                label="Password"
                labelClass="text-gray-200"
                v-model="identityState.password"
              ></p-input>
              <div class="flex flex-row">
                <p-button @click="toggleSignin">
                  <icon
                    color="#e2e8f0"
                    height="1.5rem"
                    width="1.5rem"
                    icon="icon-arrow-left"
                  ></icon>
                </p-button>
                <p-button
                  rounded
                  class="bg-gray-300"
                  @click="onSignin(identityState.email, identityState.password)"
                  >Sign in</p-button
                >
              </div>
            </div>
          </transition>
          <p-button
            rounded
            class="bg-gray-300"
            v-show="!showSignup && !showSignin"
            @click="toggleSignup"
            >Sign up</p-button
          >
          <hr v-show="!showSignup && !showSignin" />
          <p-button
            rounded
            class="bg-gray-300"
            v-show="!showSignin && !showSignup"
            @click="toggleSignin"
            >Sign in</p-button
          >
        </div>
      </template>
    </p-fullscreen-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/composition-api";

import useAuth from "@/components/user/useAuth";

import "@/assets/svg/icon-arrow-right";

export default defineComponent({
  setup(_, ctx) {
    const showSignup = ref(false);
    const showSignin = ref(false);
    // TODO maybe do a useForm hook?
    const identityState = reactive({
      email: "",
      password: "",
    });

    const toggleSignup = () => (showSignup.value = !showSignup.value);
    const toggleSignin = () => (showSignin.value = !showSignin.value);

    const { signup, signin } = useAuth();

    async function onSignup(email: string, password: string) {
      try {
        await signup(email, password);
        ctx.root.$router.push("travels");
      } catch (error) {
        console.log(error);
      }
    }

    async function onSignin(email: string, password: string) {
      try {
        await signin(email, password);
        ctx.root.$router.push("travels");
      } catch (error) {
        console.log(error);
      }
    }

    return {
      identityState,
      onSignin,
      onSignup,
      showSignin,
      showSignup,
      toggleSignin,
      toggleSignup,
    };
  },
});
</script>

<style lang="postcss" scoped>
$easing: cubic-bezier(0.19, 1, 0.22, 1);

.p-background {
  @apply bg-cover bg-no-repeat bg-center;
  background-image: linear-gradient(
      color(black a(75%)),
      color(theme("colors.cyan.500") a(25%))
    ),
    url("https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80");
}

.title-up {
  transition: transform 0.5s ease-in-out;

  &--on {
    @apply transform -translate-y-40;
  }
}

@keyframes slide-up--on {
  from {
    @apply opacity-0;
    @apply transform translate-y-0;
  }

  to {
    @apply opacity-100;
    @apply transform -translate-y-5;
  }
}

.slide-up-enter-active {
  will-change: transform, opacity;
  animation: slide-up--on 1s $easing forwards;
}
</style>
