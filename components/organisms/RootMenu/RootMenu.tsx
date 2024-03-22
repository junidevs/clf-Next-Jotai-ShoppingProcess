"use client"

import { MouseEvent, useState } from "react"
import {
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material"
import Stack from "@mui/material/Stack"
import Image from "next/image"
import { useRouter } from "next/navigation"
import StoreIcon from "@mui/icons-material/Store"
import useCheckoutAtom from "@/atoms/checkoutAtom/useCheckoutAtom"

const RootMenu = () => {
  const settings = ["profile"]
  const router = useRouter()
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const { products } = useCheckoutAtom()
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = (option: string) => {
    setAnchorElUser(null)
    router.push(option)
  }

  return (
    <Stack
      p={1}
      px={3}
      borderRadius={1}
      bgcolor="#121318"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
    >
      <Stack flexDirection="row" gap={1} alignItems="center">
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            "&::first-letter": {
              fontSize: "2.5rem",
              color: "#05EEF4",
            },
          }}
        >
          CLF - SHOP
        </Typography>
      </Stack>

      <Stack flexDirection="row" gap={2}>
        <Tooltip title="Go to checkout">
          <IconButton onClick={() => router.push("/checkout")} sx={{ p: 0 }}>
            <Badge color="secondary" badgeContent={products.length} max={999}>
              <StoreIcon htmlColor="#fff" fontSize="large" />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Open menu">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Badge color="secondary" badgeContent={1000} max={999}>
              <Image
                alt="D"
                width={40}
                height={40}
                style={{ borderRadius: "20px" }}
                src={"/assets/card/avatars/avatar.svg"}
              />
            </Badge>
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          keepMounted
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((option) => (
            <MenuItem key={option} onClick={() => handleCloseUserMenu(option)}>
              <Typography textAlign="center">{option}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Stack>
    </Stack>
  )
}

export default RootMenu
