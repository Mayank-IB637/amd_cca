import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const CostAdviceGuide = () => {
  return (
    <Box mt={-2.5} p={2}>
      {/* <Typography variant="h5" gutterBottom>
        Cost Advice
      </Typography>
      <Divider /> */}

      <Typography variant="body1" mt={2}>
        The Cost Advice feature in the CCA application helps you evaluate potential cost savings by comparing your current instances with recommended AMD instances. This guide will walk you through accessing and using the Cost Advice feature to optimize your cloud costs.
      </Typography>

      <Typography variant="h6" mt={3} ml={2}>
        
         { <b>Accessing and Using Cost Advice:</b>}
      </Typography>

      <Box component="ol" sx={{ pl: 4 }} type="1">
        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography><b>Save Your Portfolio:</b> Ensure that your portfolio, including all instance details, is saved before accessing the Cost Advice feature.</Typography>
        </Box>

        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography><b>Navigate to Portfolio Section:</b> Go to the Portfolio section of the application.</Typography>
        </Box>

        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography><b>Select Portfolio Account:</b> Click on the desired portfolio account from which you want to get cost advice.</Typography>
        </Box>

        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography><b>Access Cost Advice:</b> Click on <b>"Cost Advice"</b> to view recommendations.</Typography>
        </Box>

        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography>Once accessed, the table displays <b>Current Instances</b> and <b>Recommended Instances</b> categorized for optimization.</Typography>
        </Box>
      </Box>

      <Typography variant="h6" mt={4} ml={2}>
       
       { <b> Recommendation Categories:</b>}

      </Typography>

      <Box component="ol" sx={{ pl: 4 }} type="1">
        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography><b>Hourly Cost Optimization:</b> Recommendations with older-generation AMD processors to reduce hourly costs.</Typography>
        </Box>

        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography><b>Modernize:</b> Recommendations using latest-generation AMD processors for better performance and cost.</Typography>
        </Box>

        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography><b>Modernize & Downsize:</b> Latest AMD processors with reduced instance sizes for improved cost and performance.</Typography>
        </Box>

        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography>
            The table also displays: <b>UUID / Instance Name, Cloud Provider, Region, Quantity, Pricing Model</b>, and <b>Remark</b>.
          </Typography>
          <Typography mt={1}><b>Instance details include:</b></Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <li><Typography>Instance type</Typography></li>
            <li><Typography>vCPU(s): Number of CPUs</Typography></li>
            <li><Typography>Monthly cost ($)</Typography></li>
            <li><Typography>Annual cost ($)</Typography></li>
            <li><Typography>Annual savings ($)</Typography></li>
            <li><Typography>Savings(%): Displays percentage of savings</Typography></li>
            <li><Typography>Performance Improvement*: Factor of performance increase for recommended instance</Typography></li>
          </Box>
        </Box>
      </Box>

      <Box sx={{ pl: 3 }}>
        <Typography mt={1}><strong>Note:</strong> "EIA is recommended" links to EIA Application for more info.</Typography>
        <Typography mt={1}><strong>Note:</strong> "Upcoming support" means recommendations will be available soon.</Typography>
      </Box>

      <Typography variant="h6" mt={4} ml={2} mb={2}>
       { <b>Filter:</b>}
      </Typography>
      <Typography sx={{ pl: 3 }}>Filter by savings type: Hourly Cost Optimization, Modernize, or Modernize & Downsize.</Typography>

      <Typography variant="h6" mt={4} ml={2} mb ={2}>
         { <b>Export:</b>}
      </Typography>
      <Typography sx={{ pl: 4 }}>Click <b>"Export"</b> to download an Excel report of recommendations and savings.</Typography>
      <Typography sx={{ pl: 4 }}>Click <b>"Close"</b> to exit the screen.</Typography>
    </Box>
  );
};

export default CostAdviceGuide;
