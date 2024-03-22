"use client"
import useCheckoutAtom from "@/atoms/checkoutAtom/useCheckoutAtom"
import Stack from "@mui/material/Stack"
import { Divider, Modal, Typography } from "@mui/material"
import Image from "next/image"
import DeleteIcon from "@mui/icons-material/Delete"
import ButtonOrLink from "@/components/atoms/ButtonOrLink"
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"
import AddIcon from "@mui/icons-material/Add"
import { useState } from "react"
import ProductIndicatorForm from "@/components/organisms/ProductIndicatorForm"
import useAddressAtom from "@/atoms/addressAtom/useAddressAtom"
import AddressForm from "@/components/organisms/AddressForm"
import { useRouter } from "next/navigation"

const modalStyles = {
  backgroundColor: "#2A2727",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  boxShadow: " 0 3px 6px 0 rgba(0, 0, 0, 0.16)",
  px: 8,
  py: 10,
  borderRadius: "8px",
}
const CheckoutPage = () => {
  const [openAddProductModal, setOpenAddProductModal] = useState(false)
  const [openAddAddressModal, setOpenAddAddressModal] = useState(false)
  const { products, handleRemoveProduct } = useCheckoutAtom()
  const { address } = useAddressAtom()
  const router = useRouter()

  const handleAddProduct = () => {
    setOpenAddProductModal((open) => !open)
  }
  const handleAddressModal = () => {
    const isEmptyAddress = Object.keys(address).length === 0
    return isEmptyAddress
      ? setOpenAddAddressModal(true)
      : router.push("/payment")
  }

  console.log({ products })
  return (
    <>
      {openAddProductModal && (
        <Modal
          open={openAddProductModal}
          onClose={handleAddProduct}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Stack sx={modalStyles}>
            <ProductIndicatorForm {...{ handleAddProduct }} />
          </Stack>
        </Modal>
      )}

      {openAddAddressModal && (
        <Modal
          open={openAddAddressModal}
          onClose={() => setOpenAddAddressModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Stack sx={modalStyles}>
            <Typography>Add address</Typography>
            <AddressForm handleClose={() => setOpenAddAddressModal(false)} />
          </Stack>
        </Modal>
      )}

      <Stack
        sx={{
          background: "#121318",
          height: "auto",
          width: "auto",
          minWidth: "50vw",
          borderRadius: 3,
          p: 5,
          color: "#fff",
          gap: 3,
        }}
      >
        {products.length > 0 ? (
          products.map(
            ({
              id,
              name,
              price,
              currency,
              releaseDate,
              avatarUrl,
              requireDispatch,
            }) => {
              return (
                <Stack key={id} flexDirection="row" gap={1} alignItems="center">
                  <Stack
                    sx={{
                      width: "60px",
                      height: "60px",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#3DBDA7",
                      borderRadius: "50px",
                      boxShadow: "1px 1px 12px 1px #067D71",
                    }}
                  >
                    <Image
                      alt="avatar"
                      width={50}
                      height={50}
                      src={avatarUrl!}
                    />
                  </Stack>
                  <Typography>{name}</Typography>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    textAlign="center"
                    flexItem
                    sx={{ background: "#067D71", borderWidth: "1px" }}
                  />
                  <pre>[ {releaseDate} ]</pre>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    textAlign="center"
                    flexItem
                    sx={{ background: "#067D71", borderWidth: "1px" }}
                  />
                  <Typography>
                    Price: {currency}
                    {price}
                  </Typography>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    textAlign="center"
                    flexItem
                    sx={{ background: "#067D71", borderWidth: "1px" }}
                  />
                  <Typography>
                    {requireDispatch
                      ? "Product requires shipping"
                      : "Product not requires shipping"}
                  </Typography>
                  <ButtonOrLink
                    onClick={() => handleRemoveProduct(id)}
                    variant="contained"
                    endIcon={<DeleteIcon />}
                    sx={{
                      ml: "auto",
                      color: "#067D71",
                      backgroundColor: "#000",
                      "&:hover": { backgroundColor: "#fff" },
                    }}
                  >
                    Remove
                  </ButtonOrLink>
                </Stack>
              )
            }
          )
        ) : (
          <Typography
            p={5}
            sx={{
              fontSize: 16,
              fontWeight: "800",
              color: "#fff",
            }}
          >
            No products
          </Typography>
        )}

        <Stack flexDirection="row" justifyContent="flex-end" gap={1}>
          <ButtonOrLink
            onClick={handleAddProduct}
            sx={{
              ml: "auto",
              color: "#000",
              backgroundColor: "#067D71",
              "&:hover": { backgroundColor: "#fff" },
            }}
            endIcon={<AddIcon htmlColor="#fff" fontSize={"large"} />}
          >
            Add Product
          </ButtonOrLink>
          <ButtonOrLink
            onClick={handleAddressModal}
            sx={{
              color: "#000",
              backgroundColor: "#067D71",
              "&:hover": { backgroundColor: "#fff" },
            }}
            endIcon={<RocketLaunchIcon htmlColor="#fff" fontSize={"large"} />}
          >
            Go to payment{" "}
          </ButtonOrLink>
        </Stack>
      </Stack>
    </>
  )
}

export default CheckoutPage
