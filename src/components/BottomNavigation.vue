<script setup lang="ts">
import { reactive } from "vue";
import { EnvelopeFill, Calendar, CloudUploadFill } from "framework7-icons/vue";
import {
  EnvelopeIcon,
  CalendarDaysIcon,
  CloudIcon,
} from "@heroicons/vue/24/solid";
import { kTabbar, kIcon, kTabbarLink } from "konsta/vue";

defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue"]);

const tabs = reactive([
  {
    value: "despesas",
    displayName: "Despesas",
    iconAndroid: EnvelopeIcon,
    iconIOS: EnvelopeFill,
  },
  {
    value: "investiments",
    displayName: "Investimentos",
    iconAndroid: CalendarDaysIcon,
    iconIOS: Calendar,
  },
  {
    value: "tips",
    displayName: "Dicas",
    iconAndroid: CloudIcon,
    iconIOS: CloudUploadFill,
  },
]);

function setActiveTab(tab: string) {
  emits("update:modelValue", tab);
}
</script>
<template>
  <kTabbar labels icons class="left-0 bottom-0 fixed">
    <k-tabbar-link
      v-for="tab in tabs"
      :key="tab.value"
      :active="modelValue === tab.value"
      @click="setActiveTab(tab.value)"
    >
      <template #label> {{ tab.displayName }} </template>
      <template #icon>
        <k-icon>
          <template #ios>
            <component :is="tab.iconIOS" class="w-7 h-7" />
          </template>
          <template #material>
            <component :is="tab.iconAndroid" class="w-6 h-6" />
          </template>
        </k-icon>
      </template>
    </k-tabbar-link>
  </kTabbar>
</template>
