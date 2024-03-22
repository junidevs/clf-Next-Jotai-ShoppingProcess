import { z, ZodType } from "zod"

const addressSchema: ZodType<TAddress> = z.object({
  street: z.string().min(1, { message: "Please define street" }),
  city: z.string().min(1, { message: "Please define city" }),
  country: z.enum(["Poland", "USA"], {
    errorMap: (issue, _ctx) => {
      switch (issue.code) {
        case "invalid_type":
          return { message: "Select only between Poland and USA" }
        case "invalid_enum_value":
          return { message: "Select only between Poland and USA" }
        default:
          return { message: "Wrong country !" }
      }
    },
  }),
})

export default addressSchema
