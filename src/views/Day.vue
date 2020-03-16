<template>
  <day-layout>
    <template #overview>
      <day-overview />
    </template>
    <template #summary>
      <day-weather />
      <b-button rounded type="is-primary" icon-left="plus" class="is-fullwidth"
        >Add new activity</b-button
      >
    </template>
  </day-layout>
</template>

<script lang="ts">
import { DayWeather, DayOverview, DayLayout } from "@/components/day";

export default {
  components: { DayWeather, DayOverview, DayLayout }
};
</script>

<style lang="scss">
html,
body {
  height: 100vh;
  width: 100vw;
}
</style>
