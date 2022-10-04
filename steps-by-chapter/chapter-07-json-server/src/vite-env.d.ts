/// <reference types="vite/client" />
/// <reference types="vue" />

// types for Vite env variables: 
// (reference: https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript)
interface ImportMetaEnv {
  readonly VITE_API_CLIENT: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
