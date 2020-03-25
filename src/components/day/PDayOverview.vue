<template>
  <div>
    <h1 class="subtitle is-1 has-text-light is-marginless">Day 1</h1>
    <p class="subtitle has-text-light">{{ today }}</p>

    <p>
      Montreal
      <b-icon icon="map-marker" />
    </p>
    <p>2 nights left here</p>
    <p>Next destination: Quebec City</p>
  </div>
</template>

<script lang="ts">
import { format } from "date-fns";

export default {
  data() {
    return {
      today: format(new Date(), "yyyy-MM-dd"),
    };
  },
};
</script>
