import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const CloudUsageGuide = () => {
  return (
    <Box mt={-2.5} p={2}>
      {/* <Typography variant="h5" gutterBottom>
        Cloud Usage Reports
      </Typography>
      <Divider /> */}

      <Typography variant="body1" mt={2}>
        Welcome to the Cloud Usage Reports section of the CCA application. This feature allows you to integrate your cloud portfolio accounts directly by inputting your credentials to fetch existing cloud instance details.
      </Typography>

      <Typography variant="h6" mt={3} ml={2}>
        Steps to Add Accounts with Credentials
      </Typography>

      <Box component="ol" sx={{ pl: 4 }} type="1">
        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography>
            <b>Navigate to Cloud Usage Reports:</b> Click on <b>“Cloud Usage Reports”</b> to begin adding your cloud account credentials.
          </Typography>
        </Box>

        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography><b>Enter Account Details:</b></Typography>
          <Box component="ul" sx={{ listStyle: "none", pl: 3, mt: 1 }}>
            <li><Typography><b>- Portfolio Name:</b> Assign a name to this portfolio for easy identification.</Typography></li>
            <li><Typography><b>- (AWS) Access ID and Access Secret:</b> Enter the credentials required to connect to your cloud account. These credentials are essential for accessing your cloud instances.</Typography></li>
            <li><Typography><b>- (AZURE) Client ID, Client Secret, Subscription ID and Tenant ID:</b> Enter the credentials required to connect to your cloud account. These credentials are essential for accessing your cloud instances.</Typography></li>
            <li><Typography><b>- (GCP) Client ID, Client Email, Project ID and Private Key:</b> Enter the credentials required to connect to your cloud account. These credentials are essential for accessing your cloud instances.</Typography></li>
            <li><Typography><b>- Region:</b> Select the geographical region where your cloud resources are located.</Typography></li>
          </Box>
        </Box>

        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography>
            <b>Verify Connection (Test):</b> Click <b>“Test”</b> to check the connection to the provided cloud portfolio account. Ensure that the credentials and details are correct.
          </Typography>
        </Box>

        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography>
            <b>Save Portfolio:</b> Click <b>“Save”</b> to store the portfolio with the entered credentials and metadata.
          </Typography>
        </Box>

        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography><b>Reset Form</b></Typography>
        </Box>

        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography>
            Click <b>“Reset”</b> to clear the form and enter new details from the beginning.
          </Typography>
        </Box>

        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography>
            <b>Cancel Operation:</b> Click “Cancel” to discard the current operation and return to the previous page.
          </Typography>
        </Box>

        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography>
            <b>View Portfolios:</b> After saving, you can view the added portfolio in the portfolios list on the left side of the page.
          </Typography>
        </Box>

        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography>
            <b>View Instances:</b> Click on any portfolio account from the list to see the instances saved under that portfolio.
          </Typography>
        </Box>

        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography>
            <b>Delete Portfolio:</b> To remove a portfolio, click <b>“Delete Portfolio”.</b>
          </Typography>
        </Box>

        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography>
            <b>Update Portfolio:</b> If you need to update the portfolio details, click <b>“Update Portfolio”.</b>
          </Typography>
        </Box>

        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography>
            <b>Refresh Data:</b> Click <b>“Refresh”</b> to update the displayed information and fetch any new data from the cloud account.
          </Typography>
        </Box>

        <Box component="li" sx={{ display: "list-item", mt: 1 }}>
          <Typography>
            <b>Cost Advice:</b> Click “Cost Advice” to receive recommendations on AMD instances compared to your current non-AMD instances. This feature provides information on monthly and hourly costs, along with estimated total savings details if you switch to the recommended AMD instances.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CloudUsageGuide;
