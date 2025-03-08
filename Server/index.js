import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import os from "os"; // ✅ Importing correctly

import authRoutes from "./routes/authRoutes.js"; // ✅ Correct Import

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

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
  "http://localhost:3000" // Local Development
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("❌ Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json());

// ✅ MongoDB Connection (Fixed)
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Routes
app.use("/api/auth", authRoutes);

// ✅ Root Route to Check Backend is Running
app.get("/", (req, res) => {
  res.send(`✅ Backend is Running on ${LOCAL_IP}:${PORT}`);
});

// ✅ Start Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server Running at http://${LOCAL_IP}:${PORT}`);
});
