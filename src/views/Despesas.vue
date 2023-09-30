<script setup lang="ts">
import { Plus } from "framework7-icons/vue";
import { kBlock, kFab } from "konsta/vue";
</script>

<template>
  <div class="h-[calc(100%-180px)] relative">
    <kBlock strong inset class="space-y-4">
      <p>
        <b>Tab 1</b>
      </p>
      <p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          accusantium necessitatibus, nihil quas praesentium at quibusdam
          cupiditate possimus et repudiandae dolorum delectus quo, similique
          voluptatem magni explicabo adipisci magnam ratione!
        </span>
        <span>
          Quod praesentium consequatur autem veritatis, magni alias consectetur
          ut quo, voluptatum earum in repellat! Id, autem! Minus suscipit, ad
          possimus non voluptatem aliquam praesentium earum corrupti optio velit
          tenetur numquam?
        </span>
        <span>
          Illo id ipsa natus quidem dignissimos odio dolore veniam, accusamus
          vel assumenda nulla aliquam amet distinctio! Debitis deserunt, et, cum
          voluptate similique culpa assumenda inventore, facilis eveniet iure
          optio velit.
        </span>
        <span>
          Maiores minus laborum placeat harum impedit, saepe veniam iusto
          voluptates delectus omnis consectetur tenetur ex ipsa error debitis
          aspernatur amet et alias! Sit odit cum voluptas quae? Est, omnis eos?
        </span>
      </p>
    </kBlock>
    <kFab class="fixed right-0 bottom-24 transform -translate-x-1/2 z-20">
      <template #icon>
        <component :is="Plus" />
      </template>
    </kFab>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
