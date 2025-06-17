import React, { useState, useCallback, lazy } from "react";
	import { useNavigate } from 'react-router-dom'
import PropTypes from "prop-types";
import { Checkbox, FormControlLabel, Box, Button, Typography,Link , Grid, TextField} from "@mui/material";
import { selectPortfolioName, selectUploadedFileName } from "@/redux/features/instance/instance.selector";
import { useDispatch, useSelector } from "react-redux";
import { setPortFolioName } from "@/redux/features/instance/instance.slice";
import { addInstanceList , setUploadedFileName} from "@/redux/features/instance/instance.slice";
import { mockFormDataResponse } from "@/lib/data";
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import SampleFile from '../../../../src/assets/Sample_template.xlsx'
// Lazy load components
const HoverInput = lazy(() => import("@/components/ui/form/input"));

const TOOLTIP_MESSAGE =
  "No special characters are allowed, except for underscores (_) and hyphens (-). Additionally, keywords like 'advice' and the name of the selected CSP, (e.g., aws, azure, gcp) are not accepted when entered in lowercase.";

const PortfolioDetails = ({ form }) => {
  const name = useSelector(selectPortfolioName);
    const navigate = useNavigate();

  const uploadedFileName = useSelector(selectUploadedFileName);
  const dispatch = useDispatch();

  const handleValueChange = (e) => {
    const { value } = e.target;
    if (value.trim() != name) {
      dispatch(setPortFolioName(value.trim()));
    }
  };

  const handleInputClick = () => {
    dispatch(addInstanceList([mockFormDataResponse]));
    dispatch(setUploadedFileName('sampleTemplate.xlsx'));
  }

  const handleDownloadTemplate = () => {
    const link = document.createElement('a');
    link.href = SampleFile;
    link.download = 'portfolio_template.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const cloudUsageReportsRedirect=()=>{
    navigate('/cloudusagereports');
  }
  return (
  <Box sx={{ flexGrow: 1, p: 1 }}>
      <Grid container spacing={1} alignItems="center">

        {/* Left part: md=9 */}
        <Grid item size={{xs: 12, md: 9}}>
          <Grid container spacing={1} alignItems="center">
              <Grid item size={{xs: 12, md: 5 }}>
                <TextField
                  id="portfolio-name"
                  label="Portfolio Name*"
                  variant="outlined"
                  name="portfolioName"
                  fullWidth
                  value={name}
                  onChange={handleValueChange}
                  sx={{ fontWeight: 600 }}
                />
              </Grid>

            {/* Uploaded Filename - md=3 */}
            <Grid item size={{xs: 12, md: 3}} sx={{ px: 1 }}>
              {uploadedFileName && (
                <Typography
                  noWrap
                  sx={{
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                    display: 'flex',
                    justifyContent: { xs: 'flex-start', md: 'flex-end' },
                    alignItems: 'flex-end',
                  }}
                  title={uploadedFileName}
                >
                  {uploadedFileName}
                </Typography>
              )}
            </Grid>

            {/* Upload Button - md=2 */}
            <Grid item size={{ xs: 12, md:2 , lg:2 }} sx={{ px: 1 }}>
              <Button
                id="uploadInstances"
                variant="contained"
                color="primary"
                startIcon={<UploadIcon />}
                onClick={handleInputClick}
                fullWidth
              >
                Upload
              </Button>
            </Grid>

            {/* Template Button - md=2 */}
            <Grid item size={{ xs: 12, md: 2 , lg: 2}} sx={{ px: 1 }}>
              <Button
                
                id="step-five-target"
                variant="contained"
                color="primary"
                startIcon={<DownloadIcon />}
                onClick={handleDownloadTemplate}
                fullWidth
              >
                Template
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          size={{ xs: 12, md: 3 }}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'flex-start', md: 'flex-end' },
            alignItems: 'center',
            px: 1,
          }}
        >
          <Link
            onClick={cloudUsageReportsRedirect}
            sx={{
              cursor: 'pointer',
              fontWeight: 500,
              textDecoration: 'underline',
              color: 'primary.main',
              '&:hover': {
                color: 'primary.dark',
              },
            }}
            id="manageportfolio-cusagereport-link"
          >
            Cloud Usage Reports
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

PortfolioDetails.propTypes = {
  form: PropTypes.shape({
    control: PropTypes.object.isRequired,
  }).isRequired,
};

export default React.memo(PortfolioDetails);
