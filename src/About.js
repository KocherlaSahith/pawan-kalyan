import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Box sx={{ backgroundColor: "#000", py: 12 }}>
      <Container>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#ff1744" }}>
            About
          </Typography>
          <Typography align="center" sx={{ maxWidth: 800, mx: "auto", fontSize: "1.2rem", color: "#fff" }}>
            Pawan Kalyan, fondly known as <strong>Power Star</strong>, is a celebrated actor, philanthropist, and political leader. 
            With a career spanning blockbuster films and a powerful political journey, he continues to inspire millions across the nation.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
