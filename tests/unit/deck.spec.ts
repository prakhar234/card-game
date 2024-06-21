import { createDeck, shuffleDeck, dealCard } from "@/utils/deck";
import { Card } from "@/store/types";

describe("Deck Utils", () => {
  let deck: Card[];

  beforeEach(() => {
    deck = createDeck();
  });

  it("should create a deck of 52 cards", () => {
    expect(deck.length).toBe(52);

    const suits = ["♠", "♥", "♦", "♣"];
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];

    suits.forEach((suit) => {
      values.forEach((value) => {
        const card = deck.find(
          (card) => card.suit === suit && card.value === value
        );
        expect(card).toBeTruthy();
      });
    });
  });

  it("should shuffle the deck", () => {
    const originalDeck = [...deck];
    const shuffledDeck = shuffleDeck(deck);

    expect(shuffledDeck.length).toBe(52);
    expect(shuffledDeck).not.toEqual(originalDeck);
    expect(
      new Set(shuffledDeck.map((card) => `${card.suit}${card.value}`)).size
    ).toBe(52);
  });

  it("should deal a card from the deck", () => {
    const dealtCard = dealCard(deck);
    expect(dealtCard).toBeDefined();
    expect(deck.length).toBe(51);
    expect(dealtCard.highlight).toBe(true);
  });

  it("should throw an error when dealing a card from an empty deck", () => {
    deck = [];
    expect(() => dealCard(deck)).toThrowError("No cards left in the deck");
  });
});
