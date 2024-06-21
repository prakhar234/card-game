<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/AppHeader.vue";

export default defineComponent({
  name: "App",
  components: {
    AppHeader,
  },
});
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
