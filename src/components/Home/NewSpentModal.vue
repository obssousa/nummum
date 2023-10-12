<script setup lang="ts">
import {
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonModal,
  IonHeader,
  IonToolbar,
  IonItem,
  IonInput,
  IonLabel,
} from "@ionic/vue";
import { close } from "ionicons/icons";
import { OverlayEventDetail } from "@ionic/core/components";
import { ref } from "vue";
import BigCurrencyInput from "@/components/Home/BigCurrencyInput.vue";

defineProps({
  trigger: String,
});

const message = ref(
  "This modal example uses triggers to automatically open a modal when the button is clicked."
);

const modal = ref();
const input = ref();

const cancel = () => modal.value.$el.dismiss(null, "cancel");

const confirm = () => {
  const name = input.value.$el.value;
  modal.value.$el.dismiss(name, "confirm");
};

const onWillDismiss = (ev: CustomEvent<OverlayEventDetail>) => {
  if (ev.detail.role === "confirm") {
    message.value = `Hello, ${ev.detail.data}!`;
  }
};

const refcurreyn = ref<number>(0);
</script>
<template>
  <ion-modal ref="modal" :trigger="trigger" @willDismiss="onWillDismiss">
    <ion-header>
      <ion-toolbar>
        <h1
          class="flex items-center justify-center flex-grow text-2xl font-bold"
        >
          +1 Gasto
        </h1>
        <ion-buttons slot="end">
          <ion-button @click="cancel()"><ion-icon :icon="close" /></ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <BigCurrencyInput v-model="refcurreyn" />
      <ion-item>
        <ion-label position="stacked">Enter your name</ion-label>
        <ion-input ref="input" type="text" placeholder="Your name"></ion-input>
      </ion-item>
      <ion-item> Metodo de Pagamento </ion-item>
    </ion-content>
  </ion-modal>
</template>
