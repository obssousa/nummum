<script setup lang="ts">
import { ref } from "vue";
import {
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
  IonListHeader,
  IonToggle,
} from "@ionic/vue";
import type { ToggleCustomEvent } from "@ionic/vue";

const themeToggle = ref(false);
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

// Add or remove the "dark" class on the document body
const toggleDarkTheme = (shouldAdd: boolean | undefined) => {
  document.body.classList.toggle("dark", shouldAdd);
};

// Check/uncheck the toggle and update the theme based on isDark
const initializeDarkTheme = (isDark: boolean) => {
  themeToggle.value = isDark;
  toggleDarkTheme(isDark);
};

// Initialize the dark theme based on the initial
// value of the prefers-color-scheme media query
initializeDarkTheme(prefersDark.matches);

// Listen for changes to the prefers-color-scheme media query
prefersDark.addEventListener("change", (mediaQuery) =>
  initializeDarkTheme(mediaQuery.matches)
);

// Listen for the toggle check/uncheck to toggle the dark theme
const toggleChange = (ev: ToggleCustomEvent) => {
  toggleDarkTheme(ev.detail.checked);
};

const isOpen = ref<boolean>(false);
</script>
<template>
  <ion-menu
    @ionWillOpen="isOpen = true"
    @ionDidClose="isOpen = false"
    content-id="main-content"
    :swipeGesture="isOpen ? true : false"
  >
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list-header>Appearance</ion-list-header>
      <ion-list :inset="true">
        <ion-item>
          <ion-toggle
            :checked="themeToggle"
            @ionChange="toggleChange($event)"
            justify="space-between"
            >Dark Mode</ion-toggle
          >
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>
<style>
/*
  * Optional CSS
  * -----------------------------------
  */

/* This sets a different background and item background in light mode on ios */
.ios body {
  --ion-background-color: #f2f2f6;
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #fff;
}

/* This sets a different background and item background in light mode on md */
.md body {
  --ion-background-color: #f9f9f9;
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #fff;
}

/* This is added for the flashing that happens when toggling between themes */
ion-item {
  --transition: none;
}
</style>
