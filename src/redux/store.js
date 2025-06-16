import { configureStore } from "@reduxjs/toolkit";
import instanceListReducer from "./features/instanceList/instanceList.slice"; 
import sidebarReducer from "./features/sidebar/sidebar.slice";
import instanceReducer from "./features/instance/instance.slice";
import ExplorerReducer from "./features/Explorer/Explorer.slice";
import providerDataReducer from "./features/providerData/providerData.slice";
import telemetryReducer from "./features/Telemetry/telemetry.slice";


export const store = configureStore({
  reducer: {
    instanceList: instanceListReducer,
    instance: instanceReducer, 
    sidebar: sidebarReducer,
    explorerData: ExplorerReducer, 
      provider: providerDataReducer,
      telemetry:telemetryReducer,
  },
});
