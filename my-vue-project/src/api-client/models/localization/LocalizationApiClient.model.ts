// file: src/api-client/models/localization/LocalizationApiClient.model.ts

import { httpClient, HttpRequestParamsInterface, HttpRequestType } from '@/http-client'

import { LocalizationApiClientOptions, LocalizationApiClientEndpoints } from './LocalizationApiClientOptions.interface'
import { LocalizationApiClientInterface } from './LocalizationApiClient.interface'

/**
 * @Name LocalizationApiClientModel
 * @description
 * Implements the LocalizationApiClientInterface interface
 */
export class LocalizationApiClientModel implements LocalizationApiClientInterface {
  private readonly endpoints!: LocalizationApiClientEndpoints
  private readonly mockDelay: number = 0

  constructor(options: LocalizationApiClientOptions) {
    this.endpoints = options.endpoints
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay
    }
  }

  fetchTranslation(namespace: string, key: string): Promise<{ [key: string]: string }> {
    const requestParameters: HttpRequestParamsInterface = {
      requestType: HttpRequestType.get,
      endpoint: this.endpoints.fetchTranslation,
      requiresToken: false,
      payload: {
        namespace,
        key
      } as any,
      mockDelay: this.mockDelay
    }

    return httpClient.request<{ [key: string]: string }>(requestParameters)
  }
}
