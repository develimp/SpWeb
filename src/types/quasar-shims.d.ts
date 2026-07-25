/* eslint-disable no-unused-vars */

declare module '#q-app/wrappers' {
  import type { App } from 'vue'

  export interface BootParams {
    app: App
  }

  export type BootCallback = (params: BootParams) => void | Promise<void>
  export type RouterCallback = (params: BootParams) => void | Promise<void>

  export function defineBoot(callback: BootCallback): BootCallback
  export function defineRouter(callback: RouterCallback): RouterCallback
}
