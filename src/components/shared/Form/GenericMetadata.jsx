import React, { lazy, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Button, IconButton, Divider, Grid, Tooltip } from "@mui/material";
import { FIELDS } from "@/lib/constant";
import { Controller } from "react-hook-form";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PropTypes from "prop-types";
import HoverSelect from "@/components/ui/form/Select";
import AddIcon from '@mui/icons-material/Add';
import { AnimatedIconButton } from "@/components/shared/Form/Consumption Metadata/AnimatedIconButton";
import { Add } from "@mui/icons-material";
import { selectCurrentProviderInstanceTypes, selectCurrentProviderPricingModels, selectCurrentProviderRegions } from "@/redux/features/providerData/providerData.selector";
const HoverInput = lazy(() => import("@/components/ui/form/Input"));
const DialogHoc = React.lazy(() => import("@/components/ui/Dialog"));
const FindAndReplace = React.lazy(() => import("@/components/shared/Form/Consumption Metadata/FindAndReplace"));
const TooltipHoc = React.lazy(() => import("@/components/ui/Tooltip"));
const CloseIcon = React.lazy(() => import("@mui/icons-material/Close"));

const GenericMetadata = ({ form }) => {
    const dispatch = useDispatch();
  const options = {
    region: useSelector(selectCurrentProviderRegions),
    instanceType: useSelector(selectCurrentProviderInstanceTypes),
    pricingModel: useSelector(selectCurrentProviderPricingModels),
  };
  const renderField = ({ name, label, tooltipMessage }) => (
    <Controller
      key={name}
      name={name}
      control={form.control}
      render={({ field, fieldState }) =>
        options ? (
          <HoverSelect
            id={`${name}Target`}
            name={name}
            tooltipMessage={tooltipMessage}
            label={label}
            options={options[name] || []}
            fullWidth
            value={field.value}
            error={!!fieldState.error}
            {...field}
             onChange={(e) => { 
              field.onChange(e);
              if (name === "region") {
                form.setValue("instanceType", "");
                dispatch(setRegion( e.target.value ));
              } 
            }}
          />
        ) : (
          <HoverInput
            id={`${name}Target`}
            tooltipMessage={tooltipMessage}
            label={label}
            fullWidth
            value={field.value}
            error={!!fieldState.error}
            {...field}
          />
        )
      }
    />
  );

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setAnimate((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  // Split fields based on your requirements
  const firstFields = FIELDS.slice(0, 3); 
  const quantityField = FIELDS.find(f => f.name === "quantity");
  const noOfHoursField = FIELDS.find(f => f.name === "noOfHours");
  const pricingModelField = FIELDS.find(f => f.name === "pricingModel");
  const remainingFields = FIELDS.filter(f =>
    !firstFields.includes(f) &&
    f.name !== "quantity" &&
    f.name !== "noOfHours" &&
    f.name !== "pricingModel"
  );

  return (
    <Box sx={{ p: 1, width: '100%' }}>
      <Grid container spacing={0.5} alignItems="flex-end" sx={{ mb: 1.5 }}>
        <Grid item size={{ xs: 12, md: 2 }}>
          {renderField(firstFields[0])}
        </Grid>
        <Grid item size={{ xs: 12, md: 2 }}>
          {renderField(firstFields[1])}
        </Grid>
        <Grid item size={{ xs: 12, md: 4 }}>
          {renderField(firstFields[2])}
        </Grid>
        <Grid item md={4} />
      </Grid>
      <Grid container spacing={0.5} alignItems="flex-end">
        <Grid item size={{ xs: 12, md: 2 }}>
          {renderField(quantityField)}
        </Grid>
        <Grid item size={{ xs: 12, md: 4 }}>
          {renderField(noOfHoursField)}
        </Grid>
        <Grid item size={{ xs: 12, md: 2 }}>
          {renderField(pricingModelField)}
        </Grid>
        {/* Buttons container */}
        <Grid item size={{ xs: 12, md: 4 }}>
          <Box display="flex" gap={1} justifyContent="flex-start">
            <TooltipHoc message={"Add Instance"}>
              <Button
                id="addInstanceFormTarget"
                variant="contained"
                color="primary"
                type="submit"
                size="small"
                style={{ width: '100px' }}
              >
                <Add />
              </Button>
            </TooltipHoc>

            {/* Your Find & Replace Button */}
            <DialogHoc
              trigger={({ onClick }) => (
                <TooltipHoc message={"Find & Replace"}>
                  <Button
                    id="findAndReplace"
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={onClick}
                    sx={{ padding: "6px" , width: '100px' }}
                  >
                    <Box
                      component="img"
                      src="/file-replace.svg"
                      alt="Find & Replace"
                      sx={{ width: 24, height: 24 }}
                    />
                  </Button>
                </TooltipHoc>
              )}
              content={({ handleClose }) => (
                <FindAndReplace onClose={handleClose} />
              )}
              sx={{ width: "400px", m: "auto" }}
            />

            {/* Help Button */}
            <DialogHoc
              maxWidth="md"
              fullWidth={true}
              style={{width: '100px' }}
              trigger={({ onClick }) => (
                <TooltipHoc message={"Data correction & adjustment guidelines"}>
                  <AnimatedIconButton
                    onClick={onClick}
                    className={animate ? "animate" : ""}
                  >
                    <HelpOutlineIcon />
                  </AnimatedIconButton>
                </TooltipHoc>
              )}
              content={({ handleClose }) => (
                <Box sx={{ p: 0 }} gap={0} width={"full"} color={"primary.main"}>
                  <Box
                    display={"flex"}
                    justifyContent="space-between"
                    alignItems="center"
                    p={"10px 24px"}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      fontSize={"18px"}
                      gutterBottom
                    >
                      How data corrections are applied:
                    </Typography>

                    <Box display="flex" justifyContent="flex-end">
                      <IconButton onClick={handleClose}>
                        <CloseIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  <Divider />
                  <Box p={" 24px 24px"}>
                    <Typography fontSize={"16px"} fontWeight={600}>
                      Cloud Selection:
                    </Typography>

                    <Typography fontSize={"16px"} margin={"4px 0 0 16px"}>
                      If the cloud value is empty, invalid, or unsupported, it will
                      be automatically set to the default Cloud Service Provider
                      (CSP).
                    </Typography>
                  </Box>
                </Box>
              )}
            />
            
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

GenericMetadata.propTypes = {
  form: PropTypes.object.isRequired,
};

export default GenericMetadata;