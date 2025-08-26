import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ py: 3, textAlign: "center", backgroundColor: "#222" }}>
      <Typography variant="body2" color="gray">
        © {new Date().getFullYear()} Tribute to Pawan Kalyan | Designed by SK
      </Typography>
    </Box>
  );
}
