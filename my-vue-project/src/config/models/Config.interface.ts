// file: src/config/models/Config.interface.ts

import {
  ItemsApiClientOptions,
  LocalizationApiClientOptions,
} from "@/api-client/models";

export interface HttpClientConfigInterface {
  tokenKey: string;
  clientType: string;
}

/**
 * @Name ConfigInterface
 * @description
 * Describes the structure of a configuration file
 */
export interface ConfigInterface {
  global: {
    // ... things that are not specific to a single app domain
    version: number;
  };

  httpClient: HttpClientConfigInterface;

  apiClient: {
    type: string;
  };

  items: {
    apiClientOptions: ItemsApiClientOptions;
  };

  localization: {
    apiClientOptions: LocalizationApiClientOptions;
    locales: { key: string; isDefault: boolean }[];
    localStorageCache: { enabled: boolean; expirationInMinutes: number };
  };
}
