<template>
  <div>
    <ItemsListComponent :items="items" :loading="loading" @selectItem="onSelectItem" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import ItemsListComponent from '@/components/items/ItemsList.component.vue'

import { useAppStore } from '@/store'

export default defineComponent({
  name: 'Home',
  components: {
    ItemsListComponent
  },
  setup() {
    // private:
    const { itemsStore } = useAppStore()
    const { actions: itemsStoreActions } = itemsStore

    // computed:
    const items = computed(() => {
      return itemsStore.getters.items
    })
    const loading = computed(() => {
      return itemsStore.getters.loading
    })

    // methods:
    const onSelectItem = (id: number) => {
      itemsStoreActions.toggleItemSelected(id)
    }

    // lifecycle event handlers:
    onMounted(() => {
      itemsStoreActions.loadItems()
    })

    return {
      // computed:
      items,
      loading,
      // methods:
      onSelectItem
    }
  }
})
</script>
