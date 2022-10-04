// file: src/api-client/live/items/index.ts

import { 
  ItemsApiClientOptions, 
  ItemsApiClientInterface, 
  ItemsApiClientModel 
} from '../../models/items'

const options: ItemsApiClientOptions = {
  endpoints: {
    // this should be pointing to the live API end-point
    fetchItems: '/path/to/your/real/api/end-point'
  }
}

// instantiate the ItemsApiClient pointing at the url that returns live data
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(options)

// export our instance
export {
  itemsApiClient
}
