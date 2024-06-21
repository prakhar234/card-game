import { Card } from "@/store/types";

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

export const createDeck = (): Card[] => {
  const deck: Card[] = [];
  suits.forEach((suit) => {
    values.forEach((value) => {
      deck.push({ suit, value, highlight: false });
    });
  });
  return deck;
};

export const shuffleDeck = (deck: Card[]): Card[] => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

export const dealCard = (deck: Card[]): Card => {
  const card = deck.pop();
  if (card) {
    card.highlight = true;
    return card;
  }
  throw new Error("No cards left in the deck");
};
