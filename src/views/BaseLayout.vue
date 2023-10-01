<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { card, wallet, settings, home } from "ionicons/icons";
import { reactive, ref } from "vue";
import { useRoute, type RouteLocationMatched } from "vue-router";
import DrawerMenu from "@/components/DrawerMenu.vue";

const tabItems = reactive([
  {
    id: "home",
    route: "/home",
    label: "Inicio",
    icon: home,
  },
  {
    id: "tradings",
    route: "/tradings",
    label: "Movimentações",
    icon: card,
  },
  {
    id: "investiments",
    route: "/investiments",
    label: "Investimentos",
    icon: wallet,
  },
  {
    id: "tools",
    route: "/tools",
    label: "Ferramentas",
    icon: settings,
  },
]);

const route = useRoute();

const currentBaseRoute = (routePath: string) => {
  return route.matched.find(
    (match: RouteLocationMatched) => match.path === routePath
  );
};

let isDarkMode = ref(
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
);

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    isDarkMode.value = event.matches;
  });
</script>
<template>
  <ion-page>
    <DrawerMenu />
    <ion-tabs>
      <ion-router-outlet id="main-content"></ion-router-outlet>
      <ion-tab-bar
        :color="isDarkMode ? undefined : 'light'"
        class="h-20"
        slot="bottom"
      >
        <ion-tab-button
          v-for="tab in tabItems"
          :key="tab.id"
          :tab="tab.id"
          :href="tab.route"
        >
          <ion-icon aria-hidden="true" :icon="tab.icon" />
          <ion-label v-if="currentBaseRoute(tab.route)">{{
            tab.label
          }}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
