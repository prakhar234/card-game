<template>
  <div class="player">
    <h3>Player {{ player.id }}</h3>
    <div class="cards">
      <card-item
        v-for="(card, index) in player.cards"
        :card="card"
        :key="index"
      ></card-item>
      <div
        v-for="n in 5 - player.cards.length"
        :key="'placeholder' + n"
        class="card placeholder"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { Player as PlayerType } from "@/store/types";
import CardItem from "@/components/CardItem.vue";

export default defineComponent({
  name: "GamePlayer",
  components: {
    CardItem,
  },
  props: {
    player: {
      type: Object as () => PlayerType,
      required: true,
    },
    currentRound: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    watchEffect(() => {
      if (props.currentRound > 1) {
        props.player.cards.forEach((card, index) => {
          card.shuffle = false;
          if (index === props.currentRound - 1) {
            setTimeout(() => {
              card.shuffle = true;
            }, 100);
          }
        });
      }
    });

    return {};
  },
});
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
}
</style>
