<template>
  <p-button class="pr-0" rounded @click="onSignout">
    <icon
      color="#4a5568"
      height="1.5rem"
      width="1.5rem"
      icon="icon-minus-circle"
    ></icon>
  </p-button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import useAuth from "@/components/user/useAuth";

import "@/assets/svg/icon-minus-circle";

export default defineComponent({
  setup(_, { root }) {
    const { signout } = useAuth();

    async function onSignout() {
      await signout();
      root.$router.replace("signup");
    }

    return {
      onSignout,
    };
  },
});
</script>
