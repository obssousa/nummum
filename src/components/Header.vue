<script setup lang="ts">
import { IonHeader, IonToolbar } from "@ionic/vue";
import { IonButtons, IonMenuButton, IonIcon } from "@ionic/vue";
</script>
<template>
  <ion-header class="ion-no-border">
    <ion-toolbar color="transparent">
      <ion-buttons
        class="rounded-lg text-ion-color-primary-contrast bg-ion-color-primary m-4"
        slot="start"
      >
        <ion-menu-button :auto-hide="false"></ion-menu-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>
