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
    requireDispatch: boolean
  }
  type TAddress = {
    street: string
    city: string
    country: "Poland" | "USA"
  }

  type TShippingMap = {
    [country in TAddress["country"]]: ShippingService
  }

  type TPaymentMap = {
    [country in TAddress["country"]]: TPaymentMethods
  }

  type TShippingMethods = "UPS" | "INPOST"

  type TPaymentMethods = "BLIK" | "VISA" | "CRYPTO"

  type ReturnPromiseTypes<T extends Promise> = Awaited<ReturnType<T>>
}

export {}
