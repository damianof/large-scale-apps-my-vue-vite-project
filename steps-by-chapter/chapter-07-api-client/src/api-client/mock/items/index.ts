// file: src/api-client/mock/items/index.ts
import { 
  ItemsApiClientOptions, 
  ItemsApiClientInterface, 
  ItemsApiClientModel 
} from '../../models/items'

const options: ItemsApiClientOptions = {
  endpoints: {
    fetchItems: '/static/mock-data/items/items.json'
  },
  mockDelay: 1000
}

// instantiate the ItemsApiClient pointing at the url that returns static json mock data
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(options)

// export our instance
export {
  itemsApiClient
}
