import Form from "@/components/molecules/Form"
import useForm from "@/hooks/useForm"
import { Input } from "@/components/atoms/Input"
import ButtonOrLink from "@/components/atoms/ButtonOrLink"
import useCheckoutAtom from "@/atoms/checkoutAtom/useCheckoutAtom"
import productSchema from "@/utils/schemas/productSchema/productSchema"
import { ChangeEvent, KeyboardEventHandler } from "react"
import { Typography } from "@mui/material"

const ProductIndicatorForm = ({
  handleAddProduct,
}: {
  handleAddProduct: () => void
}) => {
  const { handleSetProduct } = useCheckoutAtom()

  const methods = useForm({
    defaultValues: {},
    schema: productSchema, // we could implement dynamic schema builder based on default values
  })

  const {
    handleSubmit,
    formState,
    formState: { isValid },
    getFieldState,
    register,
    setValue,
  } = methods

  const handleProduct = handleSubmit((data) => {
    // in real life during setting / creating item backend will return uuid / id

    // In general I am aware that generating uuid / id's is not good practice for example for react keys :p
    function generateRandomNumber(): number {
      return Math.floor(Math.random() * 101)
    }

    handleSetProduct({ id: generateRandomNumber(), ...data })
    handleAddProduct()
  })

  // we could also to move outside it to another hook and apply global input handling ( for default cases )
  const getError = (name: keyof Omit<TProduct, "id" | "preDefBackground">) => {
    const { error } = getFieldState(name, formState)
    return error?.message
  }
  const handleBlockNegative: KeyboardEventHandler<HTMLDivElement> = (e) =>
    ["+", "-"].includes(e.key) && e.preventDefault()

  const numberHandlers = (
    name: keyof Omit<TProduct, "id" | "preDefBackground">
  ) => ({
    onKeyDown: handleBlockNegative,
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      const parsedValue = parseFloat(e.target.value)
      setValue(name, Number.isNaN(parsedValue) ? 0 : parsedValue)
    },
  })

  return (
    <Form methods={methods} onSubmit={handleProduct}>
      <Typography
        sx={{
          fontSize: 18,
          mb: 2,
          color: "#fff",
        }}
      >
        Add Product
      </Typography>
      <Input {...register("name")} errorMsg={getError("name")} name="name" />
      <Input
        {...register("price", { valueAsNumber: true })}
        errorMsg={getError("price")}
        name="price"
        {...numberHandlers("price")}
      />
      <Input
        {...register("currency")}
        errorMsg={getError("currency")}
        name="currency"
      />
      <Input
        type="number"
        // solution for zod problem with primitives https://stackoverflow.com/questions/61782355/react-hook-form-always-return-string-type-value
        {...register("releaseDate", { valueAsNumber: true })}
        errorMsg={getError("releaseDate")}
        name="releaseDate"
        {...numberHandlers("releaseDate")}
      />

      <Input
        value="/assets/card/backgrounds/acBackground.svg"
        {...register("bgUrl")}
        errorMsg={getError("bgUrl")}
        name="bgUrl"
      />
      <Input
        value="/assets/card/models/acModel.png"
        {...register("avatarUrl")}
        errorMsg={getError("avatarUrl")}
        name="avatarUrl"
      />
      <Input
        type="checkbox"
        defaultChecked={false}
        {...register("requireDispatch")}
        errorMsg={getError("requireDispatch")}
        name="requireDispatch"
        sx={{
          border: "none",
          "& .MuiInputBase-multiline": {
            backgroundColor: "rgba(0,0,0,0)",
            border: "none",
            m: 0,
            py: 0,
            height: "100% !important",
          },
        }}
        variant="standard"
      />

      <ButtonOrLink
        disabled={!isValid}
        type="submit"
        sx={{
          mt: 2,
          backgroundColor: "#3DBDA7",
          color: "#fff",
        }}
      >
        Add Product
      </ButtonOrLink>
    </Form>
  )
}
export default ProductIndicatorForm
