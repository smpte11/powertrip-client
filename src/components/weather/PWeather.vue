<template>
  <apollo-query
    :query="
      (gql) => gql`
        query WeatherQuery($lat: Float!, $long: Float!) {
          weather(lat: $lat, long: $long) {
            icon
            summary
          }
        }
      `
    "
    :variables="{
      lat: coordinates.lat,
      long: coordinates.long,
    }"
  >
    <template v-slot="{ result: { loading, data } }">
      <div v-if="loading"></div>
      <div v-else-if="data">
        <p-weather-icon :icon="data.weather.icon"></p-weather-icon>
        <p>{{ data.weather.summary }}</p>
      </div>
    </template>
  </apollo-query>
</template>

<script lang="ts">
import PWeatherIcon from "@/components/weather/PWeatherIcon.vue";

import { LatLong } from "../enhancers/"; // eslint-disable-line no-unused-vars

type WeatherIcon =
  | "clear-day"
  | "clear-night"
  | "rain"
  | "snow"
  | "sleet"
  | "wind"
  | "fog"
  | "cloudy"
  | "partly-cloudy-day"
  | "partly-cloudy-night"
  | "question";

interface Weather {
  icon: WeatherIcon;
  summary: string;
}

interface Data {
  domain: string;
  weather: Weather;
}

export default {
  name: "p-weather",

  components: {
    PWeatherIcon,
  },

  props: {
    coordinates: {
      type: Object as () => LatLong,
      required: true,
    },
  },
};
</script>
