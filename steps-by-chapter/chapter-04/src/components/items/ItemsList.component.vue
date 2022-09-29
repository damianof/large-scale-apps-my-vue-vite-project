<script setup lang="ts">
  // import a reference to our ItemInterace
  import type {
    ItemInterface
  } from '../../models/items/Item.interface'
  // expose a property called items with a default value of a blank array
  defineProps<{
    items: ItemInterface[]
  }>() // here replace any[] with ItemInterace[]

  // define emits for custom events
  // const emit = defineEmits(['selectItem']) // <-- using only an array of strings 
  const emit = defineEmits<{
    (e: 'selectItem', id: number): any // <-- using type-only declaration
  }>()


  // item click handler
  const handleClick = (item: ItemInterface) => {
    emit('selectItem', item.id) // <-- modify the body of the method by just emitting "itemClicked" -->
  }
</script>

<template>
  <div>
    <h3>Items:</h3>
    <ul>
      <li v-for="(item, index) in items" 
        :key="item.id" 
        @click="handleClick(item)">
        {{item.name}} [{{item.selected}}] <!-- add this -->
      </li>
    </ul>
  </div>
</template>