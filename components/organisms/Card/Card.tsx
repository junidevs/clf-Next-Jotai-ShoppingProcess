import Stack from "@mui/material/Stack"
import Image from "next/image"
import { Fade, Typography } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import useCheckoutAtom from "@/atoms/checkoutAtom/useCheckoutAtom"

const Card = (product: TProduct) => {
  const { products, handleSetProduct } = useCheckoutAtom()
  const {
    id,
    name,
    releaseDate,
    price,
    currency,
    bgUrl,
    avatarUrl,
    preDefBackground,
  } = product
  console.log({ products })
  const handleAddToCard = () => {
    handleSetProduct(product)
  }

  const productAdded = products.some(({ id: addedId }) => addedId === id)
  return (
    <Stack
      minWidth={"48%"}
      maxWidth="90vw"
      minHeight={350}
      height="auto"
      sx={{
        position: "relative",
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <Stack
        sx={{
          position: "relative",
          top: "20%",
          left: "5%",
          backgroundColor: "#FAA525",
          borderRadius: 1,
          p: 1,
          width: 32,
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "800",
            fontSize: 12,
          }}
        >
          {releaseDate}{" "}
        </Typography>
      </Stack>
      <Stack
        sx={{
          position: "absolute",
          top: "35%",
          left: "5%",
          borderRadius: 1,
          zIndex: 3,
        }}
      >
        <Typography
          sx={{
            fontWeight: "800",
            fontSize: 40,
            color: "#fff",
            textStroke: "1px rgba(0, 0, 0, 0)",
          }}
        >
          {name}
        </Typography>
      </Stack>

      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          bottom: "20%",
          left: "5%",
          zIndex: 3,
          width: "50%",
          background: "rgba(0,0,0,0.5)",
          p: 2,
          borderRadius: 2,
          boxShadow: "1px 1px 5px 1px #000",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            textStroke: "3px rgba(0, 0, 0, 0)",
            fontSize: 15,
          }}
        >
          {currency}
          {price}
        </Typography>

        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            backgroundColor: productAdded ? "#969696" : "#3DBDA7",
            p: 1,
            borderRadius: 2,
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={handleAddToCard}
        >
          <ShoppingCartIcon htmlColor="#fff" />
          <Typography sx={{ color: "#fff", fontSize: 16 }}>
            {productAdded ? "Added" : "Add to card"}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          height: 320,
          backgroundImage: `url(${bgUrl}), ${preDefBackground}`,
          backgroundBlendMode: "screen",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        boxShadow="2px -15px 32px 1px #000 inset"
      />

      <Fade
        in
        timeout={{ enter: 450, exit: 300 }}
        easing={{ enter: "linear", exit: "linear" }}
      >
        <Stack position="absolute" bottom={0} right={0}>
          <Image alt="avatar" width={330} height={390} src={avatarUrl!} />
        </Stack>
      </Fade>
    </Stack>
  )
}

export default Card
