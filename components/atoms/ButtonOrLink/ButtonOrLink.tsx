import { forwardRef, Ref, useMemo } from "react"

import MuiButton, { ButtonProps } from "@mui/material/Button"
import NextLink, { LinkProps as NextLinkProps } from "next/link"
import Loader from "@/components/atoms/Loader"

export type ButtonOrNextLinkProps = {
  isPending?: boolean
  isGrey?: boolean
  target?: string | undefined
  rel?: string
} & ButtonProps

const ButtonOrLink = forwardRef(function ButtonOrNextLink(
  {
    isPending,
    disabled,
    endIcon,
    href,
    sx,
    isGrey,
    children,
    target,
    ...rest
  }: ButtonOrNextLinkProps,
  ref: Ref<HTMLButtonElement>
) {
  const NextLinkProxy = useMemo(
    () =>
      forwardRef<HTMLAnchorElement, Omit<NextLinkProps, "href">>(
        function Link(linkProps, ref) {
          return (
            <NextLink
              target={target}
              ref={ref}
              href={href as string}
              {...linkProps}
            />
          )
        }
      ),
    [href, target]
  )

  return (
    <MuiButton
      ref={ref}
      disabled={isPending || disabled}
      endIcon={isPending ? <Loader color="grey.600" pl={3} /> : endIcon}
      sx={{
        textAlign: "center",
        px: { xs: 6, md: 12 },
        whiteSpace: "nowrap",
        position: "relative",
        ...(isGrey && {
          backgroundColor: "grey.600", // we could implement entire theme to app and then use it like it
          "&:hover": {
            backgroundColor: "grey.700",
          },
        }),
        ...sx,
      }}
      {...rest}
      component={href ? NextLinkProxy : "button"}
    >
      {children}
    </MuiButton>
  )
})

export default ButtonOrLink
