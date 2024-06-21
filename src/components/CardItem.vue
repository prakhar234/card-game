<template>
  <div
    :key="card.key"
    :class="[
      'card',
      {
        highlight: card.highlight,
        shuffle: card.shuffle,
      },
    ]"
  >
    {{ card.suit }}{{ card.value }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Card } from "@/store/types";

export default defineComponent({
  props: {
    card: {
      type: Object as PropType<Card>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped></style>
