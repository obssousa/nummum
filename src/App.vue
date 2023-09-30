<script setup lang="ts">
 import { ref, watch } from 'vue';
 import { Plus } from 'framework7-icons/vue';
import { kApp, kPage, kNavbar, kFab, kBlock, kButton, kSearchbar, kList, kListItem } from 'konsta/vue';

const items = [
    { title: 'FC Ajax' },
    { title: 'FC Arsenal' },
    { title: 'FC Athletic' },
    { title: 'FC Barcelona' },
    { title: 'FC Bayern München' },
    { title: 'FC Bordeaux' },
    { title: 'FC Borussia Dortmund' },
    { title: 'FC Chelsea' },
    { title: 'FC Galatasaray' },
    { title: 'FC Juventus' },
    { title: 'FC Liverpool' },
    { title: 'FC Manchester City' },
    { title: 'FC Manchester United' },
    { title: 'FC Paris Saint-Germain' },
    { title: 'FC Real Madrid' },
    { title: 'FC Tottenham Hotspur' },
    { title: 'FC Valencia' },
    { title: 'FC West Ham United' },
  ];

  const searchQuery = ref('');

const handleSearch = (e: { target: { value: string; }; }) => {
  searchQuery.value = e.target.value;
};

const handleClear = () => {
  searchQuery.value = '';
};

const handleDisable = () => {
  console.log('Disable');
};

const filteredItems = ref(items);

watch(searchQuery, () => {
  filteredItems.value = searchQuery.value
    ? items.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    : items;
});
</script>

<template>
  <kApp theme="material">
    <kPage>
      <kNavbar title="My App" />
      <k-searchbar
          :value="searchQuery"
          disable-button
          disable-button-text="Cancel"
          @clear="handleClear"
          @disable="handleDisable"
          @input="handleSearch"
        >
        </k-searchbar>
        <k-list strong inset-material outline-ios>
      <k-list-item v-if="filteredItems.length === 0" title="Nothing found" />
      <k-list-item
        v-for="item in filteredItems"
        :key="item.title"
        :title="item.title"
      />
    </k-list>
      <kBlock>
        <k-button roundedMaterial>Button</k-button>
        <p>Here comes my app</p>
      </kBlock>

      <k-fab class="fixed right-4-safe bottom-4-safe z-20">
      <template #icon>
        <component :is="Plus" />
      </template>
    </k-fab>
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
