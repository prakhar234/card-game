import { createStore } from "vuex";
import { game } from "./game";
import { GameState } from "./types";

export interface RootState {
  game: GameState;
}

export default createStore<RootState>({
  modules: {
    game,
  },
});
