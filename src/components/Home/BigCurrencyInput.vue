<template>
  <input
    class="w-full text-6xl text-ion-color-secondary bg-transparent focus:text-ion-color-primary border-none text-center px-4 py-16 outline-none"
    ref="inputRef"
    type="text"
  />
</template>

<script lang="ts" setup>
import { useCurrencyInput } from "vue-currency-input";
import type { CurrencyInputOptions } from "vue-currency-input";

export interface Props {
  modelValue: number | null;
  options?: CurrencyInputOptions;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  options: () =>
    ({
      locale: "pt-BR",
      currency: "BRL",
      currencyDisplay: "symbol",
      hideCurrencySymbolOnFocus: false,
      hideGroupingSeparatorOnFocus: false,
      hideNegligibleDecimalDigitsOnFocus: false,
      autoDecimalDigits: true,
      useGrouping: true,
      accountingSign: false,
    } as CurrencyInputOptions),
});

defineEmits(["update:modelValue", "change"]);

const { inputRef } = useCurrencyInput(props.options);
</script>
