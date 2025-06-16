import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
    Box,
    Typography,
    TextField,
    Autocomplete,
    Divider,
    Button,
    CircularProgress,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions, Grid
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RefreshIcon from '@mui/icons-material/Refresh';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import ConnectionIcon from '@mui/icons-material/SettingsEthernet';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';
import { nanoid } from "@reduxjs/toolkit";
import {
    selectCurrentProviderName
} from "@/redux/features/providerData/providerData.selector";
import { selectInstanceList } from "@/redux/features/instanceList/instanceList.selector";
import {
  addCurrentInstance,
  addInstance,
  deletePortfolioFromList,
  updateInstance,
} from "@/redux/features/instanceList/instanceList.slice";
import {
  errorMessageType,
  resetInstanceState,
  setMessage,
  updateInstanceState,
} from "@/redux/features/instance/instance.slice";

const listOfRegions = [
    'us-east-1',
    'us-west-2',
    'eu-central-1',
    'ap-southeast-1',
    // add your mock regions here
];

const MOCK_CONFIG = {
    TEXT_INPUT_TYPE: 'outlined',
    TEXT_INPUT_DENSITY: 'standard',
};

const CloudUsageReports = () => {
    const navigate = useNavigate()
    const currentProvider = useSelector(selectCurrentProviderName);
      const instanceList = useSelector(selectInstanceList);
      const dispatch = useDispatch()
 const formId = nanoid();
    const [pageTitle] = useState('Add Portfolio');
    const [formData, setFormData] = useState({
        name: '',
        accessID: '',
        accessSecret: '',
        region: [],
        clientID: '',
        clientSecret: '',
        subscriptionID: '',
        tenantID: '',
        gcpclientID: '',
        clientEmail: '',
        projectID: '',
        privatekey: '',
    });

    const [visibility, setVisibility] = useState({
        accessID: false,
        accessSecret: false,
        clientID: false,
        clientSecret: false,
        gcpclientID: false,
        projectID: false,
    });

    const [loading, setLoading] = useState({
        addAccountCardLoadingStatus: false,
        testLoadingButton: false,
        saveLoadingButton: false,
    });

    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

    // Helper to update formData
    const updateFormData = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    // Toggle visibility for password fields
    const toggleVisibility = (key) => {
        setVisibility((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const redirectToMainPage = () => {
        navigate("/")
    };

    const clearPortfolioData = () => {
        setFormData({
            name: '',
            accessID: '',
            accessSecret: '',
            region: [],
            clientID: '',
            clientSecret: '',
            subscriptionID: '',
            tenantID: '',
            gcpclientID: '',
            clientEmail: '',
            projectID: '',
            privatekey: '',
        });
    };

    const testConnection = () => {
        setLoading((prev) => ({ ...prev, testLoadingButton: true }));
        setTimeout(() => {
            alert('Test connection successful (mock)');
            setLoading((prev) => ({ ...prev, testLoadingButton: false }));
        }, 1500);
    };

    const saveButtonClickEvent = () => {
        setLoading((prev) => ({ ...prev, saveLoadingButton: true }));
        setTimeout(() => {
            alert('Saved successfully (mock)');
            setLoading((prev) => ({ ...prev, saveLoadingButton: false }));
        }, 1500);
    };

    const cancelClick = () => {
        setOpenConfirmDialog(true);
    };

    const discardChanges = () => {
        setOpenConfirmDialog(false);
        redirectToMainPage();
    };

    const cancelDialog = () => {
        setOpenConfirmDialog(false);
    };

      const handleSavePortFolio =  () => {
        const trimmedName = formData.name?.trim();
        const validNameRegex = /^[a-zA-Z0-9_-]+$/;
        if (!trimmedName || trimmedName.length < 3 || !validNameRegex.test(trimmedName)) {
          dispatch(
            setMessage({
              type: errorMessageType.ERROR,
              message: "Please enter a portfolio name with at least 3 characters. Only letters, numbers, underscores (_), and hyphens (-) are allowed; no other special characters.",
            })
          );
          return;
        }
    
        const isDuplicate = instanceList.some(
          (instance) =>
            instance.name === trimmedName && instance.id !== currentInstanceId
        );
    
        if (isDuplicate) {
          dispatch(
            setMessage({
              type: errorMessageType.ERROR,
              message: "Portfolio name already exists",
            })
          );
          return;
        }
        
        const instances = 
             {
            "region": "us-west-2",
            "instance type": "m5.2xlarge",
            "quantity": 1,
            "monthly utilization (hourly)": 730,
            "pricingModel": "ondemand",
            "cloud_csp": "AWS",
            "instance_name": "DataDogTeam",
            "uuid": "fdedc3d6-c319-40e2-a7cf-5bcbbd7f676f"
        }
        const payload = {
          id: formId,
          instances,
          name: trimmedName,
          type:'cloud'
        };
        dispatch(addInstance(payload));
     
        navigate(`/cloudInstances/${formId}`);
        dispatch(
          setMessage({
            type: errorMessageType.SUCCESS,
            message: `${trimmedName} saved successfully`,
          })
        );
      }

    return (
        <Box sx={{ p: 1 }}>
            {/* Header */}
            <Box
                id="cusagereport-header-controls-container"
                sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <Typography sx={{ ml: 1, fontSize: '1.2rem', fontWeight: 700 }}>
                    {pageTitle}
                </Typography>
                <Button onClick={redirectToMainPage}>
                    <CloseIcon />
                </Button>
            </Box>

            {/* Form Card */}
            <Box
                sx={{
                    p: 1,
                    border: '1px solid #ccc',
                    borderRadius: 1,
                    mb: 4,
                    position: 'relative',
                    backgroundColor: 'white'
                }}
            >
                {loading.addAccountCardLoadingStatus && (
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            bgcolor: 'rgba(255,255,255,0.6)',
                            zIndex: 10,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <CircularProgress />
                    </Box>
                )}

                {/* Portfolio Name */}
                <TextField
                    fullWidth
                    label="Portfolio Name"
                    variant={MOCK_CONFIG.TEXT_INPUT_TYPE}
                    margin="normal"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    required
                />

                <Typography sx={{ fontWeight: 500 }}>
                    Secrets
                </Typography>
                <Divider sx={{ mb: 2 }} />

                {/* AWS Fields */}
                {currentProvider === 'AWS' && (
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 1, mb: 2 }}>
                        <TextField
                            label="Access ID *"
                            variant={MOCK_CONFIG.TEXT_INPUT_TYPE}
                            type={visibility.accessID ? 'text' : 'password'}
                            value={formData.accessID}
                            onChange={(e) => updateFormData('accessID', e.target.value)}
                            sx={{ flex: '1 1 30%' }}
                            InputProps={{
                                endAdornment: (
                                    <Button size="small" onClick={() => toggleVisibility('accessID')}>
                                        {visibility.accessID ? <Visibility /> : <VisibilityOff />}
                                    </Button>
                                ),
                            }}
                        />
                        <TextField
                            label="Access Secret *"
                            variant={MOCK_CONFIG.TEXT_INPUT_TYPE}
                            type={visibility.accessSecret ? 'text' : 'password'}
                            value={formData.accessSecret}
                            onChange={(e) => updateFormData('accessSecret', e.target.value)}
                            sx={{ flex: '1 1 30%' }}
                            InputProps={{
                                endAdornment: (
                                    <Button size="small" onClick={() => toggleVisibility('accessSecret')}>
                                        {visibility.accessSecret ? <Visibility /> : <VisibilityOff />}
                                    </Button>
                                ),
                            }}
                        />
                        <Autocomplete
                            multiple
                            options={listOfRegions}
                            value={formData.region}
                            onChange={(event, newValue) => updateFormData('region', newValue)}
                            renderInput={(params) => (
                                <TextField {...params} label="Region *" variant={MOCK_CONFIG.TEXT_INPUT_TYPE} />
                            )}
                            sx={{ flex: '1 1 30%' }}
                        />
                    </Box>
                )}

                {/* AZURE Fields */}
                {currentProvider === 'AZURE' && (
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 1 }}>
                        <TextField
                            label="Client ID *"
                            variant={MOCK_CONFIG.TEXT_INPUT_TYPE}
                            type={visibility.clientID ? 'text' : 'password'}
                            value={formData.clientID}
                            onChange={(e) => updateFormData('clientID', e.target.value)}
                            sx={{ flex: '1 1 30%' }}
                            InputProps={{
                                endAdornment: (
                                    <Button size="small" onClick={() => toggleVisibility('clientID')}>
                                        {visibility.clientID ? <Visibility /> : <VisibilityOff />}
                                    </Button>
                                ),
                            }}
                        />
                        <TextField
                            label="Client Secret *"
                            variant={MOCK_CONFIG.TEXT_INPUT_TYPE}
                            type={visibility.clientSecret ? 'text' : 'password'}
                            value={formData.clientSecret}
                            onChange={(e) => updateFormData('clientSecret', e.target.value)}
                            sx={{ flex: '1 1 30%' }}
                            InputProps={{
                                endAdornment: (
                                    <Button size="small" onClick={() => toggleVisibility('clientSecret')}>
                                        {visibility.clientSecret ? <Visibility /> : <VisibilityOff />}
                                    </Button>
                                ),
                            }}
                        />
                        <TextField
                            label="Subscription ID *"
                            variant={MOCK_CONFIG.TEXT_INPUT_TYPE}
                            value={formData.subscriptionID}
                            onChange={(e) => updateFormData('subscriptionID', e.target.value)}
                            sx={{ flex: '1 1 30%' }}
                        />
                        <TextField
                            label="Tenant ID *"
                            variant={MOCK_CONFIG.TEXT_INPUT_TYPE}
                            value={formData.tenantID}
                            onChange={(e) => updateFormData('tenantID', e.target.value)}
                            sx={{ flex: '1 1 30%' }}
                        />
                        <Autocomplete
                            multiple
                            options={listOfRegions}
                            value={formData.region}
                            onChange={(event, newValue) => updateFormData('region', newValue)}
                            renderInput={(params) => (
                                <TextField {...params} label="Region" variant={MOCK_CONFIG.TEXT_INPUT_TYPE} />
                            )}
                            sx={{ flex: '1 1 30%' }}
                        />
                    </Box>
                )}

                {/* GCP Fields */}
                {currentProvider === 'GCP' && (
                    <Box sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item size={{ xs: 12, md: 5 }}>
                                <TextField
                                    label="Client ID *"
                                    variant={MOCK_CONFIG.TEXT_INPUT_TYPE}
                                    type={visibility.gcpclientID ? 'text' : 'password'}
                                    value={formData.gcpclientID}
                                    onChange={(e) => updateFormData('gcpclientID', e.target.value)}
                                    fullWidth
                                    InputProps={{
                                        endAdornment: (
                                            <Button size="small" onClick={() => toggleVisibility('gcpclientID')}>
                                                {visibility.gcpclientID ? <Visibility /> : <VisibilityOff />}
                                            </Button>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 5 }}>
                                <TextField
                                    label="Client Email *"
                                    variant={MOCK_CONFIG.TEXT_INPUT_TYPE}
                                    value={formData.clientEmail}
                                    onChange={(e) => updateFormData('clientEmail', e.target.value)}
                                    fullWidth
                                />
                            </Grid>

                            {/* Project ID and Region in one row */}
                            <Grid item size={{ xs: 12, md: 5 }}>
                                <TextField
                                    label="Project ID *"
                                    variant={MOCK_CONFIG.TEXT_INPUT_TYPE}
                                    type={visibility.projectID ? 'text' : 'password'}
                                    value={formData.projectID}
                                    onChange={(e) => updateFormData('projectID', e.target.value)}
                                    fullWidth
                                    InputProps={{
                                        endAdornment: (
                                            <Button size="small" onClick={() => toggleVisibility('projectID')}>
                                                {visibility.projectID ? <Visibility /> : <VisibilityOff />}
                                            </Button>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, md: 5 }}>
                                <Autocomplete
                                    multiple
                                    options={listOfRegions}
                                    value={formData.region}
                                    onChange={(event, newValue) => updateFormData('region', newValue)}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Region" variant={MOCK_CONFIG.TEXT_INPUT_TYPE} fullWidth />
                                    )}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, md: 10 }}>
                                <TextField
                                    label="Private Key *"
                                    variant={MOCK_CONFIG.TEXT_INPUT_TYPE}
                                    multiline
                                    minRows={3}
                                    value={formData.privatekey}
                                    onChange={(e) => updateFormData('privatekey', e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Box>

                )}
            </Box>
            <Dialog open={openConfirmDialog} onClose={cancelDialog}>
                <DialogTitle>Confirm Cancel</DialogTitle>
                <DialogContent>
                    Are you sure you want to discard changes and leave this page?
                </DialogContent>
                <DialogActions>
                    <Button onClick={discardChanges} color="error">
                        Discard
                    </Button>
                    <Button onClick={cancelDialog} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            <Box className='action-footer' gap={2}>
                <div><b>Note:</b> On click of SAVE button, you are authorizing us to fetch all the instances available in the region to us
                </div>
                <Button
                    variant="contained"
                    color="error"
                    startIcon={<RefreshIcon />}
                    onClick={clearPortfolioData}
                >
                    Reset
                </Button>

                <Button
                    variant="contained"
                    startIcon={<CloseIcon />}
                    onClick={cancelClick}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    startIcon={<ConnectionIcon />}
                    onClick={testConnection}
                    disabled={loading.testLoadingButton}
                >
                    {loading.testLoadingButton ? <CircularProgress size={24} color="inherit" /> : 'Test'}
                </Button>

                <Button
                    variant="contained"
                    startIcon={<SaveIcon />}
                    onClick={handleSavePortFolio}
                    disabled={loading.saveLoadingButton}
                >
                    {loading.saveLoadingButton ? <CircularProgress size={24} color="inherit" /> : 'Save'}
                </Button>

            </Box>

        </Box>
    );
};

export default CloudUsageReports;
