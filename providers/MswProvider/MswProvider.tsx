import { ComponentProps, createContext, useEffect, useState } from "react"
import Loader from "@/components/atoms/Loader"

const { Provider } = createContext("")

type TMswProvider = Omit<ComponentProps<typeof Provider>, "value">

const MswProvider = ({ children }: TMswProvider) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
      import("@/mocks/browser")
        .then(({ worker }) => worker.start())
        .then(() => setLoaded(true))
    } else {
      setLoaded(true)
    }
  }, [])

  return (
    <Provider value={""}>
      {loaded ? children : <Loader altText="Loading..." fontSize={18} />}
    </Provider>
  )
}

export default MswProvider
