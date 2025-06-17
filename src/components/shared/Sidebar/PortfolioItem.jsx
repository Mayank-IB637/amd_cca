import React, { useCallback, useMemo } from "react";
import { ListItemButton, ListItemText, Typography,Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { addCurrentInstance } from "@/redux/features/instanceList/instanceList.slice";
import { updateInstanceState } from "@/redux/features/instance/instance.slice";
import { setUploadedFileName } from "@/redux/features/instance/instance.slice";
import propsTypes from "prop-types";
import { Close } from "@mui/icons-material";

export default function PortfolioItem({ portfolio }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const activePortfolioId = pathParts[pathParts.length - 1];
  const isActive = portfolio.id === activePortfolioId;
  const handleSelect = useCallback(
    (portfolio) => {
      dispatch(addCurrentInstance(portfolio.id));
      dispatch(updateInstanceState(portfolio));
      dispatch(setUploadedFileName(''))
      if (portfolio.type == 'cloudreports') {
        navigate(`/cloudInstances/${portfolio.id}`);
      }
      else {
        navigate(`/${portfolio.id}`);
      }
    },
    [dispatch, navigate]
  );

  return (
    <ListItemButton
      key={portfolio.id}
      selected={isActive}
      onClick={() => handleSelect(portfolio)}
    >
     <ListItemText
  primary={
    <Typography
      fontWeight={isActive ? 600 : "normal"}
      fontSize={12}
      component="div" // Use div because we’ll use flexbox styles
      sx={{ display: 'flex', alignItems: 'center', gap: 1 }} // gap adds spacing between icon and text
    >
      <Box
        component="img"
        src={portfolio.type!='cloudreports'?"/file-document-outline.svg":"/key.svg"}
        alt="Find & Replace"
        sx={{ width: 16, height: 16 ,filter: isActive ? 'invert(1000%) sepia(100%) saturate(0%) hue-rotate(0deg)' : 'invert(0%)',}}
      />
      {portfolio.name}
    </Typography>
  }
/>

    </ListItemButton>
  );
}

PortfolioItem.propTypes = {
  portfolio: propsTypes.shape({
    id: propsTypes.string.isRequired,
    name: propsTypes.string.isRequired,
  }).isRequired,
};
