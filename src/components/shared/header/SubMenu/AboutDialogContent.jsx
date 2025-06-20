//  HelpDialogContent
import React from "react";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; 
import PropTypes from "prop-types";
export default function AboutDialogContent({ onClose }) {
  return (
    <Box sx={{ p: 0 }} gap={0} color={"primary.main"}>
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          About Cloud Cost Advisor
        </Typography>

        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <Box p={2} overflow={"auto"} maxHeight="40vh">
        {/* Intro Paragraph */}
        <Typography mt={0.5}>
          Get real-time insights into estimated cost savings when switching to cloud instances powered by AMD within the same Cloud Service Provider(CSP).
        </Typography>
      </Box>
    </Box>
  );
}
AboutDialogContent.propTypes = {
  onClose: PropTypes.func.isRequired,
};

