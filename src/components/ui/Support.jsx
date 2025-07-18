import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Grid,
  Paper,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import uk from "@/assets/UK.svg";
import us from "@/assets/US.svg";
import denmark from "@/assets/denmark.svg";
import Germany from "@/assets/Germany.svg";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { Help } from "@mui/icons-material";
import UserGuide from "@/assets/AMD_CCA1.pdf"
import { supportEmailBody, supportEmailSubject } from "@/lib/constant";
import { useNavigate } from "react-router-dom";

const contactData = [
  {
    country: "United States",
    phone: "+1 888-795-3738",
    email: "dl.epycservices@amd.com",
    logo: us,
  },
  {
    country: "United Kingdom",
    phone: "+44 800 260 6982",
    email: "dl.epycservices@amd.com",
    logo: uk,
  },
  {
    country: "Denmark",
    phone: "+45 80 82 03 18",
    email: "dl.epycservices@amd.com",
    logo: denmark,
  },
  {
    country: "Germany",
    phone: "+49 8000009148",
    email: "dl.epycservices@amd.com",
    logo: Germany,
  },
];

const CustomAccordion = ({ title, children, id}) => {
  const [expanded, setExpanded] = useState(false);

  

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary id = {id} expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

const Support = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ p: 6 }}>
      <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
        Need Help Finding Something?
      </Typography>
      <Typography variant="subtitle1" align="center"  fontWeight="bold" gutterBottom>
        We've got you covered!
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        <Help fontSize="inherit" sx={{ verticalAlign: 'middle', mr: 0.5, mb:0.5}} />
        Support
      </Typography>
      <Typography variant="body1" gutterBottom>
        Find helpful documentation and guides to get started quickly, understand key features, and make the
        most of the AMD EPYC Cloud Instance Advisor.
      </Typography>
         <Typography variant="body1" gutterBottom>
         Need help? Refer to the Contact Details section below for region-specific support.
      </Typography>

      <CustomAccordion title="Getting Started">
        <Typography>
          Learn the basics of setting up and using your instance advisor effectively.
        </Typography>
      </CustomAccordion>

      <CustomAccordion title="User Guide">
        <Typography>
          Full user documentation including features, workflows, and examples.
        </Typography>
        <Link
          href={UserGuide}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover">
          View User Guide ↗
        </Link>
      </CustomAccordion>

       
      <CustomAccordion  id= "release-menu" title="Release Notes">
        <Typography gutterBottom>
          Stay updated with the latest enhancements, new feature additions, and bug fixes introduced in
          each release of EPYC Cloud Instance Advisor.
        </Typography>

        <Typography
          id = "release-notes"
          sx= {{cursor: "pointer"}}
          onClick={() => navigate("/release-notes")}
        >
          View Release Notes ↗
        </Typography>
      </CustomAccordion>
      

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        <PhoneIcon fontSize="inherit" sx={{ verticalAlign: 'middle', mr: 0.5, mb:0.5}} />
        Contact Details
      </Typography>

      <Grid container spacing={6}>
        {contactData.map((contact, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                width: 320,
              }}
            >
              <Box
                sx={{
                  height: 120,
                  bgcolor: "#f0f0f0",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  overflow: "hidden",
                }}
              >
                <img
                  src={contact.logo}
                  alt={`${contact.country} flag`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  <AddLocationIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                  {contact.country}
                </Typography>
                <Link
                  component="a"
                  href={`tel:${contact.phone}`}
                  display="flex"
                  alignItems="center"
                  gap={1}
                  mt={1}
                  color={"black"}
                  underline="none"
                >
                  <PhoneIcon fontSize="small" />
                  <Typography variant="body2">{contact.phone}</Typography>
                </Link>
                <Link
                  component="a"
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(
                    supportEmailSubject
                  )}&body=${encodeURIComponent(supportEmailBody)}`}
                  display="flex"
                  alignItems="center"
                  gap={1}
                  mt={0.5}
                  color={"black"}
                  underline="none"
                >
                  <MailIcon fontSize="small" />

                  <Typography variant="body2">{contact.email}</Typography>
                </Link>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Support;