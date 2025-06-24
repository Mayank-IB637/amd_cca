//  HelpDialogContent
import React, { useMemo } from "react";
import {
  Box,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CloudGuide from "@/components/ui/UserGuide/CloudGuide";
import { useSelector } from "react-redux";
import { selectCurrentProviderName } from "@/redux/features/providerData/providerData.selector";
import DatadogGuide from "@/components/ui/UserGuide/DatadogGuide";
import CloudwatchGuide from "@/components/ui/UserGuide/CloudwatchGuide";
import AzureInsightsGuide from "@/components/ui/UserGuide/AzureInsightsGuide";
import { telemetryTypes } from "@/redux/features/Telemetry/telemetry.slice";
import { useLocation } from "react-router-dom";
import Explorer from "../../Explorer/Explorer";
import ExplorerGuide from "@/components/ui/UserGuide/ExplorerGuide";
import CostAdviceGuide from "@/components/ui/UserGuide/CostAdviceGuide";


const lablelist = ["Manage Portfolio", "Add Instances via Telemetry Connector (Datadog)", "Add Instances via Telemetry Connector (AWS CloudWatch)","Add Instances via Telemetry Connector (AZURE APP INSIGHTS)","Explorer","Cost Advice" ];

export default function HelpDialogContent({ onClose }) {
  const location = useLocation();
  const portfolioName = useSelector(selectCurrentProviderName)
  const pathname = useMemo(() => location.pathname, [location]);

  let label =  lablelist[0];

  let Component = () => <></>;

  

  switch (portfolioName) {
    case  telemetryTypes.DATA_DOG:
      label = lablelist[1];
      Component = DatadogGuide;
      break;
    case telemetryTypes.AWS_CLOUDWATCH:
      label = lablelist[2];
      Component = CloudwatchGuide;
      break;
    case telemetryTypes.AZURE_INSIGHTS:
      label = lablelist[3];
      Component = AzureInsightsGuide;
      break;
    default:
      label = lablelist[0];
      Component = CloudGuide;
  }
    if(pathname.startsWith('/explorer')){
      label = lablelist[4];
      Component = ExplorerGuide
  }
  if(pathname.split("/").includes('instanceAdvice')){
      label = lablelist[5];
      Component = CostAdviceGuide
  }

  return (
    <Box sx={{ p: 0 }} gap={0}>
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        {/* Title */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {label}
        </Typography>

        {/* Close Button */}
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <Component />

    </Box>
  );
}
