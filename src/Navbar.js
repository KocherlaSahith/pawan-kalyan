import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

export default function Navbar({ scrollToSection, refs }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navItems = [
    { label: "About", ref: refs.aboutRef },
    { label: "Journey", ref: refs.journeyRef },
    { label: "Gallery", ref: refs.galleryRef },
    { label: "Fan Wall", ref: refs.fanWallRef },
  ];

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleClick = (ref) => {
    scrollToSection(ref);
    handleMenuClose();
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(10px)",
        boxShadow: "0px 4px 30px rgba(0,0,0,0.7)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo / Title */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "2px",
              background: "linear-gradient(90deg, #ff1744, #ff9100)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ✨ Power Star Tribute
          </Typography>
        </motion.div>

        {/* Desktop Buttons */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          {navItems.map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }}>
              <Button
                onClick={() => handleClick(item.ref)}
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily: "'Poppins', sans-serif",
                  mx: 1,
                  px: 2,
                  transition: "0.3s",
                  "&:hover": {
                    background: "linear-gradient(90deg, #ff1744, #ff9100)",
                    boxShadow: "0px 4px 15px rgba(255,23,68,0.5)",
                  },
                }}
              >
                {item.label}
              </Button>
            </motion.div>
          ))}
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            {navItems.map((item, i) => (
              <MenuItem key={i} onClick={() => handleClick(item.ref)}>
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
