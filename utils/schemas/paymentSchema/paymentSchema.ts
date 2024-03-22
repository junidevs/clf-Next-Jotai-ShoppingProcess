import { z } from "zod"

const shippingSchema = z.object({
  paymentOption: z.enum(["BLIK", "VISA", "CRYPTO"], {
    errorMap: (issue, _ctx) => {
      switch (issue.code) {
        case "invalid_type":
          return { message: 'Select only between "BLIK", "VISA", "CRYPTO"' }
        case "invalid_enum_value":
          return { message: 'Select only between "BLIK", "VISA", "CRYPTO"' }
        default:
          return { message: "Invalid PAYMENT option" }
      }
    },
  }),
})

export default shippingSchema
