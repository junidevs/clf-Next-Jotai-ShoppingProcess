"use client"
import { atomWithStorage } from "jotai/utils"
import { useAtom } from "jotai"
import { Typography } from "@mui/material"

const profileAddressAtom = atomWithStorage("profileAddress", false)
const Profile = () => {
  const [darkMode, setDarkMode] = useAtom(profileAddressAtom)
  return (
    <>
      <Typography color="#fff">
        Welcome to {darkMode ? "dark" : "light"} mode!
      </Typography>
      <button onClick={() => setDarkMode(!darkMode)}>toggle theme</button>
    </>
  )
}
export default Profile
