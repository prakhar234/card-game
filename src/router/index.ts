import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import GameView from "@/views/GameView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: GameView,
  },
  // Add more routes here if needed
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
