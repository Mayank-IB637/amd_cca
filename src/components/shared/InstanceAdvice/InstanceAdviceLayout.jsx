import { Box, Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";
import InstanceAdviceHeader from "./InstanceAdviceHeader";
import costAdvisor from "@/lib/instanceAdvice.json";
import CustomTable from "@/components/ui/table/CustomTable";
import { CostAdvisoryColumn } from "./CostAdvisoryColumn";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import GridViewCard from "./GridViewCard";

function InstanceAdviceLayout() {

  const data = costAdvisor.Data;
  const grandTotalRaw = costAdvisor.grandTotal;
  const grandTotal = {
    data: {
      currentPlatform: {
        zone: "Grand Total",
        'numberOfInstances': grandTotalRaw["Number of Instances"].toString(),
        'monthlyCost': grandTotalRaw["Current Monthly Cost"],
        'annualCost': grandTotalRaw["Annual Cost"]
      },
      recommendations: [
        {
          monthlyCost: grandTotalRaw["Monthly Cost I"],
          totalCost: grandTotalRaw["Annual Cost I (perf scaled)"],
          annualSavings: grandTotalRaw["Annual Savings I"],
          perf: grandTotalRaw["Perf Enhancement I"],
          // map more if needed
        },
        {
          monthlyCost: grandTotalRaw["Monthly Cost II"],
          totalCost: grandTotalRaw["Annual Cost II (perf scaled)"],
          annualSavings: grandTotalRaw["Annual Savings II"],
          perf: grandTotalRaw["Perf Enhancement II"],
        },
        {
          monthlyCost: grandTotalRaw["Monthly Cost III"],
          totalCost: grandTotalRaw["Annual Cost III (perf scaled)"],
          annualSavings: grandTotalRaw["Annual Savings III"],
          perf: grandTotalRaw["Perf Enhancement III"],
        },
      ],
    },
  };
  const [view, setView] = useState('table');

  const handleViewChange = (_, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  return (
    <Box
      sx={{
        flex: 1,
        p: 0,
        overflowY: "auto",
        bgcolor: "error.contrastText",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          padding: 1,
        }}
      >
        <InstanceAdviceHeader
        />

        <Box sx={{ marginLeft: "auto", mb: 2 }}>
          <ToggleButtonGroup
            value={view}
            exclusive
            onChange={handleViewChange}
            aria-label="view toggle"
          >
            <ToggleButton value="table" aria-label="table view">
              <FormatListBulletedIcon />
            </ToggleButton>
            <ToggleButton value="grid" aria-label="grid view">
              <CalendarViewMonthIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {view === "table" ? (
          <CustomTable
            variant="primaryBorder"
            data={[...data, grandTotal]}
            columns={CostAdvisoryColumn}
            isPagination={true}
            defaultColumnPinningState={{
              left: ["current", "zone", "instanceType", "monthlyCost", "annualCost"],
              right: [],
            }}
            id="instance-advice-table"
          />
        ) : (
            <Box display="flex" flexDirection="column" gap={2}>
              {[...data, grandTotal].map((item, index) => (
                <GridViewCard key={index} item={item} />
              ))}
            </Box>
        )}
      </Box>
    </Box>
  );
}

export default InstanceAdviceLayout;
