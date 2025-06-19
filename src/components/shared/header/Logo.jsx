import { Box } from '@mui/material'
import React from 'react'
import logo from "../../../assets/logo/amd-header-logo.svg"
import { useNavigate } from 'react-router-dom'

function Logo() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
      onClick={handleLogoClick}
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