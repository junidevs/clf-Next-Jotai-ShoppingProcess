import Form from "@/components/molecules/Form"
import useForm from "@/hooks/useForm"
import useAddressAtom from "@/atoms/addressAtom/useAddressAtom"
import addressSchema from "@/utils/schemas/addressSchema/addressSchema"
import { Input } from "@/components/atoms/Input"
import { MenuItem } from "@mui/material"
import ButtonOrLink from "@/components/atoms/ButtonOrLink"

const AddressForm = ({ handleClose }: { handleClose?: () => void }) => {
  const { address, handleSetAddress } = useAddressAtom()

  const methods = useForm({
    defaultValues: address,
    schema: addressSchema, // we could implement dynamic schema builder based on default values
  })

  const {
    handleSubmit,
    formState,
    formState: { isValid },
    getFieldState,
    register,
  } = methods
  const handleAddress = handleSubmit((data) => {
    handleSetAddress(data)
    handleClose?.()
  })

  // we could also to move outside it to another hook and apply global input handling ( for default cases )
  const getError = (name: keyof TAddress) => {
    const { error } = getFieldState(name, formState)
    return error?.message
  }

  return (
    <Form methods={methods} onSubmit={handleAddress}>
      <Input
        {...register("street")}
        errorMsg={getError("street")}
        name="street"
      />
      <Input {...register("city")} errorMsg={getError("city")} name="city" />
      <Input
        {...register("country")}
        errorMsg={getError("country")}
        name="country"
        select
      >
        <MenuItem key="Poland" value="Poland">
          Poland
        </MenuItem>
        <MenuItem key="USA" value="USA">
          USA
        </MenuItem>
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
        Save Address
      </ButtonOrLink>
    </Form>
  )
}
export default AddressForm
