<script setup lang="ts">
import { kApp, kPage, kNavbar, kBlock, kButton } from 'konsta/vue';
</script>

<template>
  <kApp theme="ios">
    <kPage>
      <kNavbar title="My App" />
      <kBlock>
        <k-button>Button</k-button>
        <p>Here comes my app</p>
      </kBlock>
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
