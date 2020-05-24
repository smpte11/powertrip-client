<template>
  <transition>
    <p-fullscreen-layout class="justify-center" v-if="loading && requiresAuth">
      <template #content>
        <p-loader data-testid="auth-loader"></p-loader>
      </template>
    </p-fullscreen-layout>
    <router-view v-else />
  </transition>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";
import { useAuth } from "./components/user";

export default defineComponent({
  setup(_, { root }) {
    const { loading } = useAuth();

    const requiresAuth = computed(
      () => root.$router.currentRoute?.meta.requiresAuth
    );

    return { loading, requiresAuth };
  },
});
</script>
