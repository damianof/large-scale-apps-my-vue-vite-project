<script setup lang="ts">
  // import a reference to our ItemInterace
  import type {
    ItemInterface
  } from '../../models/items/Item.interface'

  // import a reference to the Item component:
  import ItemComponent from './children/Item.component.vue' // <-- add this line

  // expose a property called items with a default value of a blank array
  defineProps<{
    items: ItemInterface[]
  }>() // here replace any[] with ItemInterace[]

  // define emits for custom events
  // const emit = defineEmits(['selectItem']) // <-- using only an array of strings 
  const emit = defineEmits<{
    (e: 'selectItem', id: number): any // <-- using type-only declaration
  }>()


  // selectItem handler
  const onSelectItem = (id: number) => { // <-- update this block
    emit('selectItem', id) 
  }
</script>

<template>
  <div>
    <h3>Items:</h3>
    <ul>
      <ItemComponent v-for="(item, index) in items"
        :key="item.id" 
        :model="item"
        @selectItem="onSelectItem" />
    </ul>
  </div>
</template>

<style>
  ul {
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }
</style>
