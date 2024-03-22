import { atomWithStorage } from "jotai/utils"
import { useAtom } from "jotai"

const persistedAtom = atomWithStorage<TPaymentMethods | null>(
  "usePaymentOption",
  null
)

const usePaymentOption = () => {
  const [paymentOption, setPaymentOption] = useAtom(persistedAtom)

  const handleSetPaymentOption = (
    payment: TPaymentMethods,
    clb?: () => void
  ) => {
    setPaymentOption(payment)
    clb?.()
  }

  return { paymentOption, handleSetPaymentOption }
}

export default usePaymentOption
