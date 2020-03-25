<template>
  <div class="has-text-centered weather">
    <h2 class="title is-2">Today's weather</h2>
    <with-geolocation #default="{ coordinates }">
      <p-weather :coordinates="coordinates" />
    </with-geolocation>
  </div>
</template>

<script lang="ts">
import { withGeolocation } from "@/components/enhancers";
import { PWeather } from "@/components/weather";

export default {
  components: {
    withGeolocation,
    PWeather,
  },
};
</script>
