import "./index.css";
import theme from "./lib/themes";
import "shepherd.js/dist/css/shepherd.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { use, useEffect, useMemo } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentInstance } from "./redux/features/instanceList/instanceList.selector";
// import Header from "./components/shared/header/Header";
// import Footer from "./components/shared/Footer/Footer";
import BottomBar from "./components/shared/BottomBar";
import InstanceAdviceBottomBar from "./components/shared/InstanceAdvice/InstanceAdviceBottomBar";
import Sidebar from "./components/shared/Sidebar/Sidebar";
import MainContent from "./components/shared/MainLayout/MainContent";
import InstanceAdviceLayout from "./components/shared/InstanceAdvice/InstanceAdviceLayout";
import Explorer from "./components/shared/Explorer/Explorer";
import Layout from "./components/shared/Layout";
// import TelemetryForm from "./components/shared/Telemetry/TelemetryForm";
import { explorerProvider, fetchProviderData } from "./redux/features/Explorer/Explorer.slice";
import TelemetryLayout from "./components/shared/Telemetry/TelemetryLayout";
import TelemetryBottomBar from "./components/shared/Telemetry/TelemetryBottomBar";

// Route config for reusability
const routesConfig = [
  { path: "/", element: <MainContent /> },
  { path: "/:id", element: <MainContent /> },
  { path: "/explorer", element: <Explorer /> },
  { path: "/explorer/:id", element: <Explorer /> },
  { path: "/instanceAdvice", element: <InstanceAdviceLayout /> },
  {path:"/telemetry", element: <TelemetryLayout />},
  { path: "/instanceAdvice/:id", element: <p>404 page not found</p> },
];


const getSidebar = (pathname) =>
  !["/explorer", "/explorer/:id"].includes(pathname) ? Sidebar : null;

const getBottomBar = (pathname) =>
  pathname === "/instanceAdvice"
    ? InstanceAdviceBottomBar
    :  pathname === "/telemetry"
    ? TelemetryBottomBar
    :  !["/explorer", "/explorer/:id"].includes(pathname)
    ? BottomBar
    : null;

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const currentInstance = useSelector(selectCurrentInstance);

  const pathname = useMemo(() => location.pathname, [location]);
  const SidebarComp = useMemo(() => getSidebar(pathname), [pathname]);
  const BottomBarComp = useMemo(() => getBottomBar(pathname), [pathname]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      import("@/tour/tour").then((tour) => {
        tour.default.start();
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
