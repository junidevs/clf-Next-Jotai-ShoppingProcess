import { z } from "zod"

const shippingSchema = z.object({
  shippingOption: z.enum(["UPS", "INPOST"], {
    errorMap: (issue, _ctx) => {
      switch (issue.code) {
        case "invalid_type":
          return { message: "Select only between UPS and INPOST" }
        case "invalid_enum_value":
          return { message: "Select only between UPS and INPOST" }
        default:
          return { message: "Invalid shipping option" }
      }
    },
  }),
})

export default shippingSchema
