import { useQuery } from "@tanstack/react-query"
import getProducts from "@/services/queries/getProducts"

const useProducts = () => {
  return useQuery({
    // we could use something like this to get higher service design abstraction https://github.com/lukemorales/query-key-factory
    queryKey: ["useProducts"],
    queryFn: () => getProducts(),
  })
  // https://docs.github.com/en/rest/using-the-rest-api/using-pagination-in-the-rest-api?apiVersion=2022-11-28
  // here we could create infinite query for fetching more than only first page
}

export default useProducts
