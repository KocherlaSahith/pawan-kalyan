import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Badge } from "@mui/material";
import { motion } from "framer-motion";

export default function Hero() {
  const [count, setCount] = useState(0);

  // Load count from localStorage on mount
  useEffect(() => {
    const savedCount = localStorage.getItem("birthdayCounter");
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);

  // Update localStorage whenever count changes
  useEffect(() => {
    localStorage.setItem("birthdayCounter", count);
  }, [count]);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Overlay for spotlight effect */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.05), transparent 40%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Animated gradient border/flare */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(270deg, rgba(255,23,68,0.1), rgba(183,28,28,0.1), rgba(29,43,100,0.1))",
          backgroundSize: "600% 600%",
          animation: "gradientShift 15s ease infinite",
          zIndex: 0,
        }}
      />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            textShadow: "0px 0px 20px rgba(255,23,68,0.9)",
          }}
        >
          Happy Birthday 🎂
        </Typography>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <Typography
          variant="h3"
          sx={{
            mt: 3,
            fontWeight: "bold",
            color: "#ff1744",
            textShadow: "0px 0px 20px rgba(0,0,0,0.9)",
          }}
        >
          Power Star Pawan Kalyan
        </Typography>
      </motion.div>

      {/* Counter Button with Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{ position: "relative", zIndex: 1, marginTop: "2rem" }}
      >
        <Badge badgeContent={count} color="secondary">
          <Button
            variant="contained"
            color="error"
            onClick={handleClick}
            sx={{
              fontSize: "1.2rem",
              px: 3,
              py: 1,
              borderRadius: "12px",
            }}
          >
            🎉 Celebrate
          </Button>
        </Badge>
      </motion.div>

      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </Box>
  );
}
