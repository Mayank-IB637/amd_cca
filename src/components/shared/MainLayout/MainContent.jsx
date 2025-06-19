 
import { Box } from "@mui/material";
import InstanceForm from "@/components/shared/Form/InstanceForm";
import { useSelector } from "react-redux";
import PortfolioBody from "../PortfolioBody";
import { withErrorBoundary } from "@/hooks/withErrorBoundary";
import { selectInstances } from "@/redux/features/instance/instance.selector";


function MainContent() {
  const instanceData = useSelector(selectInstances);
  const showTable = instanceData.length > 0;
  return (
    <Box sx={{ flex: 1, p: 0, overflowY: "auto" }}>
        <InstanceForm />
        {showTable && <PortfolioBody />}
    </Box>
  );
}

const MainContentWithErrorBoundary = withErrorBoundary(
  MainContent,
  "MainContent component has some Errors"
);
export default MainContentWithErrorBoundary;
