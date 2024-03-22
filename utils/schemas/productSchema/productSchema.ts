import { z, ZodType } from "zod"

const productSchema: ZodType<Omit<TProduct, "id" | "preDefBackground">> = //Pick<TProduct, "name" | "price" | "requireDispatch">
  z.object({
    name: z
      .string()
      .min(1, { message: "Please define product name" })
      .max(20, { message: "Max 20 characters" }),
    price: z.number().min(1, { message: "Please define product price" }),
    currency: z.string(),
    releaseDate: z.number(),
    // in here I just want to get the good looking view :p so I will set image url
    bgUrl: z.string().min(1, { message: "Please define bgURL" }),
    avatarUrl: z.string().min(1, { message: "Please define avatarUrl" }),
    requireDispatch: z.boolean(),
  })

export default productSchema
