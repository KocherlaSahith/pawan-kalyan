import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

export default function BirthdayWishes() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [count, setCount] = useState(0);

  const handleSubmit = () => {
    if (name.trim() === "") return;
    setSubmittedName(name);
    setCount(count + 1);
    setName("");
  };

  return (
    <Box sx={{ backgroundColor: "#000", py: 12, textAlign: "center" }}>
      <Container>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#ff1744",
              mb: 4,
              fontFamily: "cursive",
            }}
          >
            🎂 Birthday Wishes 🎉
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}>
            <TextField
              variant="outlined"
              placeholder="Enter a name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "8px",
              }}
            />
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                backgroundColor: "#ff1744",
                "&:hover": { backgroundColor: "#ff4569" },
                px: 3,
              }}
            >
              Send Wish
            </Button>
          </Box>

          {submittedName && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h4"
                sx={{ color: "#fff", fontWeight: "600", mb: 3 }}
              >
                🎉 Happy Birthday, {submittedName}! 🎂
              </Typography>
            </motion.div>
          )}

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                color: "#ffea00",
                textShadow: "0px 0px 20px #ffea00",
                mt: 4,
              }}
            >
              Wishes Sent: {count}
            </Typography>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
