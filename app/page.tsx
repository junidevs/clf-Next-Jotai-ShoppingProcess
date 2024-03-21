"use client"
import Stack from "@mui/material/Stack"
import RootMenu from "@/components/organisms/RootMenu/RootMenu"
import Card from "@/components/organisms/Card"
import { Typography } from "@mui/material"
import useProducts from "@/hooks/queries/useProducts/useProducts"

const HomePage = () => {
  const { data, isLoading, isFetching, error } = useProducts()
  console.log({ data })

  // if (isLoading || isFetching) return <Loader />
  // if (error) return <Typography>Something went wrong</Typography>
  return (
    <Stack p={5}>
      <RootMenu />

      <Stack mt={5} borderRadius={2} p={3} bgcolor="#121318">
        <Typography
          sx={{
            fontSize: 18,
            color: "#fff",
          }}
        >
          Products
        </Typography>

        <Stack
          mt={10}
          flexDirection="row"
          flexWrap="wrap"
          gap={5}
          justifyContent="center"
        >
          {data?.map((product) => {
            const { id } = product
            return <Card key={id} {...product} />
          })}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default HomePage
