import { atomWithStorage } from "jotai/utils"
import { useAtom } from "jotai"

const persistedAtom = atomWithStorage<Partial<TAddress>>("useAddressAtom", {})

const useAddressAtom = () => {
    const [address, setAddress] = useAtom(persistedAtom)

    // in real app we could have few addresses so in result we could create Map with addresses
    const handleSetAddress = (newAddr: TAddress, clb?: () => void) => {
        setAddress((prevAddr) => ({
            ...prevAddr,
            ...newAddr,
        }))
        clb?.()
    }

    return {address, handleSetAddress}
}

export default useAddressAtom
