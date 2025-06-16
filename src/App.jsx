import "./index.css";
import theme from "./lib/themes";
import "shepherd.js/dist/css/shepherd.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useMemo } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentInstance } from "./redux/features/instanceList/instanceList.selector";
// import Header from "./components/shared/header/Header";
// import Footer from "./components/shared/Footer/Footer";
import BottomBar from "./components/shared/BottomBar";
import InstanceAdviceBottomBar from "./components/shared/InstanceAdvice/InstanceAdviceBottomBar";
import Sidebar from "./components/shared/Sidebar/Sidebar";
import MainContent from "./components/shared/MainLayout/MainContent";
import InstanceAdviceLayout from "./components/shared/InstanceAdvice/InstanceAdviceLayout";
import Explorer from "./components/Explorer/Explorer";
import Layout from "./components/shared/Layout";
import { explorerProvider, fetchProviderData } from "./redux/features/Explorer/Explorer.slice";

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
  return BottomBar;
};

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
