import React, { useEffect, useState, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Chip,
  Typography,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  OutlinedInput,
  Checkbox,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { azureAppSchema } from "@/lib/validation/azureAppSchema";
import FormAlert from "@/components/ui/FormAlert";
import useTimedMessage from "@/hooks/useTimedMessage";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentProviderRegions } from "@/redux/features/providerData/providerData.selector";
import { useTheme } from "@emotion/react";
import {
  selectTelemetryResetFlag
} from "@/redux/features/Telemetry/telemetry.selector";
import {
  telemetryTypes,
  toggleShowData,
  telemetryConnectionStatus,
  setTelemetryConnectionStatus
} from "@/redux/features/Telemetry/telemetry.slice";
import { useLocation } from "react-router-dom";

const inputStyle = { fontWeight: 600 };

const FormRow = ({ children }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { sm: "repeat(7, 1fr)" },
      gap: 2,
      mb: 2,
    }}
  >
    {children}
  </Box>
);

const AzureInsightsForm = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const regionOptions = useSelector(selectCurrentProviderRegions);
  const telemetryResetFlag = useSelector(selectTelemetryResetFlag);

  const [showClientSecret, setShowClientSecret] = useState(false);
  const [formError, setFormError] = useTimedMessage();
  const [formSuccess, setFormSuccess] = useTimedMessage();

  const { register, handleSubmit, control, reset } = useForm({
    resolver: zodResolver(azureAppSchema),
    defaultValues: {
      portfolioName: "",
      regions: [],
      clientId: "",
      clientSecret: "",
      tenantId: "",
      subscriptionId: "",
    },
  });

  useEffect(() => {
    if (telemetryResetFlag) {
      reset({ regions: [] });
      dispatch(toggleShowData());
    }
  }, [telemetryResetFlag, reset, dispatch]);

  const onSubmit = () => {
    dispatch(
      setTelemetryConnectionStatus({
        connectionStatus: telemetryConnectionStatus.CONNECTED,
        type: telemetryTypes.AZURE_INSIGHTS,
      })
    );
    setFormSuccess("Azure connection is successful");
    setFormError("");
  };

  const handleError = () => {
    setFormError("Please enter the required fields.");
  };

  const isAllSelected = useCallback(
    (selected) => regionOptions.length > 0 && selected.length === regionOptions.length,
    [regionOptions]
  );

  const handleToggleSelectAll = (selected, onChange) => {
    if (selected.includes("selectAll")) {
      const allSelected = isAllSelected(selected);
      onChange(allSelected ? [] : regionOptions);
    } else {
      onChange(selected.filter((v) => v !== "selectAll"));
    }
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit, handleError)}
      sx={{ backgroundColor: "white", p: 2, width: "100%" }}
    >
      <FormRow>
        <TextField
          label="Portfolio Name"
          fullWidth
          {...register("portfolioName")}
          sx={{ gridColumn: "span 3" }}
          InputProps={{ style: inputStyle }}
        />
        <FormControl fullWidth sx={{ gridColumn: "span 3" }}>
          <InputLabel id="regions-label">Regions</InputLabel>
          <Controller
            name="regions"
            control={control}
            render={({ field: { value = [], onChange } }) => (
              <Select
                labelId="regions-label"
                id="regions"
                multiple
                value={value}
                onChange={(e) => handleToggleSelectAll(e.target.value, onChange)}
                input={<OutlinedInput label="Regions" />}
                renderValue={(selected) => (
                  <Box
                    sx={{
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      color: theme.palette.grey[800],
                      fontWeight: 400,
                    }}
                  >
                    {selected.length > 0 && <Chip label={selected[0]} />}
                    {selected.length > 1 && `(+${selected.length - 1} others)`}
                  </Box>
                )}
                sx={inputStyle}
              >
                <MenuItem value="selectAll">
                  <Checkbox checked={isAllSelected(value)} />
                  Select All
                </MenuItem>
                {regionOptions.map((region) => (
                  <MenuItem key={region} value={region}>
                    <Checkbox checked={value.includes(region)} />
                    {region}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
      </FormRow>

      <FormRow>
       <TextField
          label="Client ID"
          fullWidth
          type={showClientSecret ? "text" : "password"}
          {...register("clientSecret")}
          sx={{ gridColumn: "span 3" }}
          InputProps={{
            style: inputStyle,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowClientSecret((show) => !show)}
                  edge="end"
                  size="small"
                >
                  {showClientSecret ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Client Secret"
          fullWidth
          type={showClientSecret ? "text" : "password"}
          {...register("clientSecret")}
          sx={{ gridColumn: "span 3" }}
          InputProps={{
            style: inputStyle,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowClientSecret((show) => !show)}
                  edge="end"
                  size="small"
                >
                  {showClientSecret ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormRow>

      <FormRow>
        <TextField
          label="Tenant ID"
          fullWidth
          {...register("tenantId")}
          sx={{ gridColumn: "span 3" }}
          InputProps={{ style: inputStyle }}
        />
        <TextField
          label="Subscription ID"
          fullWidth
          {...register("subscriptionId")}
          sx={{ gridColumn: "span 3" }}
          InputProps={{ style: inputStyle }}
        />
        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{ gridColumn: "span 1", textTransform: "none" }}
        >
          <Typography variant="body2" fontWeight={600}>
            Test Connection
          </Typography>
        </Button>
      </FormRow>

      {formError && <FormAlert severity="error">{formError}</FormAlert>}
      {formSuccess && <FormAlert severity="success">{formSuccess}</FormAlert>}
    </Box>
  );
};

export default AzureInsightsForm;
