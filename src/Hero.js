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

  // Violent floating words with intense fire effects
  const ViolentFloatingWord = ({ word, top, left, delay }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 100 }}
        animate={{ 
          opacity: [0, 1, 0.9, 0],
          y: [100, -100, -200, -300],
          x: [0, 20, -30, 10],
          scale: [0.5, 1.3, 1.2, 0.8],
          rotate: [0, 5, -8, 12]
        }}
        transition={{ 
          duration: 12 + Math.random() * 6,
          repeat: Infinity,
          delay: delay,
          ease: "easeInOut"
        }}
        style={{
          position: "absolute",
          top: `${top}%`,
          left: `${left}%`,
          color: "#ff1744",
          fontSize: "3rem",
          fontWeight: "900",
          textTransform: "uppercase",
          textShadow: `
            0 0 5px #fff,
            0 0 10px #ff1744,
            0 0 15px #ff1744,
            0 0 20px #ff1744,
            0 0 35px #ff1744,
            0 0 40px #ff1744,
            2px 2px 2px rgba(0, 0, 0, 0.8)
          `,
          zIndex: 0,
          pointerEvents: "none",
          fontFamily: "'Arial Black', sans-serif",
          letterSpacing: "2px",
        }}
      >
        {word}
        {/* Intense fire effect particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0, x: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [0, -30 - (i * 15)],
              x: [0, (i % 2 === 0 ? 1 : -1) * (15 + Math.random() * 20)]
            }}
            transition={{ 
              duration: 1.5 + Math.random() * 1.5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: i % 3 === 0 ? "#ff1744" : i % 3 === 1 ? "#ff8a80" : "#ff5252",
              boxShadow: "0 0 12px rgba(255, 23, 68, 0.9)",
            }}
          />
        ))}
        
        {/* Additional violent flame effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0, 0.8, 0.4, 0],
            scale: [0.8, 1.5, 1.2, 0.9],
          }}
          transition={{ 
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "120%",
            height: "120%",
            background: "radial-gradient(ellipse at center, rgba(255, 23, 68, 0.4) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(5px)",
            zIndex: -1,
          }}
        />
      </motion.div>
    );
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
      onMouseMove={(e) => {
        // Update CSS variables for spotlight effect
        document.documentElement.style.setProperty('--x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--y', `${e.clientY}px`);
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

      {/* Violent floating words with intense fire effects */}
      <ViolentFloatingWord word="OG" top={15} left={5} delay={0} />
      <ViolentFloatingWord word="FIRESTORM" top={75} left={85} delay={2} />
      <ViolentFloatingWord word="KALYAN" top={35} left={65} delay={4} />
      <ViolentFloatingWord word="OG" top={65} left={15} delay={6} />
      <ViolentFloatingWord word="FIRESTORM" top={25} left={75} delay={8} />
      <ViolentFloatingWord word="KALYAN" top={85} left={35} delay={10} />
      
      {/* Additional POWER STAR text elements */}
      <ViolentFloatingWord word="POWER STAR" top={10} left={50} delay={1} />


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
            fontFamily: "'Arial Black', sans-serif",
            letterSpacing: "1px",
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
            fontFamily: "'Arial Black', sans-serif",
            letterSpacing: "2px",
          }}
        >
          Power Star Pawan Kalyan
        </Typography>
      </motion.div>

      {/* Additional text: "YOU BETTER REMEMBER HIS NAME" */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <Typography
          variant="h4"
          sx={{
            mt: 2,
            fontWeight: "bold",
            color: "#fff",
            textShadow: "0px 0px 15px rgba(255,23,68,0.8)",
            fontFamily: "'Arial Black', sans-serif",
            letterSpacing: "3px",
          }}
        >
         
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
              fontWeight: "bold",
              textShadow: "0px 0px 10px rgba(0,0,0,0.3)",
              fontFamily: "'Arial Black', sans-serif",
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