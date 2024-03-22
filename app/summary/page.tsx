"use client"
import Stack from "@mui/material/Stack"
import Image from "next/image"
import { Divider, Typography } from "@mui/material"
import useCheckoutAtom from "@/atoms/checkoutAtom/useCheckoutAtom"
import useAddressAtom from "@/atoms/addressAtom/useAddressAtom"
import useShippingOptionsAtom from "@/atoms/shippingOptionsAtom/useShippingOptionsAtom"
import usePaymentOption from "@/atoms/paymentAtom/usePaymentAtom"
import ButtonOrLink from "@/components/atoms/ButtonOrLink"

const SummaryPage = () => {
  const { products } = useCheckoutAtom()
  const { address } = useAddressAtom()
  const { shippingOption } = useShippingOptionsAtom()
  const { paymentOption } = usePaymentOption()
  console.log({ address })
  return (
    <Stack
      sx={{
        gap: 2,
        backgroundColor: "#121318",
        p: 5,
        borderRadius: 2,
        boxShadow: "1px 1px 12px 1px #3DBDA7",
      }}
    >
      <Typography
        sx={{
          fontSize: 18,
          color: "#fff",
        }}
      >
        Your order:
      </Typography>
      <Stack
        sx={{
          background: "#121318",
          height: "auto",
          width: "auto",
          minWidth: "50vw",
          borderRadius: 3,
          p: 5,
          color: "#fff",
          gap: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            color: "#fff",
          }}
        >
          Products:
        </Typography>
        {products.length > 0 ? (
          products.map(
            ({
              id,
              name,
              price,
              currency,
              releaseDate,
              avatarUrl,
              requireDispatch,
            }) => {
              return (
                <Stack key={id} flexDirection="row" gap={1} alignItems="center">
                  <Stack
                    sx={{
                      width: "60px",
                      height: "60px",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#3DBDA7",
                      borderRadius: "50px",
                      boxShadow: "1px 1px 12px 1px #067D71",
                    }}
                  >
                    <Image
                      alt="avatar"
                      width={50}
                      height={50}
                      src={avatarUrl!}
                    />
                  </Stack>
                  <Typography>{name}</Typography>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    textAlign="center"
                    flexItem
                    sx={{ background: "#067D71", borderWidth: "1px" }}
                  />
                  <pre>[ {releaseDate} ]</pre>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    textAlign="center"
                    flexItem
                    sx={{ background: "#067D71", borderWidth: "1px" }}
                  />
                  <Typography>
                    Price: {currency}
                    {price}
                  </Typography>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    textAlign="center"
                    flexItem
                    sx={{ background: "#067D71", borderWidth: "1px" }}
                  />
                  <Typography>
                    {requireDispatch
                      ? "Product requires shipping"
                      : "Product not requires shipping"}
                  </Typography>
                </Stack>
              )
            }
          )
        ) : (
          <Typography
            p={5}
            sx={{
              fontSize: 16,
              fontWeight: "800",
              color: "#fff",
            }}
          >
            No products
          </Typography>
        )}

        <Stack sx={{ mt: 5 }}>
          <Typography
            sx={{
              fontSize: 14,
              color: "#fff",
              mb: 1,
            }}
          >
            Selected address to delivery:
          </Typography>

          <Typography
            sx={{
              fontSize: 12,
              color: "#fff",
            }}
          >
            Street: {address.street}
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              color: "#fff",
            }}
          >
            City: {address.city}
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              color: "#fff",
              mb: 2,
            }}
          >
            Country: {address.country}
          </Typography>
        </Stack>
        <Typography>Selected shipping option: {shippingOption}</Typography>
        <Typography>Selected payment option: {paymentOption}</Typography>
      </Stack>
      <ButtonOrLink
        sx={{
          mt: 2,
          backgroundColor: "#3DBDA7",
          color: "#fff",
        }}
      >
        Order
      </ButtonOrLink>
    </Stack>
  )
}

export default SummaryPage
