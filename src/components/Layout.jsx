import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import { Box } from '@mui/material';
 


const Layout = ({ sidebar: SidebarComp, bottomBar: BottomBarComp, children }) => (
  <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <Header />
    <Box display="flex" flexDirection="column" flex={1}>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-start",
          mt: 8,
          p: 0,
        }}
      >
        {SidebarComp && <SidebarComp />}
        {children}
      </Box>

      {BottomBarComp && <BottomBarComp />}

    </Box>
    <Footer />
  </Box>
);

export default Layout;