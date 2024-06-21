<template>
  <div class="players">
    <Player
      v-for="player in players"
      :key="player.id"
      :player="player"
      :currentRound="currentRound"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import Player from "@/components/GamePlayer.vue";

export default defineComponent({
  name: "PlayerList",
  components: {
    Player,
  },
  setup() {
    const store = useStore();
    const players = computed(() => store.getters["game/players"]);
    const currentRound = computed(() => store.getters["game/currentRound"]);

    return {
      players,
      currentRound,
    };
  },
});
</script>

<style lang="scss" scoped>
.players {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
