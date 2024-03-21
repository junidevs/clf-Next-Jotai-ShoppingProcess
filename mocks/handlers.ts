import { http } from "msw"

import { getProducts } from "@/mocks/responses/getProducts"

const { get, post } = http
export type RestResponseResolver = ResolverExtractor<typeof get>

const createEndpoint = (pathname: string) =>
  `${process.env.NEXT_PUBLIC_API_URL}/${pathname}`

export const handlers = [get(createEndpoint("products"), getProducts)]
