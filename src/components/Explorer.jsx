import React from "react";
import { Box, Typography, Button } from "@mui/material";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const Explore = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 2,
        py: 1.5,
        borderBottom: "1px solid #ccc",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Explorer
        </Typography>
        <Typography variant="body2">
          Explore a wide range of AMD instances across various cloud service
          providers, with details such as vCPU count, memory, pricing, and region
        </Typography>
      </Box>

      <Button
        variant="outlined"
        startIcon={<FileDownloadOutlinedIcon />}
        sx={{
          textTransform: "none",
          borderRadius: 2,
        }}
      >
        Export
      </Button>
    </Box>
  );
};

export default Explore;
