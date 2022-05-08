// file: src/store/items/models/ItemsState.interface.ts
import { ItemInterface } from '@/models'

/**
 * @name ItemsStateInterface
 * @description Interface represents the Items state
 */
export interface ItemsStateInterface {
  loading: boolean
  items: ItemInterface[]
}
