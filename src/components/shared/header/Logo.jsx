import { Box } from '@mui/material'
import React from 'react'
// import logocopy from "../../../assets/logocopy.png"
import logo from "../../../assets/logo/amd-header-logo.svg"


function Logo() {
  return (
      <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            id="header-logo-img"
            src={logo}
            alt="AMD Logo"
            style={{ width: "80px", cursor: "pointer" }}
          />
        </Box>
  )
}

export default Logo