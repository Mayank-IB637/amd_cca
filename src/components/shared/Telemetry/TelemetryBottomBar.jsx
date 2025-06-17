import React from "react";
import { Box, Grid, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import { selectTelemetryState } from "@/redux/features/telemetry/telemetry.selector";
import {
  selectTelemetryState
} from "@/redux/features/Telemetry/telemetry.selector";
import {
  resetTelemetryData,
  telemetryConnectionStatus,
  toggleShowData,
} from "@/redux/features/Telemetry/telemetry.slice";
import { useSelector, useDispatch } from "react-redux";
import { addInstance } from "@/redux/features/instanceList/instanceList.slice";
import { nanoid } from "@reduxjs/toolkit";

const TelemetryBottomBar = () => {
  const dispatch = useDispatch();
  const telemetryState = useSelector(selectTelemetryState);
  const isConnected =
    telemetryState.connectionStatus === telemetryConnectionStatus.CONNECTED;

    const handleSaveInstances = () => {
dispatch(addInstance({
  id:nanoid(),
  type: telemetryState.type,
  // name: ,
}))

// 
    }

  return (
    <Box
      id="manage-portfolio-footer-action-container"
      // className="action-footer"
      sx={{ p: 1 }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="flex-end"
        spacing={1}
        wrap="nowrap"
      >
        <Grid item>
          <Button
            variant="contained"
            onClick={() => dispatch(resetTelemetryData())}
            disabled={!isConnected}
            color="error"
            id="btn-cinstancelist-cancel"
            startIcon={<CloseIcon />}
            sx={{ textTransform: "none", mr: 1 }}
          >
            Cancel
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={() => dispatch(toggleShowData())}
            disabled={!isConnected}
            sx={{
              backgroundColor: "black",
              color: "white",
              textTransform: "none",
              mr: 1,
              "&:hover": { backgroundColor: "black" },
            }}
          >
            Fetch/ Sync Instances
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            disabled={!isConnected}
            onClick={handleSaveInstances}
            sx={{
              backgroundColor: "black",
              color: "white",
              textTransform: "none",
              mt: "4px",
              "&:hover": { backgroundColor: "black" },
            }}
          >
            Save Metrics
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TelemetryBottomBar;
