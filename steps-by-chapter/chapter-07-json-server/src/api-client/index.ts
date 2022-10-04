// file: src/api-client/index.ts

import { ApiClientInterface } from './models'
import { apiMockClient } from './mock'
import { apiLiveClient } from './live'

let env: string = 'mock'
// Note: Vite uses import.meta.env (reference: https://vitejs.dev/guide/env-and-mode.html)
// optional: you can console.log the content of import.meta.env to inspect its values like this: console.log('import.meta.env', JSON.stringify(import.meta.env))
if (import.meta.env && import.meta.env.VITE_API_CLIENT) {
  env = import.meta.env.VITE_API_CLIENT.trim()
}
// return either the live or the mock client
let apiClient: ApiClientInterface
if (env === 'live') {
  apiClient = apiLiveClient
} else {
  // default is always apiMockClient
  apiClient = apiMockClient
}

export { 
  apiClient
}
