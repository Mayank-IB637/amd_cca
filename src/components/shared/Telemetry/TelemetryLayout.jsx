import { Box, Skeleton } from "@mui/material";
import React, { Suspense, lazy } from "react";
import { useSelector } from "react-redux"; 
import { telemetryColumns } from "./telemetryColumns";
import CustomTable from "@/components/ui/table/CustomTable";
import { useLocation } from "react-router-dom"; 
import { telemetryTypes } from "@/redux/features/Telemetry/telemetry.slice";
import PrometheusTelemetry from "./Prometheus";
import { selectTelemetryState } from "@/redux/features/telemetry/telemetry.selector";
// Lazy load the forms
const DatadogForm = lazy(() => import("./DatadogForm"));
const AzureInsightsForm = lazy(() => import("./AzureInsightsForm"));
const Prometheus = lazy(() => import("./Prometheus"));
const GCPTelemetry = lazy(() => import("./GCPTelemetry"));

function TelemetryLayout() {
  const { data, showData } = useSelector(selectTelemetryState);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");
  const renderForm = () => {
    switch (type) {
      case telemetryTypes.AZURE_INSIGHTS:
        return <AzureInsightsForm />;
      case telemetryTypes.AWS_CLOUDWATCH:
        return <AzureInsightsForm />;
      case telemetryTypes.DATA_DOG:
        return <DatadogForm />;
      case telemetryTypes.GOOGLE_CLOUD_OPS:
        return <GCPTelemetry />;
      case telemetryTypes.PROMETHEUS:
        return <PrometheusTelemetry />;
      default:
        return null;
    }
  };
 
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflowY: "auto", 
        display: "flex",
        flexDirection: "column",
        padding: 0,
      }}
    >
      <Suspense fallback={<Skeleton variant="rectangular" height={400} />}>
        {renderForm()}
      </Suspense>

      {showData && (
        <CustomTable
          variant="primary"
          data={data}
          columns={telemetryColumns}
          isPagination 
        />
      )}
    </Box>
  );
}

export default TelemetryLayout;
