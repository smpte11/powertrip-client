<template>
  <div>
    <slot v-if="hasCoordinates()" :coordinates="getCoordinates()"></slot>
    <div v-else>
      <p>Unable to get you current location.</p>
      <p>Perhaps you for to enable location services?</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { LatLong } from "@/components/enhancers/types";

interface Data {
  coordinates: LatLong | null;
}

export default Vue.extend({
  data(): Data {
    return {
      coordinates: null
    };
  },

  async mounted() {
    await this.setCoordinates();
  },

  methods: {
    async setCoordinates() {
      const { coords } = await this.getCoordinates();
      this.coordinates = { lat: coords.latitude, long: coords.longitude };
    },

    hasCoordinates(): boolean {
      return this.coordinates !== null;
    },

    getCoordinates(): Promise<Position> {
      return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 10000
        })
      );
    }
  }
});
</script>
