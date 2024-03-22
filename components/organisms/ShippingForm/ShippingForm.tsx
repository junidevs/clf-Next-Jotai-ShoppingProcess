import Form from "@/components/molecules/Form"
import useForm from "@/hooks/useForm"
import { Input } from "@/components/atoms/Input"
import ButtonOrLink from "@/components/atoms/ButtonOrLink"

import { MenuItem } from "@mui/material"
import shippingSchema from "@/utils/schemas/shippingSchema/shippingSchema"
import useShippingOptionsAtom from "@/atoms/shippingOptionsAtom/useShippingOptionsAtom"

const ShippingForm = ({
  options,
  defaultOption,
}: {
  defaultOption: TShippingMethods
  options: TShippingMethods[]
}) => {
  const { handleSetShippingOption } = useShippingOptionsAtom()

  const methods = useForm({
    defaultValues: {},
    schema: shippingSchema, // we could implement dynamic schema builder based on default values
  })

  const {
    handleSubmit,
    formState,
    formState: { isValid },
    getFieldState,
    register,
  } = methods

  const handleProduct = handleSubmit(({ shippingOption }) => {
    handleSetShippingOption(shippingOption)
  })

  // we could also to move outside it to another hook and apply global input handling ( for default cases )
  const getError = (name: "shippingOption") => {
    const { error } = getFieldState(name, formState)
    return error?.message
  }

  return (
    <Form methods={methods} onSubmit={handleProduct}>
      <Input
        label={"Select preffered shipping option"}
        {...register("shippingOption")}
        errorMsg={getError("shippingOption")}
        name="shippingOption"
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
        Select method
      </ButtonOrLink>
    </Form>
  )
}
export default ShippingForm
