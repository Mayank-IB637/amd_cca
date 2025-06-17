import { Box } from "@mui/material";
import React from "react";
import DatadogForm from "./DatadogForm";
import { useSelector } from "react-redux";
import { selectTelemetryState } from "@/redux/features/Telemetry/telemetry.selector";
import { telemetryColumns } from "./telemetryColumns";
import CustomTable from "@/components/ui/table/CustomTable";
import AzureInsightsForm from "./AzureInsightsForm";
import { telemetryTypes } from "@/redux/features/Telemetry/telemetry.slice";
import { useLocation } from "react-router-dom";


function TelemetryLayout() {
  const { data, showData } = useSelector(selectTelemetryState);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");
  return (
    <Box
      sx={{
        flex: 1,
        p: 0,
        overflowY: "auto",
        bgcolor: "error.contrastText",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          padding: 2,
        }}
      >
        {type == telemetryTypes.AZURE_INSIGHTS ? <AzureInsightsForm />
          : <DatadogForm />}

        {showData && (
          <CustomTable
            variant="primary"
            data={data}
            columns={telemetryColumns}
            isPagination

            id="instance-advice-table"
          />
        )}
      </Box>
    </Box>
  );
}

export default TelemetryLayout;
