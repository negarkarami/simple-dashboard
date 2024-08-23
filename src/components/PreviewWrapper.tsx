import { Stack, Typography } from "@mui/material";
import React from "react";


interface PreviewProps {  
  label: string;
  value: any
}


const PreviewWrapper:React.FC <PreviewProps> = ({ label, value }) => {
  return (
    <Stack
      width="100%"
      height="100%"
      p={1.5}
      bgcolor="#f9e5efcc"
      sx={{ borderRadius: 1.5 }}
    >
      <Typography variant="body1" color="#000" textAlign="left">
        {label}
      </Typography>
      {typeof value !== "string" ? (
        value
      ) : (
        <Typography variant="body1" color="#000" textAlign="left">
          {value}
        </Typography>
      )}
    </Stack>
  );
};

export default PreviewWrapper;
