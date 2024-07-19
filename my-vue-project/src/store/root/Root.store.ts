// file: src/store/root/Root.store.ts

// import the items store hook
import { useItemsStore } from '../items'

// hook that returns our root store instance and will allow us to consume our app store from our components
export function useAppStore() {
  return {
    itemsStore: useItemsStore()
    // additional domain store modules will be eventually added here
  }
}

// infer store interface from useAppStore return type
export type RootStoreInterface = ReturnType<typeof useAppStore>
