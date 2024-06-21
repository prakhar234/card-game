import { mount } from "@vue/test-utils";
import GamePlayer from "@/components/GamePlayer.vue";
import { Player } from "@/store/types";
import CardItem from "@/components/CardItem.vue";

describe("GamePlayer.vue", () => {
  const player: Player = {
    id: 1,
    cards: [
      { suit: "♠", value: "A", highlight: false, shuffle: false },
      { suit: "♥", value: "K", highlight: false, shuffle: false },
    ],
  };

  it("renders correctly", () => {
    const wrapper = mount(GamePlayer, {
      props: { player, currentRound: 1 },
    });
    expect(wrapper.html()).toContain("Player 1");
  });

  it("renders CardItem components for each card", () => {
    const wrapper = mount(GamePlayer, {
      props: { player, currentRound: 1 },
    });
    const cardItems = wrapper.findAllComponents(CardItem);
    expect(cardItems.length).toBe(player.cards.length);
  });

  it("renders placeholder cards when player has less than 5 cards", () => {
    const wrapper = mount(GamePlayer, {
      props: { player, currentRound: 1 },
    });
    const placeholders = wrapper.findAll(".card.placeholder");
    expect(placeholders.length).toBe(5 - player.cards.length);
  });

  it("applies shuffle effect to the correct card during the current round", async () => {
    jest.useFakeTimers();
    const wrapper = mount(GamePlayer, {
      props: { player, currentRound: 2 },
    });

    jest.advanceTimersByTime(100);
    await wrapper.vm.$nextTick();

    const cardItems = wrapper.findAllComponents(CardItem);
    const shuffledCard = cardItems[1];
    expect(shuffledCard?.props().card.shuffle).toBe(true);
    jest.useRealTimers();
  });
});
