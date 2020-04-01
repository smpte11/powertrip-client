<template>
  <canvas id="p-weather-icon" width="128" height="128"></canvas>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api";
import { Skycons, IconKey } from "skycons-ts";

interface Props {
  icon: string;
}

export default defineComponent({
  name: "p-weather-icon",
  props: {
    icon: String,
  },
  setup(props: Props) {
    onMounted(() => {
      const skycons = new Skycons({ color: "#303133", resizeClear: true });
      skycons.add("p-weather-icon", props.icon as IconKey);
      skycons.play();
    });
  },
});
</script>
