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
import { removeInstance } from "@/redux/features/instance/instance.slice";
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
    },
    [dispatch]
  );

  return (
    <Box sx={{ width: "100%", p: 0, bgcolor: "primary.contrastText" }} style={{ paddingLeft: '5px',marginTop:'-40px',marginBottom:'0px' }}>
      <Suspense fallback={<TableSkeleton />}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <p
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: "rgb(0,0,225)",
            }}
          >
            Note: Double-click to update input values.
          </p>
          <div style={{ width: "300px", marginRight: "20px" }}>
            <Slider
              defaultValue={20}
              step={10}
              marks
              min={0}
              max={100}
              valueLabelDisplay="on"
              sx={{
                '& .MuiSlider-valueLabel': {
                  top: 'auto',
                  bottom: '-45px',
                  '&::before': {
                    bottom: 'auto',
                    top: '-6px',
                    borderBottomColor: 'currentColor',
                    borderTopColor: 'transparent',
                  }
                },
                marginBottom: '50px',
              }}
            />

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
