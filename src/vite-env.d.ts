/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_AUTHOR: string
  // Add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}