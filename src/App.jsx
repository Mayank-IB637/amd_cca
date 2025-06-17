import "./index.css";
import theme from "./lib/themes";
import "shepherd.js/dist/css/shepherd.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useMemo } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentInstance } from "./redux/features/instanceList/instanceList.selector";
import BottomBar from "./components/shared/BottomBar";
import InstanceAdviceBottomBar from "./components/shared/InstanceAdvice/InstanceAdviceBottomBar";
import Sidebar from "./components/shared/Sidebar/Sidebar";
import MainContent from "./components/shared/MainLayout/MainContent";
import InstanceAdviceLayout from "./components/shared/InstanceAdvice/InstanceAdviceLayout";
import Explorer from "./components/shared/Explorer/Explorer";
import Layout from "./components/shared/Layout";
import { explorerProvider, fetchProviderData } from "./redux/features/Explorer/Explorer.slice";
import CloudUsageReports from "./components/shared/CloudUsageReports/cloudusagereports";
import CloudInstances from "./components/shared/CloudUsageReports/cloudInstances";
import TelemetryLayout from "./components/shared/Telemetry/TelemetryLayout";
import TelemetryBottomBar from "./components/shared/Telemetry/TelemetryBottomBar";
import {
  setProvider,
} from "./redux/features/providerData/providerData.slice";
import { getProviderConfig } from "./lib/utils";
// Route config for reusability
const routesConfig = [
  { path: "/", element: <MainContent /> },
  { path: "/:id", element: <MainContent /> },
  { path: "/cloudusagereports", element: <CloudUsageReports /> },
  { path: "/cloudInstances", element: <CloudInstances /> },
  { path: "/cloudInstances/:id", element: <CloudInstances /> },
  { path: "/explorer", element: <Explorer /> },
  { path: "/explorer/:id", element: <Explorer /> },
  { path: "/instanceAdvice", element: <InstanceAdviceLayout /> },
  { path: "/instanceAdvice/:id", element: <InstanceAdviceLayout /> },
  {path:"/telemetry", element: <TelemetryLayout />},
];


const getSidebar = (pathname) =>
  !["/explorer", "/explorer/:id"].includes(pathname) ? Sidebar : null;

const getBottomBar = (pathname) => {
  if (pathname.startsWith('/instanceAdvice')) {
    return InstanceAdviceBottomBar;
  }
  if (pathname.startsWith('/explorer') || pathname === '/cloudusagereports') {
    return null;
  }
  if(pathname.startsWith('/telemetry')){
    return TelemetryBottomBar
  }
  return BottomBar;
};

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
   const dispatch = useDispatch();
  const currentInstance = useSelector(selectCurrentInstance);

  const pathname = useMemo(() => location.pathname, [location]);
  const SidebarComp = useMemo(() => getSidebar(pathname), [pathname]);
  const BottomBarComp = useMemo(() => getBottomBar(pathname), [pathname]);

    const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const type = searchParams.get("type") || "";
  const routes = useMemo(
    () => location.pathname.split("/").filter(Boolean),
    [location.pathname]
  );
  useEffect(() => {
    console.log("Tour useEffect triggered");
    const timeoutId = setTimeout(() => {
      console.log("Importing tour module...");
      import("@/tour/tour").then((tour) => { 
        console.log("Tour module loaded", tour);
        if (tour?.default?.start) {
          tour.default.start();
          console.log("Tour started");
        } else {
          console.error("tour.default.start is not a function", tour);
        }
      }).catch((err) => {
        console.error("Failed to load tour:", err);
      });
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (pathname === "/" && currentInstance == null) {
      navigate("/");
    }
  }, [pathname, currentInstance, navigate]);

  // useEffect(() => {
  //  dispatch(fetchProviderData(explorerProvider.AWS));
  // }, []);

    useEffect(() => {
    const provider = getProviderConfig(routes, type);
    dispatch(setProvider(provider));
  }, [routes.join(","), type]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout sidebar={SidebarComp} bottomBar={BottomBarComp}>
        <Routes>
          {routesConfig.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
