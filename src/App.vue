<script setup lang="ts">
import { ref } from "vue";
import { kApp, kPage, kNavbar } from "konsta/vue";
import BottomNavigation from "./components/BottomNavigation.vue";
import Despesas from "./views/Despesas.vue";
import Investimentos from "./views/Investimentos.vue";
import Dicas from "./views/Dicas.vue";

const activeTab = ref("despesas");
</script>

<template>
  <kApp theme="material">
    <kPage>
      <kNavbar title="Endinheirando" />
      <Despesas v-if="activeTab === 'despesas'" />
      <Investimentos v-if="activeTab === 'investiments'" />
      <Dicas v-if="activeTab === 'tips'" />
      <BottomNavigation v-model="activeTab" />
    </kPage>
  </kApp>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
