import React, { useState, useCallback, lazy } from "react";
import PropTypes from "prop-types";
import { Checkbox, FormControlLabel, Box, Button, Typography,Link } from "@mui/material";
import { selectPortfolioName } from "@/redux/features/instance/instance.selector";
import { useDispatch, useSelector } from "react-redux";
import { setPortFolioName } from "@/redux/features/instance/instance.slice";
import { addInstanceList } from "@/redux/features/instance/instance.slice";
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
  const dispatch = useDispatch();
  const [uploadedFileName, setUploadedFileName] = useState('');

  const handleValueChange = (e) => {
    const { value } = e.target;
    if (value.trim() != name) {
      dispatch(setPortFolioName(value.trim()));
    }
  };

  const handleInputClick = () => {
    dispatch(addInstanceList([mockFormDataResponse]));
    form.setValue("instanceFile", "Test Instance File");
    setUploadedFileName('PortfolioTemplate.xlsx')
  }

  const handleDownloadTemplate = () => {
    const link = document.createElement('a');
    link.href = SampleFile;
    link.download = 'portfolio_template.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
<Box
  component="div"
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr", // Mobile: single column
      sm: "4fr 3fr 3fr 1fr", // Small screens and above: portfolio(4), filename+upload(3), template(3), link(1)
    },
    gridTemplateRows: {
      xs: "auto auto auto auto", // Mobile: 4 rows
      sm: "auto", // Small+: single row
    },
    gap: 2,
    p: 2,
    alignItems: "center",
  }}
>
  {/* Portfolio Name Input - 4 columns */}
  <Box sx={{ gridColumn: { xs: "1", sm: "1" }, gridRow: { xs: "1", sm: "1" } }}>
    <HoverInput
      id="portfolio-name"
      label="Portfolio Name"
      name="portfolioName"
      value={name}
      fullWidth
      tooltipMessage={TOOLTIP_MESSAGE}
      hideClearIcon
      onChange={handleValueChange}
    />
  </Box>

  {/* Combined Filename and Upload Section - 3 columns */}
  <Box 
    sx={{ 
      gridColumn: { xs: "1", sm: "2" }, 
      gridRow: { xs: "2", sm: "1" },
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      gap: { xs: 1, sm: 1 },
      alignItems: { xs: "stretch", sm: "center" }
    }}
  >
    {uploadedFileName && (
      <Typography 
        variant="body2" 
        color="text.primary" 
        noWrap
        sx={{ 
          fontSize: "0.875rem",
          flex: { sm: "1 1 auto" },
          minWidth: 0, // Allows text to shrink
          marginRight: { sm: 1 }
        }}
      >
        {uploadedFileName}
      </Typography>
    )}
    
    <Button
      variant="contained"
      style={{ borderRadius: '5px' }}
      color="primary"
      onClick={handleInputClick}
      fullWidth={{ xs: true, sm: false }}
      sx={{ 
        flexShrink: 0, // Prevents button from shrinking
        minWidth: "100px"
      }}
    >
      <UploadIcon />&nbsp;&nbsp;
      Upload
    </Button>
  </Box>

  {/* Template Button - 3 columns */}
  <Box sx={{ gridColumn: { xs: "1", sm: "3" }, gridRow: { xs: "3", sm: "1" } }}>
    <Button
      variant="contained"
      style={{ borderRadius: '5px' }}
      color="primary"
      onClick={handleDownloadTemplate}
      fullWidth={{ xs: true, sm: false }}
      sx={{ minWidth: "120px" }}
    >
      <DownloadIcon />&nbsp;&nbsp;
      Template
    </Button>
  </Box>

  {/* Cloud Usage Reports Link - 1 column at right end */}
  <Box
    sx={{
      gridColumn: { xs: "1", sm: "4" },
      gridRow: { xs: "4", sm: "1" },
      justifySelf: { xs: "center", sm: "end" }
    }}
  >
    <Link
      href="/cloudusagereports"
      sx={{
        textDecoration: 'underline',
        color: 'primary.main',
        whiteSpace: 'nowrap',
        '&:hover': {
          color: 'primary.dark'
        }
      }}
    >
      Cloud Usage Reports
    </Link>
  </Box>
</Box>
  );
};

PortfolioDetails.propTypes = {
  form: PropTypes.shape({
    control: PropTypes.object.isRequired,
  }).isRequired,
};

export default React.memo(PortfolioDetails);
