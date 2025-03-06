import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import os from "os";  // ✅ Corrected ES Module Import

import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Get Local Network IP for Debugging
function getLocalIP() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  return "localhost";
}
const LOCAL_IP = getLocalIP();

// ✅ Allowed Origins - Fix CORS Issue
const allowedOrigins = [
  "https://siteproject-front.vercel.app", // ✅ Corrected
  "http://localhost:3000",  // ✅ Localhost for Development
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json()); // ✅ Ensure JSON Parsing

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// ✅ Routes
app.use("/api/auth", authRoutes);

// ✅ Health Check Route
app.get("/", (req, res) => {
  res.send(`✅ Backend is Running on ${LOCAL_IP}:${PORT}`);
});

// ✅ Start the Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server is Running on ${LOCAL_IP}:${PORT}`);
});
