// file: src/api-client/models/localization/LocalizationApiClientOptions.interface.ts

export interface LocalizationApiClientEndpoints {
  fetchTranslation: string
}

/**
 * @Name LocalizationApiClientOptions
 * @description
 * Interface for the Localization api client options (includes endpoints used to avoid hard-coded strings)
 */
export interface LocalizationApiClientOptions {
  mockDelay?: number
  endpoints: LocalizationApiClientEndpoints
}
