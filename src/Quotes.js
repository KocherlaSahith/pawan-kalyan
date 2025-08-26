import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

export default function Quotes() {
  return (
    <Box sx={{ py: 12, textAlign: "center", backgroundColor: "#111" }}>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#ff1744" }}>
          💬 Inspiring Quotes
        </Typography>
        <Paper elevation={6} sx={{
          maxWidth: 600, mx: "auto", p: 4, background: "linear-gradient(135deg, #1f1f1f, #2d2d2d)",
          color: "#fff", fontStyle: "italic", borderRadius: "16px", boxShadow: "0px 8px 24px rgba(0,0,0,0.6)"
        }}>
          “I may not have the power, but I have the will to fight for the people.”
        </Paper>
      </motion.div>
    </Box>
  );
}
