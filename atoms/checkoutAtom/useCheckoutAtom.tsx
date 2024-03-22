import { atomWithStorage } from "jotai/utils"
import { useAtom } from "jotai"

const persistedAtom = atomWithStorage<TProduct[]>("useProductAtom", [])

const useCheckoutAtom = () => {
  const [products, setProducts] = useAtom(persistedAtom)

  const handleSetProduct = (newProduct: TProduct, clb?: () => void) => {
    setProducts((prevProducts) => {
      const productExists = prevProducts.some(
        ({ id: currentProductId }) => currentProductId === newProduct.id
      )

      if (!productExists) {
        return [...prevProducts, newProduct]
      } else {
        return prevProducts
      }
    })
    clb?.()
  }

  const handleRemoveProduct = (productId: TProduct["id"], clb?: () => void) => {
    setProducts((prevProducts) => {
      const filteredProducts = prevProducts.filter(
        ({ id: currentProductId }) => currentProductId !== productId
      )

      clb?.()
      return filteredProducts
    })
  }

  return { products, handleSetProduct, handleRemoveProduct }
}

export default useCheckoutAtom
