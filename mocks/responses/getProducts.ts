import { HttpResponse } from "msw"
import type { RestResponseResolver } from "@/mocks/handlers"

export const getProducts: RestResponseResolver = () =>
  HttpResponse.json(getProductsResponse)

export const getProductsResponse: TProduct[] = [
  {
    id: 1,
    name: "Assassin’s creed valhalla",
    price: 28,
    currency: "$",
    releaseDate: 2024,
    bgUrl: "/assets/card/backgrounds/acBackground.svg",
    avatarUrl: "/assets/card/models/acModel.png",
    preDefBackground:
      "linear-gradient(90deg, rgba(6, 125, 113, 0.5) 0%, rgba(7, 27, 36, 1) 0%, rgba(250, 165, 37, 0.3) 80%)",
  },
  {
    id: 2,
    name: "Ghost of Tsushima",
    price: 15,
    currency: "$",
    releaseDate: 2023,
    bgUrl: "/assets/card/backgrounds/gotBackground.svg",
    avatarUrl: "/assets/card/models/gotModel.png",
    preDefBackground:
      "linear-gradient(90deg, rgba(6, 125, 113, 0.5) 0%, rgba(7, 27, 36, 1) 0%, rgba(250, 165, 37, 0.3) 80%)",
  },
]
