<template>
  <ion-page>
    <Header />
    <ion-content :fullscreen="true">
      {{ "boa sorte" }}
    </ion-content>

    <ion-fab slot="fixed" vertical="bottom" horizontal="end">
      <ion-fab-button size="small">
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="end">
        <ion-fab-button>
          <ion-icon :icon="document"></ion-icon>
        </ion-fab-button>
        <ion-fab-button>
          <ion-icon :icon="colorPalette"></ion-icon>
        </ion-fab-button>
        <ion-fab-button>
          <ion-icon :icon="globe"></ion-icon>
        </ion-fab-button>
      </ion-fab-list>
    </ion-fab>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import LastTradingsSection from "@/components/LastTradingsSection.vue";

import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/vue";
import { add, colorPalette, document, globe } from "ionicons/icons";
import Header from "@/components/Header.vue";
</script>
