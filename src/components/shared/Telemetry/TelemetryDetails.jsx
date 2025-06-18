import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { telemetryColumns } from "./telemetryColumns";
import CustomTable from "@/components/ui/table/CustomTable";
import { selectCurrentInstance } from "@/redux/features/instanceList/instanceList.selector";
import { useNavigate } from "react-router-dom";
import {
    selectCurrentProviderName,
    selectCurrentProviderType,
} from "@/redux/features/providerData/providerData.selector";

function TelemetryDetail() {
    const navigate = useNavigate();
    const currentProviderName = useSelector(selectCurrentProviderName);
    const currentProviderType = useSelector(selectCurrentProviderType);
    const data = useSelector(selectCurrentInstance);

    if (!data) {
        return navigate(`/${currentProviderType}?type=${currentProviderName}`);
    }

    const columns = [
        {
            header: "UUID/Instance Name",
            accessorKey: "instance_name",
            cell: ({ getValue }) => (
                <p style={{ height: "8px" }}>{getValue()}</p>
            ),
        },
        {
            header: "Region",
            accessorKey: "region",
        },
        {
            header: "Size",
            accessorKey: "instance type",
        },
        {
            header: "Quantity",
            accessorFn: row => row.quantity ?? "10",
        },
        {
            header: "Total Number Of Hours Per Month",
            accessorFn: row => row.total_hours ?? "50",
        },
        {
            header: "Price Model",
            accessorFn: row => row.price_model ?? "ondemand",
        },
    ];

    return (
        <Box
            sx={{
                flex: 1,
                p: 2,
                overflowY: "auto",
                bgcolor: "error.contrastText",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <CustomTable
                variant="primary"
                data={data.data}
                isPagination
                columns={columns}
                sx={{
                    height: "100%",
                    borderRadius: 0,
                    overflowY: "auto",
                    backgroundColor: "background.paper",
                }}
            />
        </Box>
    );
}

export default TelemetryDetail;
