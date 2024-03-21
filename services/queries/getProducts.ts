import { client } from "@/services/client"

const getProducts = async () => {
  const { data } = await client.get<TProduct[]>(`/products`, {})
  return data
}

export default getProducts
