<template>
  <div>
    <ItemsListComponent :items="items" :loading="loading" @selectItem="onSelectItem" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, onMounted } from 'vue'
  import ItemsListComponent from '@/components/items/ItemsList.component.vue'

  import { useAppStore } from '@/store'
  import { ItemInterface } from '@/models'

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
      const items = computed((): ItemInterface[] => {
        return itemsStore.getters.items
      })

      const loading = computed((): boolean => {
        return itemsStore.getters.loading
      })

      // methods:
      const onSelectItem = async (id: number) => {
    	  // always await store actions because they are async
        await itemsStoreActions.toggleItemSelected(id)
      }

      // lifecycle event handlers:
      onMounted(async () => {
    	  // always await store actions because they are async
        await itemsStoreActions.loadItems()
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
