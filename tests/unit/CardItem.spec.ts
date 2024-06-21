import { mount } from "@vue/test-utils";
import CardItem from "@/components/CardItem.vue";
import { Card } from "@/store/types";

describe("CardItem.vue", () => {
  const card: Card = {
    suit: "♠",
    value: "A",
    highlight: false,
    shuffle: false,
  };

  it("renders correctly", () => {
    const wrapper = mount(CardItem, {
      props: { card },
    });
    expect(wrapper.text()).toContain("♠A");
  });

  it("applies highlight class when card.highlight is true", () => {
    const highlightedCard = { ...card, highlight: true };
    const wrapper = mount(CardItem, {
      props: { card: highlightedCard },
    });
    expect(wrapper.classes()).toContain("highlight");
  });

  it("applies shuffle class when card.shuffle is true", () => {
    const shuffledCard = { ...card, shuffle: true };
    const wrapper = mount(CardItem, {
      props: { card: shuffledCard },
    });
    expect(wrapper.classes()).toContain("shuffle");
  });

  it("applies both highlight and shuffle classes when both are true", () => {
    const specialCard = { ...card, highlight: true, shuffle: true };
    const wrapper = mount(CardItem, {
      props: { card: specialCard },
    });
    expect(wrapper.classes()).toContain("highlight");
    expect(wrapper.classes()).toContain("shuffle");
  });
});
