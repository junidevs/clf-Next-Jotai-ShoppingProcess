declare global {
  type ResolverExtractor<T extends (...args: any) => any> = Parameters<T>["1"]
  type TProduct = {
    id: number
    name: string
    price: number
    currency: string
    releaseDate: number
    bgUrl?: string
    avatarUrl?: string
    preDefBackground?: string
  }
}

export {}
