<script setup lang="ts">
  // import vue's reactive
  import { reactive } from 'vue'

  // import a reference to our ItemInterace
  import type { ItemInterface } from './models/items/Item.interface'
  // import a reference to our ItemsList component
  import ItemsListComponent from './components/items/ItemsList.component.vue'

  // mock some data:
  const items: ItemInterface[] = reactive([{ // now items array will be reactive 
    id: 1,
    name: 'Item 1',
    selected: false // add selected: false to each item
  }, {
    id: 2,
    name: 'Item 2',
    selected: false // add selected: false to each item
  }, {
    id: 3,
    name: 'Item 3',
    selected: false // add selected: false to each item
  }])

  // add this block:
  // selectItem handler
  const onSelectItem = (id: number) => {
    // retrieve the item from our local data
    const item = items.find(o => o.id === id)
    // sanity check:
    if (!item) {
      console.warn(`onSelectItem: could not find item with id: ${id}`)
      return
    }
    // update the item property
    item.selected = !item.selected
    console.log('onSelectItem', item.id, item.selected)
  }
</script>

<template>
  <div class="home">
    <ItemsListComponent 
      :items="items" 
      @selectItem="onSelectItem" /><!-- wireup onSelectItem handler -->
  </div>
</template>