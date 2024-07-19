// file: src/store/items/Items.store.ts

// import a reference to Vue's reactive
import { reactive } from 'vue'

// import interfaces references
import { ItemsStateInterface } from './models'
// import a reference to our ItemInterface
import { ItemInterface } from '@/models'
// import a reference to our apiClient instance
import { apiClient } from '@/api-client'

// the items module state
const itemsState = reactive<ItemsStateInterface>({
  loading: false,
  items: []
})

// the items store actions implementation:
const actions = {
  // action that we invoke to load the items from an api:
  loadItems: async () => {
    // set loading to true and clear current data:
    itemsState.loading = true
    itemsState.items = []

    // invoke our API cient fetchItems to load the data from an API end-point
    const data = await apiClient.items.fetchItems()
    itemsState.items = data
    itemsState.loading = false
  },

  // action that we'll invoke from our component to select/unselect a specific item
  toggleItemSelected: async (id: number) => {
    console.log('ItemsStore: action: toggleItemSelected', id)
    const item = (itemsState.items || []).find((o) => o.id === id)
    if (item) {
      item.selected = !item.selected
    }
  }
}

// the items store getters implementation
// these will be consumed in the components
const getters = {
  get loading() {
    return itemsState.loading
  },
  get items() {
    return itemsState.items
  }
}

// infer the items store interface:
export interface ItemsStoreInterface {
  getters: typeof getters
  actions: typeof actions
}

// hook that will use to consume the items store in other code
export function useItemsStore(): ItemsStoreInterface {
  // return our store intance implementation
  return {
    getters,
    actions
  }
}
