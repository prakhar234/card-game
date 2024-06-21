import { createStore, Store } from "vuex";
import { game } from "@/store/game";
import { RootState } from "@/store";

const initializeStore = (): Store<RootState> => {
  return createStore({
    modules: {
      game,
    },
  });
};

describe("Game Vuex Store", () => {
  let store: Store<RootState>;

  beforeEach(() => {
    store = initializeStore();
  });

  it("should initialize with the correct state", () => {
    const state = store.state.game;
    expect(state.players).toHaveLength(4);
    expect(state.players.every((player) => player.cards.length === 0)).toBe(
      true
    );
    expect(state.gameStarted).toBe(false);
    expect(state.currentRound).toBe(0);
  });

  it("should start the game and deal the first round", () => {
    store.dispatch("game/startGame");
    const state = store.state.game;
    expect(state.gameStarted).toBe(true);
    expect(state.currentRound).toBe(1);
    expect(state.players.every((player) => player.cards.length === 1)).toBe(
      true
    );
  });

  it("should deal the next round", () => {
    store.dispatch("game/startGame");
    store.dispatch("game/dealNextRound");
    const state = store.state.game;
    expect(state.currentRound).toBe(2);
    expect(state.players.every((player) => player.cards.length === 2)).toBe(
      true
    );
  });

  it("should not deal more than 5 rounds", () => {
    store.dispatch("game/startGame");
    for (let i = 0; i < 5; i++) {
      store.dispatch("game/dealNextRound");
    }
    const state = store.state.game;
    expect(state.currentRound).toBe(5);
    store.dispatch("game/dealNextRound");
    expect(state.currentRound).toBe(5); // Should still be 5
    expect(state.players.every((player) => player.cards.length === 5)).toBe(
      true
    );
  });

  it("should reset the game", () => {
    store.dispatch("game/startGame");
    store.dispatch("game/resetGame");
    const state = store.state.game;
    expect(state.gameStarted).toBe(false);
    expect(state.currentRound).toBe(0);
    expect(state.players.every((player) => player.cards.length === 0)).toBe(
      true
    );
  });

  it("should return correct game status from getters", () => {
    expect(store.getters["game/gameStarted"]).toBe(false);
    expect(store.getters["game/currentRound"]).toBe(0);
    expect(store.getters["game/gameOver"]).toBe(false);

    store.dispatch("game/startGame");
    expect(store.getters["game/gameStarted"]).toBe(true);
    expect(store.getters["game/currentRound"]).toBe(1);
    expect(store.getters["game/gameOver"]).toBe(false);

    for (let i = 0; i < 4; i++) {
      store.dispatch("game/dealNextRound");
    }
    expect(store.getters["game/gameOver"]).toBe(true);
  });
});
