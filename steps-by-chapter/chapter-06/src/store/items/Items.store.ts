// file: src/store/items/Items.store.ts

// import a reference to Vue's reactive
import { reactive } from 'vue'

// import interfaces references
import { ItemsStateInterface } from './models'
// import a reference to our ItemInterface
import { ItemInterface } from '@/models'

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

    // mock some data:
    let mockData: ItemInterface[] = [{
      id: 1,
      name: 'Item 1',
      selected: false
    }, {
      id: 2,
      name: 'Item 2',
      selected: false
    }, {
      id: 3,
      name: 'Item 3',
      selected: false
    }, {
      id: 4,
      name: 'Item 4',
      selected: false
    }, {
      id: 5,
      name: 'Item 5',
      selected: false
    }]

    // let's pretend we called some API end-point
    // and it takes 1 second to return the data
    // by using javascript setTimeout with 1000 for the milliseconds option
    setTimeout(() => {
      // set items data and loading to false
      itemsState.items = mockData
      itemsState.loading = false
    }, 1000)
  },

  // action that we'll invoke from our component to select/unselect a specific item
  toggleItemSelected: async (id: number) => {
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
