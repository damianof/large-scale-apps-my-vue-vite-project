// file: src/api-client/models/items/ItemsApiClient.model.ts

import { httpClient, HttpRequestParamsInterface, HttpRequestType } from '@/http-client'

import { ItemsApiClientOptions, ItemsApiClientEndpoints } from './ItemsApiClientOptions.interface'
import { ItemsApiClientInterface } from './ItemsApiClient.interface'
import { ItemInterface } from '@/models'

/**
 * @Name ItemsApiClientModel
 * @description
 * Implements the ItemsApiClientInterface interface
 */
export class ItemsApiClientModel implements ItemsApiClientInterface {
  private readonly endpoints!: ItemsApiClientEndpoints
  private readonly mockDelay: number = 0

  constructor(options: ItemsApiClientOptions) {
    this.endpoints = options.endpoints
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay
    }
  }

  fetchItems(): Promise<ItemInterface[]> {
    const requestParameters: HttpRequestParamsInterface = {
      requestType: HttpRequestType.get,
      endpoint: this.endpoints.fetchItems,
      requiresToken: false,
      mockDelay: this.mockDelay
    }

    return httpClient.request<ItemInterface[]>(requestParameters)
  }
}
