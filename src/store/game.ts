import { Module } from "vuex";
import { GameState } from "./types";
import { RootState } from "./index";
import { createDeck, shuffleDeck, dealCard } from "@/utils/deck";

export const game: Module<GameState, RootState> = {
  namespaced: true,
  state: {
    players: [
      { id: 1, cards: [] },
      { id: 2, cards: [] },
      { id: 3, cards: [] },
      { id: 4, cards: [] },
    ],
    gameStarted: false,
    currentRound: 0,
  },
  mutations: {
    START_GAME(state) {
      state.gameStarted = true;
      state.currentRound = 1;
      const deck = shuffleDeck(createDeck());
      state.players.forEach((player) => {
        const card = dealCard(deck);
        card.shuffle = true;
        player.cards = [card];
      });
    },
    DEAL_NEXT_ROUND(state) {
      if (state.currentRound < 5) {
        state.currentRound++;
        const deck = shuffleDeck(createDeck());
        state.players.forEach((player) => {
          const card = dealCard(deck);
          card.shuffle = true;
          player.cards.forEach((card) => {
            card.highlight = false;
          });
          player.cards.push(card);
        });
      }
    },
    RESET_GAME(state) {
      state.gameStarted = false;
      state.currentRound = 0;
      state.players.forEach((player) => (player.cards = []));
    },
  },
  actions: {
    startGame({ commit }) {
      commit("START_GAME");
    },
    dealNextRound({ commit }) {
      commit("DEAL_NEXT_ROUND");
    },
    resetGame({ commit }) {
      commit("RESET_GAME");
    },
  },
  getters: {
    gameStarted: (state) => state.gameStarted,
    currentRound: (state) => state.currentRound,
    players: (state) => state.players,
    gameOver: (state) => state.gameStarted && state.currentRound === 5, // Game over when currentRound is equal to 5
  },
};
