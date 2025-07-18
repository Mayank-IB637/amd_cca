import "./index.css";
import theme from "./lib/themes";
import "shepherd.js/dist/css/shepherd.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useMemo } from "react";
import { Route, Routes, useLocation, useNavigate, matchPath, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentInstance } from "./redux/features/instanceList/instanceList.selector";
import BottomBar from "./components/shared/BottomBar";
import InstanceAdviceBottomBar from "./components/shared/InstanceAdvice/InstanceAdviceBottomBar";
import Sidebar from "./components/shared/Sidebar/Sidebar";
import MainContent from "./components/shared/MainLayout/MainContent";
import InstanceAdviceLayout from "./components/shared/InstanceAdvice/InstanceAdviceLayout";
import Explorer from "./components/shared/Explorer/Explorer";
import Layout from "./components/shared/Layout";
import CloudUsageReports from "./components/shared/CloudUsageReports/cloudusagereports";
import CloudInstances from "./components/shared/CloudUsageReports/cloudInstances";
import TelemetryLayout from "./components/shared/Telemetry/TelemetryLayout";
import TelemetryBottomBar from "./components/shared/Telemetry/TelemetryBottomBar";
import { setProvider } from "./redux/features/providerData/providerData.slice";
import { getProviderConfig } from "./lib/utils/providerConfig";
import { selectCurrentProviderName } from "./redux/features/providerData/providerData.selector";

import TelemetryDetail from "./components/shared/Telemetry/TelemetryDetails";
import TelemetryDetailBottomBar from "./components/shared/Telemetry/TelemetryDetailBottombar";
import { addInstance } from "./redux/features/instanceList/instanceList.slice";
import Support from "./components/ui/Support";
import ReleaseNotesPage from "./components/shared/header/SubMenu/ReleaseNotes/ReleaseNotesPage";

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
  {path:"/telemetry/:id", element: <TelemetryDetail />},
  { path: "/support", element: <Support /> },
  { path: "/release-notes", element: <ReleaseNotesPage /> },


];


const getSidebar = (pathname) =>
  !["/explorer", "/explorer/:id","/support","/release-notes"].includes(pathname) ? Sidebar : null;

const getBottomBar = (pathname) => {
  if (pathname.startsWith('/instanceAdvice')) {
    return InstanceAdviceBottomBar;
  }
  if (pathname.startsWith('/explorer') || pathname === '/cloudusagereports' || pathname === '/support' || pathname === '/release-notes') {
    return null;
  }

  if(matchPath("/telemetry/:id", pathname)) {
    return TelemetryDetailBottomBar
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

  const type = useSelector(selectCurrentProviderName)

  const routes = useMemo(
    () => location.pathname.split("/").filter(Boolean),
    [location.pathname]
  ); 
;

  useEffect(() => {

    window.speechSynthesis.cancel()
     const timeoutId = setTimeout(() => {
        import("@/tour/tour").then((tour) => { 
       
          tour?.default?.start();
         
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
