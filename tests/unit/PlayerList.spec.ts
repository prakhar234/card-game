import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import PlayerList from "@/components/PlayerList.vue";
import GamePlayer from "@/components/GamePlayer.vue";
import { Player } from "@/store/types";

describe("PlayerList.vue", () => {
  let store: any;
  let players: Player[];
  let currentRound: number;

  beforeEach(() => {
    players = [
      { id: 1, cards: [] },
      { id: 2, cards: [] },
      { id: 3, cards: [] },
      { id: 4, cards: [] },
    ];

    currentRound = 1;

    store = createStore({
      modules: {
        game: {
          namespaced: true,
          getters: {
            players: () => players,
            currentRound: () => currentRound,
          },
        },
      },
    });
  });

  it("renders the correct number of Player components", () => {
    const wrapper = mount(PlayerList, {
      global: {
        plugins: [store],
        components: {
          Player: GamePlayer,
        },
      },
    });
    const playerComponents = wrapper.findAllComponents(GamePlayer);
    expect(playerComponents.length).toBe(players.length);
  });

  it("passes the correct props to each Player component", () => {
    const wrapper = mount(PlayerList, {
      global: {
        plugins: [store],
        components: {
          Player: GamePlayer,
        },
      },
    });

    const playerComponents = wrapper.findAllComponents(GamePlayer);
    playerComponents.forEach((playerComponent, index) => {
      expect(playerComponent.props().player).toEqual(players[index]);
      expect(playerComponent.props().currentRound).toBe(currentRound);
    });
  });
});
