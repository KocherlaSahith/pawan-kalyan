import React from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box } from "@mui/material";
import { motion } from "framer-motion";
import tholiPrema from './tholiprema.jpg';
import gabbarsingh from './gabbarsingh.jpg';
import og from './og.jpg';
const movies = [
  { img: tholiPrema, title: "Tholi Prema (1998)", desc: "Won the National Award for Best Feature Film." },
  { img: gabbarsingh, title: "Gabbar Singh (2012)", desc: "A massive blockbuster & cultural phenomenon." },
   { img: og, title: "OG (2025)", desc: "Upcoming movie directed by Sujeeth" }
];

export default function ActingJourney() {
  return (
    <Box sx={{ backgroundColor: "#000", py: 12 }}>
      <Container>
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#ff1744" }}>
            🎬 Acting Journey
          </Typography>
        </motion.div>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {movies.map((movie, i) => (
            <Grid item xs={12} md={6} key={i}>
              <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <Card sx={{ background: "linear-gradient(145deg, #1e1e1e, #2c2c2c)", color: "#fff", borderRadius: "16px", boxShadow: "0px 8px 24px rgba(0,0,0,0.6)" }}>
                  <CardMedia component="img" height="350" image={movie.img} alt={movie.title} />
                  <CardContent>
                    <Typography variant="h5">{movie.title}</Typography>
                    <Typography variant="body2" color="gray">{movie.desc}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
