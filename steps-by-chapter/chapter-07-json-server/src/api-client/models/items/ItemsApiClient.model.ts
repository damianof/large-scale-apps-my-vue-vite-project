// file: src/api-client/models/items/ItemsApiClient.model.ts

import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'

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
    return new Promise<ItemInterface[]>((resolve) => {
      const endpoint = this.endpoints.fetchItems

      // axios options
      const options: AxiosRequestConfig = {
        headers: {
        }
      }

      axios
        .get(endpoint, options)
        .then((response: AxiosResponse) => {
            if (!this.mockDelay) {
              resolve(response.data as ItemInterface[])
            } else {
              setTimeout(() => {
                resolve(response.data as ItemInterface[])
              }, this.mockDelay)
            }
        })
        .catch((error: any) => {
            console.error('ItemsApiClient: HttpClient: Get: error', error)
        })
    })
  }
}
