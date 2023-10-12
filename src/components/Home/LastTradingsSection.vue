<script setup lang="ts">
import { reactive } from "vue";
import { IonIcon } from "@ionic/vue";
import { card, wallet, download } from "ionicons/icons";
import { TradingType } from "@/types/enum";
import { useTradings } from "@/store/useTradings";

defineProps({
  name: String,
});

const { getTradings } = useTradings();

function getDisplayType(type: TradingType) {
  switch (type) {
    case TradingType.Investiment:
      return "Investimento";
    case TradingType.Withdraw:
      return "Gasto";
    case TradingType.Deposit:
      return "Depósito";
    default:
      break;
  }
}

function getTypeIcon(type: TradingType) {
  switch (type) {
    case TradingType.Investiment:
      return wallet;
    case TradingType.Withdraw:
      return card;
    case TradingType.Deposit:
      return download;
    default:
      break;
  }
}
</script>

<template>
  <div class="flex flex-col gap-3">
    <span class="font-bold text-2xl px-4">Últimas transações</span>
    <div class="flex overflow-x-scroll hide-scroll-bar">
      <div class="flex flex-nowrap gap-2 first:ml-3 last:mr-3">
        <div
          class="flex flex-col p-2 rounded-2xl w-36 h-38 gap-1"
          :class="{
            'bg-ion-color-primary text-ion-color-primary-contrast':
              item.type === TradingType.Investiment,
            'bg-ion-color-warning text-ion-color-warning-contrast':
              item.type === TradingType.Deposit,
            'bg-ion-color-danger text-ion-color-danger-contrast':
              item.type === TradingType.Withdraw,
          }"
          v-for="item in getTradings"
          :key="item.title"
        >
          <p class="flex items-center gap-1 font-black text-lg">
            <ion-icon aria-hidden="true" :icon="getTypeIcon(item.type)" />
            {{ getDisplayType(item.type) }}
          </p>
          <h1 class="text-lg font-black truncate">{{ item.title }}</h1>
          <h2 class="text-md font-medium">
            {{
              item.value.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </h2>
          <p class="text-md font-medium" v-if="item.installment">
            {{
              `${item.installment}x ${(
                item.value / (item.installment as number)
              ).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}`
            }}
          </p>
          <p
            class="flex bg-ion-color-danger-shade items-center justify-center py-1 px-2 text-sm font-medium rounded-full"
            v-if="item.endDate"
          >
            {{ `Até ${item.endDate}` }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
ion-content {
  white-space: nowrap;
  --padding-end: 16px;
  --padding-start: 16px;
}

ion-card {
  padding: 0;
}

.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scroll-bar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
