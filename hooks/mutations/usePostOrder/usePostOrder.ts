import { useMutation } from "@tanstack/react-query"

import { AxiosError } from "axios"

import { postOrder } from "@/services/mutations/postOrder"

const usePostOrder = () => {
  return useMutation<
    ReturnPromiseTypes<typeof postOrder>,
    AxiosError,
    Parameters<typeof postOrder>[0]
  >({
    mutationFn: postOrder,
  })
}

export default usePostOrder
