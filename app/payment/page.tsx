"use client"
import Stack from "@mui/material/Stack"
import useAddressAtom from "@/atoms/addressAtom/useAddressAtom"
import usePaymentOption from "@/atoms/paymentAtom/usePaymentAtom"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Typography } from "@mui/material"
import ShippingForm from "@/components/organisms/ShippingForm/ShippingForm"
import PaymentForm from "@/components/organisms/PamentForm/PamentForm"
import useShippingOptionsAtom from "@/atoms/shippingOptionsAtom/useShippingOptionsAtom"
import ButtonOrLink from "@/components/atoms/ButtonOrLink"

const PaymentPage = () => {
  const {
    address: { country },
  } = useAddressAtom()

  const router = useRouter()
  const { paymentOption } = usePaymentOption()
  const { shippingOption } = useShippingOptionsAtom()

  const shippingMap: TShippingMap = {
    Poland: "INPOST",
    USA: "UPS",
  }
  const paymentMap: TPaymentMap & { OTHER: "CRYPTO" } = {
    Poland: "BLIK",
    USA: "VISA",
    OTHER: "CRYPTO",
  }

  if (!country) {
    router.back()
  }
  useEffect(() => {
    country === undefined ? router.back() : undefined
  }, [country, router])

  return (
    <Stack
      sx={{
        gap: 2,
        backgroundColor: "#121318",
        p: 5,
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          gap: 2,
        }}
      >
        <Stack>
          <Typography
            sx={{
              fontSize: 18,
              mb: 2,
              color: "#fff",
            }}
          >
            Select Shipping method
          </Typography>

          <ShippingForm
            defaultOption={country && shippingMap[country]}
            options={["INPOST", "UPS"]}
          />
        </Stack>
        <Stack>
          <Typography
            sx={{
              fontSize: 18,
              mb: 2,
              color: "#fff",
            }}
          >
            Select Payment method
          </Typography>

          <PaymentForm
            defaultOption={paymentMap[country!]}
            options={["BLIK", "VISA", "CRYPTO"]}
          />
        </Stack>
      </Stack>
      <ButtonOrLink
        href="/summary"
        disabled={paymentOption === null || shippingOption === null}
        sx={{
          mt: 2,
          backgroundColor: "#3DBDA7",
          color: "#fff",
        }}
      >
        Summary
      </ButtonOrLink>
    </Stack>
  )
}
export default PaymentPage
