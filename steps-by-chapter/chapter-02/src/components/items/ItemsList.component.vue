<script setup lang="ts">
  // expose a property called items with a default value of a blank array
  defineProps<{ items: any[] }>()
  // explicetely using any[] as we'll replace this with an interface in the next chapters 
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
