// file: src/api-client/live/index.ts

// import a reference to the app config
import { config } from '@/config'

import { ApiClientInterface, LocalizationApiClientModel, ItemsApiClientModel } from '../models'

// create an instance of our main ApiClient that wraps the live child clients
const apiLiveClient: ApiClientInterface = {
  localization: new LocalizationApiClientModel(config.localization.apiClientOptions),
  items: new ItemsApiClientModel(config.items.apiClientOptions)
}
// export our instance
export { apiLiveClient }
