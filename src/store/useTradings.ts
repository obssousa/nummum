import { ref, reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import { TradingType } from "@/types/enum";
// ref()s become state properties
// computed()s become getters
// function()s become actions

interface Deposit {
    name: string;
    value: number;
    isRecorrency: number;
    alocateToMeta: number;
    metaId: number;
}

interface Investiment {
    name: string;
    type: string;
    code: string;
    quantity: number;
    boughtValue: number;
}

interface Spent {
    name: string;
    method: number;
    installmentsNumber: number;
    downPrice: number;
}

export const useTradings = defineStore('tradings', () => {
    const spents = ref<Spent[]>([])
    const getSpents = computed<Spent[]>(() => spents.value)

    function addSpent(spent: Spent) {
        spents.value.push(spent);
    }

    const tradings = reactive([
        {
          value: 200,
          title: "Galaxy S21",
          type: TradingType.Withdraw,
        },
        {
          value: 100,
          title: "Ingresso",
          installment: 3,
          endDate: "22/12/2024",
          type: TradingType.Withdraw,
        },
        {
          value: 300,
          title: "Freela",
          installment: false,
          type: TradingType.Deposit,
        },
        {
          value: 300,
          title: "Oléo Automotivo",
          installment: 6,
          endDate: "22/12/2024",
          type: TradingType.Withdraw,
        },
        {
          value: 300,
          title: "Pendrive",
          installment: false,
          type: TradingType.Withdraw,
        },
        {
          value: 700,
          title: "MXRF11",
          installment: false,
          type: TradingType.Investiment,
        },
        {
          value: 1200,
          title: "TAEE11",
          installment: false,
          type: TradingType.Investiment,
        },
      ]);

      const getTradings = computed(() => tradings)    
  
    return { spents, getSpents, addSpent, getTradings }
  })