import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import os from "os";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing. Please set it in your environment variables.");
  process.exit(1);
}

// ✅ Function to Get Local IP (For Debugging)
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

// ✅ Fix CORS Issue - Allow Only Required Origins
const allowedOrigins = [
  "https://testphstudio-front-login.vercel.app", // Production Frontend
  "http://localhost:3000", // Local Development
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.error(`❌ CORS Blocked: ${origin}`); // Debugging for CORS issues
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// ✅ MongoDB Connection (Enhanced Error Handling)
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  });

// ✅ Routes
app.use("/api/auth", authRoutes);

// ✅ Root Route to Check Backend is Running
app.get("/", (req, res) => {
  res.send(`✅ Backend is Running on ${LOCAL_IP}:${PORT}`);
});

// ✅ Global Error Handler (Handles Unexpected Errors)
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// ✅ Start Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server Running at http://${LOCAL_IP}:${PORT}`);
});
