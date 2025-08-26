import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const fans = [
  { msg: "Happy Birthday Power Star! You inspire us every day.", fan: "– Fan 1" },
  { msg: "Your movies and speeches changed my life. Many happy returns!", fan: "– Fan 2" },
  { msg: "Leader, actor, human – you are everything to us.", fan: "– Fan 3" },
];

export default function FanWall() {
  return (
    <Box sx={{ py: 12, backgroundColor: "#111" }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#ff1744" }}>
        💌 Fan Wall
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        {fans.map((fan, i) => (
          <Grid item xs={12} md={4} key={i}>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Paper elevation={6} sx={{
                p: 4, background: "linear-gradient(135deg, #1f1f1f, #2d2d2d)", color: "#fff", borderRadius: "16px"
              }}>
                <Typography>{fan.msg}</Typography>
                <Typography sx={{ mt: 2, color: "#ff1744" }}>{fan.fan}</Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
