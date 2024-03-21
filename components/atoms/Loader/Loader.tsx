import { CircularProgress, Typography, TypographyProps } from "@mui/material"
import Stack from "@mui/material/Stack"

type TLoaderProps = { altText?: string } & TypographyProps
const Loader = ({ altText, ...restStyles }: TLoaderProps) => {
  return (
    <Stack
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
      pt={20}
      gap={1}
    >
      <Typography color="#fff" {...restStyles}>
        {altText}
      </Typography>
      <CircularProgress size={50} />
    </Stack>
  )
}

export default Loader
