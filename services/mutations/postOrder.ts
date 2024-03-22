import axios from "axios"

type TPostOrder = {
  products: TProduct[]
  address: Partial<TAddress>
  shippingOption: Partial<TShippingMethods | null>
  paymentOption: TPaymentMethods | null
}
const headers = {
  "Content-Type": "application/json",
  Authorization: "JWT fefege...",
}
const options = {
  headers,
  mode: "cors",
}

export const postOrder = async (params: TPostOrder) => {
  const { data } = await axios.post(
    "https://eo8jtne5038u1ak.m.pipedream.net",
    {
      data: params,
    },
    {
      ...options,
    }
  )
  return data
}
