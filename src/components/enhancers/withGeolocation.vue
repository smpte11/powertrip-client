<template>
  <div>
    <slot v-if="hasCoordinates()" :coordinates="coordinates"></slot>
    <div v-else>
      <p>Unable to get your current location.</p>
      <p>Perhaps you for to enable location services?</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { LatLong } from "@/components/enhancers/types";

interface Data {
  coordinates: LatLong;
}

export default Vue.extend({
  data(): Data {
    return {
      coordinates: {
        lat: undefined,
        long: undefined,
      },
    };
  },

  async mounted() {
    await this.setCoordinates();
  },

  methods: {
    async setCoordinates() {
      const { coords } = await this.getCoordinates();
      this.coordinates = Object.assign(
        {},
        { lat: coords.latitude, long: coords.longitude }
      );
    },

    hasCoordinates(): boolean {
      return Object.values(this.coordinates).every((value) => value);
    },

    getCoordinates() {
      return new Promise<Position>((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error("Geolocation is not supported."));
        }
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 10000,
          enableHighAccuracy: true,
        });
      });
    },
  },
});
</script>
