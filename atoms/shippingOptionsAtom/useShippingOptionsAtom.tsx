import { atomWithStorage } from "jotai/utils"
import { useAtom } from "jotai"

const persistedAtom = atomWithStorage<Partial<TShippingMethods | null>>(
  "useShippingOptionsAtom",
  null
)

const useShippingOptionsAtom = () => {
  const [shippingOption, setShippingOption] = useAtom(persistedAtom)

  const handleSetShippingOption = (
    shippingOption: TShippingMethods,
    clb?: () => void
  ) => {
    setShippingOption(shippingOption)
    clb?.()
  }

  return { shippingOption, handleSetShippingOption }
}

export default useShippingOptionsAtom
