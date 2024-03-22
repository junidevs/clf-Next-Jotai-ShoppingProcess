"use client"
import Stack from "@mui/material/Stack"
import { Typography } from "@mui/material"
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"
import AddressForm from "@/components/organisms/AddressForm"

const Profile = () => {
  return (
    <>
      <Stack
        sx={{
          backgroundColor: "#121318",
          alignItems: "center",
          justifyContent: "center",
          p: 5,
          height: "100vh",
        }}
      >
        <Stack
          flexDirection="row"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: "800",
              color: "#fff",
            }}
          >
            Welcome in user profile
          </Typography>
          <RocketLaunchIcon htmlColor="#fff" />
        </Stack>
        <Typography
          sx={{
            mt: 2,
            fontSize: 16,
            fontWeight: "400",
            color: "#fff",
          }}
        >
          Here you are able to set your address before shopping to speedup the
          process !
        </Typography>
        <Stack
          mt={5}
          bgcolor="#fff"
          p={5}
          sx={{
            borderRadius: 2,
          }}
        >
          <AddressForm />
        </Stack>
      </Stack>
    </>
  )
}
export default Profile
