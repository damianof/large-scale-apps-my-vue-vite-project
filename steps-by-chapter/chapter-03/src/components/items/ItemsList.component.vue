<script setup lang="ts">
  // import a reference to our ItemInterace
  import type { ItemInterface } from '../../models/items/Item.interface'
  // expose a property called items with a default value of a blank array
  defineProps<{ items: ItemInterface[] }>() // here replace any[] with ItemInterace[]
</script>

<template> 
  <div>
    <h3>Items:</h3>
    <ul>
      <li v-for="(item, index) in items"
        :key="item.id">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>
