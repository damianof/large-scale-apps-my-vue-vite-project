// file: src/http-client/index.ts

import { HttpClientInterface } from './models/HttpClient.interface'
import { config } from '@/config'

import { HttpClientAxios } from './models/HttpClient.axios'
import { HttpClientFetch } from './models/HttpClient.fetch'

// export instance of HttpClientInterface (by default is fetch)
const clientType = config.httpClient.clientType
let httpClient: HttpClientInterface = new HttpClientFetch()

// if you'd like to use axios, set "clientType": "axios" within the config files --- within "httpClient" object
if (clientType === 'fetch') {
  httpClient = new HttpClientFetch()
} else if (clientType === 'axios') {
  httpClient = new HttpClientAxios()
}

export { httpClient }

// also export all our interfaces/models/enums
export * from './models'
