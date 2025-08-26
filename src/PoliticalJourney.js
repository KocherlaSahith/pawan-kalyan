import React from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box } from "@mui/material";
import { motion } from "framer-motion";
import pkjsp from './pkjsp.jpeg';
import pkjsppeople from './pkjsppeople.avif';

const politics = [
  { img: pkjsp, title: "JanaSena Party (2014)", desc: "Founded JSP to serve people with integrity." },
  { img: pkjsppeople, title: "People’s Leader", desc: "Known for fearless speeches & grassroots presence." },
];

export default function PoliticalJourney() {
  return (
    <Box sx={{ backgroundColor: "#000", py: 12 }}>
      <Container>
        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#ff1744" }}>
            🗳️ Political Journey
          </Typography>
        </motion.div>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {politics.map((pol, i) => (
            <Grid item xs={12} md={6} key={i}>
              <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <Card sx={{ background: "linear-gradient(145deg, #1e1e1e, #2c2c2c)", color: "#fff", borderRadius: "16px", boxShadow: "0px 8px 24px rgba(0,0,0,0.6)" }}>
                  <CardMedia component="img" height="350" image={pol.img} alt={pol.title} />
                  <CardContent>
                    <Typography variant="h5">{pol.title}</Typography>
                    <Typography variant="body2" color="gray">{pol.desc}</Typography>
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
