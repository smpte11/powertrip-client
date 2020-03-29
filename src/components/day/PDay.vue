<template>
  <p-day-layout>
    <template #header>
      <p-day-overview />
    </template>
    <template #body>
      <p-day-weather />
      <b-button rounded type="is-primary" icon-left="plus" class="is-fullwidth"
        >Add new activity</b-button
      >
    </template>
  </p-day-layout>
</template>

<script lang="ts">
import { PDayWeather, PDayOverview, PDayLayout } from "@/components/day";

export default {
  components: { PDayWeather, PDayOverview, PDayLayout },
};
</script>

<style lang="scss">
html,
body {
  height: 100vh;
  width: 100vw;
}
</style>
