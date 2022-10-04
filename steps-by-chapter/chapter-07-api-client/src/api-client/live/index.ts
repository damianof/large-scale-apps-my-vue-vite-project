// file: src/api-client/live/index.ts

import { ApiClientInterface } from '../models'
// import module instances
import { itemsApiClient } from './items'

// create an instance of our main ApiClient that wraps the live child clients
const apiLiveClient: ApiClientInterface = {
  items: itemsApiClient
}

// export our instance
export {
  apiLiveClient
}
