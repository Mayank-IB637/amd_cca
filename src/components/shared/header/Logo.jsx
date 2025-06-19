import { Box } from '@mui/material'
import React from 'react'
// import logocopy from "../../../assets/logocopy.png"


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
            src="/logo/amd-header-logo.svg"
            alt="AMD Logo"
            style={{ width: "80px", cursor: "pointer" }}
          />
        </Box>
  )
}

export default Logo