import React, { useState, Suspense, lazy, useCallback } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import GetInstanceColumn from "./PortfolioTable/portfolioColumn";
import TableSkeleton from "../ui/table/table_components/TableSkeleton ";
import ErrorBoundary from "./ErrorBoundary";
import {
  selectInstances,
  selectSelfAssessment,
} from "@/redux/features/instance/instance.selector";
import { removeInstance, setUploadedFileName } from "@/redux/features/instance/instance.slice";
import { Slider } from "@mui/material";

const CustomTable = lazy(() => import("../ui/table/CustomTable"));

const TabPanel = React.memo(function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box p={0}>{children}</Box>}
    </div>
  );
});
TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};


function PortfolioBody() {
  const dispatch = useDispatch();

  const dataMap = {
    instance_stats: useSelector(selectInstances)
  };

  const columnsMap = {
    instance_stats: GetInstanceColumn()
  };

  const handleChange = useCallback((_, newValue) => setValue(newValue), []);

  const onDelete = useCallback(
    ({ selectedRows }) => {
      if (!selectedRows?.length) return;
      const selectedIndexes = selectedRows.map((row) => row.index);
      dispatch(removeInstance(selectedIndexes));
      dispatch(setUploadedFileName(''))
    },
    [dispatch]
  );

  return (
   <Box sx={{ width: "100%", p: 0, bgcolor: "primary.contrastText", mt: 0, overflow: "hidden" }} style={{ paddingLeft: '5px' }}>
  <Suspense fallback={<TableSkeleton />}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px"
      }}
    >
      <p
        style={{
          fontSize: 16,
          fontWeight: 500,
          color: "rgb(0,0,225)",
          margin: 0,
          flex: "1 1 auto",
          minWidth: "200px"
        }}
      >
        Note: Double-click to update input values.
      </p>
      <div style={{ 
        width: "200px", 
        minWidth: "150px",
        paddingRight: "20px"
      }}>
        {/* <Slider
          defaultValue={20}
          step={10}
          marks
          min={0}
          max={100}
          valueLabelDisplay="on"
          sx={{
            '& .MuiSlider-valueLabel': {
              fontSize: '0.75rem',
              padding: '2px 6px'
            }
          }}
        /> */}
      </div>
    </div>
    <CustomTable
      variant="primary"
      data={dataMap['instance_stats']}
      columns={columnsMap['instance_stats']}
      isPagination
      isAction={true}
      onDelete={onDelete}
    />
  </Suspense>
</Box>
  );
}

const PortfolioBodyWithBoundary = () => (
  <ErrorBoundary fallback="Portfolio form component has some Errors">
    <PortfolioBody />
  </ErrorBoundary>
);

export default PortfolioBodyWithBoundary;
