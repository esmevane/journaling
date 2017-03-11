import Memory from "./memory"

export interface Store {
  get(key: string): any
  all(): any[]
  put(key: string, value: any): void
  remove(key: string): void
  flush(): void
}

const strategies = { Memory }
export default strategies
