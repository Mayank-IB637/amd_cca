import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const ExplorerHeader = () => {
    const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #ccc",
        fontSize: "24px",

        // backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >

      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ 
          fontWeight: "bold",
          fontSize: "24px",
           }}>
          Explorer
        </Typography>
        <Typography variant="body2" sx={{
          fontSize: "16px",
        }}>
          Explore a wide range of AMD instances across various cloud service
          providers, with details such as vCPU count, memory, pricing, and region
        </Typography>
      </Box>


      <Button
        variant="outlined"
        startIcon={<FileDownloadOutlinedIcon />}
        sx={{
          textTransform: "none",
          ml: 50, 
        }}
      >
        Export
      </Button>
    </Box>
  );
};

export default ExplorerHeader;
