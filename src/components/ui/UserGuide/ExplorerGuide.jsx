import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

const ExplorerGuide = () => {
  return (
    <Box p={1}>

      <Typography variant="body1" gutterBottom>
        The Explorer section allows users to investigate a variety of AMD instances across different cloud service providers.
        It provides detailed information about each instance, including:
      </Typography>

      <List dense sx={{ pl: 2 }}>
        {[
          "Region",
          "Generation",
          "Instance Type",
          "vCPU Count",
          "Memory (GiB)",
          "Ondemand Price ($)",
          "Reserved Price ($)",
          "Spot Price ($)",
        ].map((item) => (
          <ListItem key={item} sx={{ py: 0 }}>
            <ListItemText primary={`- ${item}`} />
          </ListItem>
        ))}
      </List>

      <Box mt={3}>
        <Typography variant="h6" fontWeight={600}>
          Exploring Instances
        </Typography>

        <Box mt={1.5}>
          <Typography fontWeight={600}>1. Apply Filters:</Typography>
          <Typography sx={{ pl: 2 }}>
            - <strong>Service Provider:</strong> Select the Cloud Service Provider.
          </Typography>
          <Typography sx={{ pl: 2 }}>
            - <strong>Region:</strong> Select the geographical region where the instance is available.
          </Typography>
        </Box>

        <Box mt={2}>
          <Typography fontWeight={600}>2. View Total Count:</Typography>
          <Typography sx={{ pl: 2 }}>
            The total number of available instances based on the selected criteria and filters will be displayed.
          </Typography>
        </Box>

        <Box mt={2}>
          <Typography fontWeight={600}>3. Search:</Typography>
          <Typography sx={{ pl: 2 }}>
            Use the search bar to quickly locate specific instances or details by entering relevant keywords.
          </Typography>
        </Box>

        <Box mt={2}>
          <Typography fontWeight={600}>4. Export Data:</Typography>
          <Typography sx={{ pl: 2 }}>
            Click <strong>“Export”</strong> to download the instance details in an Excel format for offline analysis or reporting.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ExplorerGuide;
