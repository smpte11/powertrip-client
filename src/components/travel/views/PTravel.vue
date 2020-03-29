<template>
  <p-travel-layout>
    <template #header>
      <h1 class="subtitle is-1 has-text-light is-marginless">Travels</h1>
    </template>
    <template #body>
      <div class="columns">
        <div class="column">
          <p-card>
            <b-icon size="is-large" icon="plus"></b-icon>
          </p-card>
        </div>
      </div>
    </template>
  </p-travel-layout>
</template>

<script lang="ts">
import { PCard } from "@/components/conmmon";
import { PTravelLayout } from "@/components/travel/layouts";

export default {
  components: { PCard, PTravelLayout },
};
</script>

<style lang="scss">
html,
body {
  height: 100vh;
  width: 100vw;
}
</style>
