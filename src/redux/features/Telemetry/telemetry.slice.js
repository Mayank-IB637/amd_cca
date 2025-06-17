import {
  awsCloudWatchTelemetryData,
  azureInsightsTelemetryData,
  dataDogTelemetryData,
} from "@/lib/telemetrydata";
import { createSlice } from "@reduxjs/toolkit";

export const telemetryConnectionStatus = {
  CONNECTED: "connected",
  CONNECTING: "connecting",
  DISCONNECTED: "disconnected",
};
export const telemetryTypes = {
  DATA_DOG: "Datadog",
  AWS_CLOUDWATCH: "AWS_Cloudwatch",
  AZURE_INSIGHTS: "Azure_App_Insights",
};

const initialState = {
  data: [],
  type: null,
  connectionStatus: telemetryConnectionStatus.DISCONNECTED,
  reset: false,
  showData: false,
};

const telemetrySlice = createSlice({
  name: "telemetry",
  initialState,
  reducers: {
    toggleShowData(state) {
      state.showData = !state.showData;
    },
    setTelemetryConnectionStatus(state, action) {
      state.connectionStatus = action.payload.connectionStatus;
      state.type = action.payload.type;
      switch (action.payload.type) {
        case telemetryTypes.DATA_DOG:
          state.data = dataDogTelemetryData;
          break;
        case telemetryTypes.AWS_CLOUDWATCH:
          state.data = awsCloudWatchTelemetryData;
          break;
        case telemetryTypes.AZURE_INSIGHTS:
          state.data = azureInsightsTelemetryData;
          break;
        default:
          state.data = [];
      }
    },
    toggleResetTelemetry(state) {
      state.reset = false;
    },
    resetTelemetryData(state) {
      state.data = [];
      state.type = null;
      state.connectionStatus = telemetryConnectionStatus.DISCONNECTED;
      state.reset = true;
    },
  },
});

export const {
  setTelemetryConnectionStatus,
  toggleResetTelemetry,
  resetTelemetryData,
  toggleShowData,
} = telemetrySlice.actions;

export default telemetrySlice.reducer;
