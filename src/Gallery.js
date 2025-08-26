import React from "react";
import { Container, Typography, Grid, Card, CardMedia, Box } from "@mui/material";
import { motion } from "framer-motion";

import pkvintage from './pkvintage1.jpg';
import pkvintage2 from './pkvintage2.jpg';
import pkvintage3 from './pkvintage3.jpeg';

const images = [pkvintage, pkvintage2, pkvintage3];

export default function Gallery() {
  return (
    <Box sx={{ backgroundColor: "#000", py: 12 }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#ff1744" }}
        >
          📸 Gallery
        </Typography>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {images.map((img, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                <Card
                  sx={{
                    background: "#1e1e1e",
                    borderRadius: "16px",
                    boxShadow: "0px 8px 24px rgba(0,0,0,0.6)",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={img}
                    alt={`Gallery ${i + 1}`}
                    sx={{
                      width: "100%",
                      height: 250,   // 🔹 Fixed height
                      objectFit: "cover", // 🔹 Ensures crop while keeping ratio
                    }}
                  />
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
