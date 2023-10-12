<script setup lang="ts">
import LastTradingsSection from "@/components/Home/LastTradingsSection.vue";
import NewSpentModal from "@/components/Home/NewSpentModal.vue";
import {
  IonPage,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
} from "@ionic/vue";
import { add, card, wallet, download } from "ionicons/icons";
import Header from "@/components/Header.vue";
import { reactive, ref } from "vue";

const fabOptions = reactive([
  {
    icon: wallet,
    id: "open-spent-modal",
  },
  {
    icon: download,
    id: "open-modal2",
  },
  {
    icon: card,
    id: "open-modal3",
  },
]);
</script>
<template>
  <ion-page>
    <Header />
    <ion-content :fullscreen="true">
      <LastTradingsSection name="Tab 1 page" />
    </ion-content>

    <ion-fab slot="fixed" vertical="bottom" horizontal="end">
      <ion-fab-button>
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="top">
        <ion-fab-button
          :id="option.id"
          v-for="option in fabOptions"
          :key="option.icon"
        >
          <ion-icon :icon="option.icon"></ion-icon>
        </ion-fab-button>
      </ion-fab-list>
    </ion-fab>
    <NewSpentModal trigger="open-spent-modal" />
  </ion-page>
</template>

<style scoped>
ion-fab-button::part(native) {
  background-color: var(--ion-color-primary);
  border-radius: 15px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  color: black;
}

ion-fab-button::part(native):hover::after {
  background-color: #a3e681;
}

ion-fab-button::part(native):active::after {
  background-color: #87d361;
}
</style>
