"use client"
import { ElementType, memo, ReactNode, useMemo } from "react"
import QueryClientWrapper from "@/providers/QueryClientProvider"
import MswProvider from "@/providers/MswProvider"
import { Provider } from "jotai"

type AppWrapperProps = {
  children: ReactNode
}

type ElementTypeWithChildren = ElementType<{ children: ReactNode }>

const combineComponents = (
  ...components: ElementTypeWithChildren[]
): ElementTypeWithChildren => {
  return components.reduce(
    (AccComponent, CurrentComponent) => {
      return function CombinedComponent({ children }) {
        return (
          <AccComponent>
            <CurrentComponent>{children}</CurrentComponent>
          </AccComponent>
        )
      }
    },
    ({ children }) => children
  )
}

const GlobalWrapper = ({ children }: AppWrapperProps) => {
  const AppProvider = useMemo(
    () =>
      combineComponents(
        (props) => <QueryClientWrapper {...props} />,
        (props) => <MswProvider {...props} />,
        (props) => <Provider {...props} />
      ),
    []
  )

  return <AppProvider>{children}</AppProvider>
}

export default memo(GlobalWrapper)
