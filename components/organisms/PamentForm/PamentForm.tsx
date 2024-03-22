import Form from "@/components/molecules/Form"
import useForm from "@/hooks/useForm"
import { Input } from "@/components/atoms/Input"
import ButtonOrLink from "@/components/atoms/ButtonOrLink"

import { MenuItem } from "@mui/material"
import usePaymentOption from "@/atoms/paymentAtom/usePaymentAtom"

import paymentSchema from "@/utils/schemas/paymentSchema/paymentSchema"

const PaymentForm = ({
  options,
  defaultOption,
}: {
  defaultOption: TPaymentMethods
  options: TPaymentMethods[]
}) => {
  const { handleSetPaymentOption } = usePaymentOption()

  const methods = useForm({
    defaultValues: {},
    schema: paymentSchema, // we could implement dynamic schema builder based on default values
  })

  const {
    handleSubmit,
    formState,
    formState: { isValid },
    getFieldState,
    register,
  } = methods

  const handleProduct = handleSubmit(({ paymentOption }) => {
    handleSetPaymentOption(paymentOption)
  })

  // we could also to move outside it to another hook and apply global input handling ( for default cases )
  const getError = (name: "paymentOption") => {
    const { error } = getFieldState(name, formState)
    return error?.message
  }

  return (
    <Form methods={methods} onSubmit={handleProduct}>
      <Input
        label={"Select preffered payment option"}
        {...register("paymentOption")}
        errorMsg={getError("paymentOption")}
        name="paymentOption"
        select
      >
        <MenuItem key={defaultOption} value={defaultOption}>
          Recommended {defaultOption}
        </MenuItem>
        {options
          .filter((option) => option !== defaultOption)
          .map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
      </Input>

      <ButtonOrLink
        disabled={!isValid}
        type="submit"
        sx={{
          mt: 2,
          backgroundColor: "#3DBDA7",
          color: "#fff",
        }}
      >
        Select payment method
      </ButtonOrLink>
    </Form>
  )
}
export default PaymentForm
