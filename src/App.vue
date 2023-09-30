<script setup lang="ts">
import { ref } from "vue";
import { EnvelopeFill, Calendar, CloudUploadFill } from "framework7-icons/vue";
import {
  EnvelopeIcon,
  CalendarDaysIcon,
  CloudIcon,
} from "@heroicons/vue/24/solid";
import { kApp, kPage, kNavbar, kTabbar, kIcon, kTabbarLink } from "konsta/vue";
import Despesas from "./views/Despesas.vue";
import Investimentos from "./views/Investimentos.vue";
import Dicas from "./views/Dicas.vue";

const activeTab = ref("tab-1");
const isTabbarLabels = ref(true);
const isTabbarIcons = ref(true);
</script>

<template>
  <kApp theme="material">
    <kPage>
      <kNavbar title="Endinheirando" />
      <kTabbar
        :labels="isTabbarLabels"
        :icons="isTabbarIcons"
        class="left-0 bottom-0 fixed"
      >
        <k-tabbar-link
          :active="activeTab === 'tab-1'"
          @click="() => (activeTab = 'tab-1')"
        >
          <template v-if="isTabbarLabels" #label> Tab 1 </template>
          <template v-if="isTabbarIcons" #icon>
            <k-icon>
              <template #ios>
                <EnvelopeFill class="w-7 h-7" />
              </template>
              <template #material>
                <EnvelopeIcon class="w-6 h-6" />
              </template>
            </k-icon>
          </template>
        </k-tabbar-link>
        <k-tabbar-link
          :active="activeTab === 'tab-2'"
          @click="() => (activeTab = 'tab-2')"
        >
          <template v-if="isTabbarLabels" #label> Tab 2 </template>
          <template v-if="isTabbarIcons" #icon>
            <k-icon>
              <template #ios>
                <Calendar class="w-7 h-7" />
              </template>
              <template #material>
                <CalendarDaysIcon class="w-6 h-6" />
              </template>
            </k-icon>
          </template>
        </k-tabbar-link>
        <k-tabbar-link
          :active="activeTab === 'tab-3'"
          @click="() => (activeTab = 'tab-3')"
        >
          <template v-if="isTabbarLabels" #label> Tab 3 </template>
          <template v-if="isTabbarIcons" #icon>
            <k-icon>
              <template #ios>
                <CloudUploadFill class="w-7 h-7" />
              </template>
              <template #material>
                <CloudIcon class="w-6 h-6" />
              </template>
            </k-icon>
          </template>
        </k-tabbar-link>
      </kTabbar>

      <Despesas v-if="activeTab === 'tab-1'" />
      <Investimentos v-if="activeTab === 'tab-2'" />
      <Dicas v-if="activeTab === 'tab-3'" />
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
