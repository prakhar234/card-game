<template>
  <div class="game-view">
    <button class="button" @click="startGame" v-if="!gameStarted">
      Start New Game
    </button>
    <button
      class="button"
      @click="dealNextRound"
      v-if="gameStarted && !gameOver"
    >
      Deal Next Round
    </button>
    <button class="button" @click="restartGame" v-if="gameStarted && gameOver">
      Restart Game
    </button>
    <div v-if="gameStarted && !gameOver" class="round-info">
      Current Round: {{ currentRound }}
    </div>
    <div v-if="gameOver" class="game-over">
      Game Over! Thank you for playing.
    </div>
    <PlayerList />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import PlayerList from "@/components/PlayerList.vue";

export default defineComponent({
  name: "GameView",
  components: {
    PlayerList,
  },
  setup() {
    const store = useStore();
    const gameStarted = computed(() => store.getters["game/gameStarted"]);
    const currentRound = computed(() => store.getters["game/currentRound"]);
    const gameOver = computed(() => store.getters["game/gameOver"]);

    const startGame = () => store.dispatch("game/startGame");
    const dealNextRound = () => store.dispatch("game/dealNextRound");
    const restartGame = () => store.dispatch("game/resetGame");

    return {
      gameStarted,
      currentRound,
      gameOver,
      startGame,
      dealNextRound,
      restartGame,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/views/game-view.scss";
</style>
