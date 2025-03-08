import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// ✅ Debugging Middleware to Check Request Body
router.use((req, res, next) => {
  
  next();
});

// ✅ Manually Add User (Only for Admins)
router.post("/addUser", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ msg: "All fields are required" });

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ msg: "User added successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
});

// ✅ Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ msg: "Please enter all fields" });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, user: { name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;
