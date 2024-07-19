<script setup lang="ts">
// import a reference to our ItemInterace
import type { ItemInterface } from '@/models'
// import a reference to the Item component:
import ItemComponent from './children/Item.component.vue'
// import a reference to the Laoder component
import Loader from '@/components/shared/Loader.component.vue'

// expose our properties
defineProps<{
  items: ItemInterface[]
  loading: boolean
}>()

// define emits for custom events
const emit = defineEmits<{
  (e: 'selectItem', id: number): any
}>()

// selectItem handler
const onSelectItem = (id: number) => {
  emit('selectItem', id)
}
</script>

<template>
  <div>
    <h3>Items:</h3>
    <Loader v-show="loading" />
    <ul v-show="!loading">
      <ItemComponent
        v-for="(item, index) in items"
        :key="item.id"
        :model="item"
        :isLast="index === items.length - 1"
        @selectItem="onSelectItem"
      />
    </ul>
  </div>
</template>
