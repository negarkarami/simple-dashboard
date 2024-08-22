import { CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";

const LoadingComponent = () => {
  return (
    <Stack justifyContent="center" alignItems="center" height="100%" width="100%" spacing={2}>
      <CircularProgress />
      <Typography variant="subtitle2" color="primary.main">
       please Wait...
      </Typography>
    </Stack>
  );
};

export default LoadingComponent;
