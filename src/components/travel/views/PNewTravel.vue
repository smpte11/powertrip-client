<template>
  <p-travel-layout>
    <template #header>
      <p-nav>
        <template #left>
          <p-button :clickHandler="() => {}">
            <icon height="1.5rem" width="1.5rem" icon="icon-arrow-left"></icon>
          </p-button>
        </template>
      </p-nav>
    </template>
    <template #body>
      <p-input is-full></p-input>
    </template>
  </p-travel-layout>
</template>

<script lang="ts">
import { PTravelLayout } from "@/components/travel/layouts";

import { PButton, PNav } from "@/components/ui";

import "@/assets/svg/icon-arrow-left";

export default {
  components: { PButton, PNav, PTravelLayout },
};
</script>
