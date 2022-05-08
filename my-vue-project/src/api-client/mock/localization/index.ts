// file: src/api-client/mock/localization/index.ts

// import a reference to the app config
import { config } from '@/config'

import { LocalizationApiClientInterface, LocalizationApiClientModel } from '../../models'

// instantiate the LocalizationApiClient pointing at the url that returns static json mock data
const localizationApiClient: LocalizationApiClientInterface = new LocalizationApiClientModel(
  config.localization.apiClientOptions
)

// export our instance
export { localizationApiClient }
