import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "./models/User.js";
import connectDB from "./db/db.js";

dotenv.config();
await connectDB();

const createAdminUser = async () => {
  try {
    const existingAdmin = await User.findOne({ email: "aim.sdcllp@gmail.com" });
    if (existingAdmin) {
      console.log("✅ Admin user already exists.");
      return;
    }

    const hashAdminPassword = await bcrypt.hash("admin123", 10);
    const adminUser = new User({
      name: "Admin",
      email: "aim.sdcllp@gmail.com",
      password: hashAdminPassword,
      role: "admin",
    });

    await adminUser.save();
    console.log("✅ Admin user created successfully!");
  } catch (error) {
    console.error("❌ Error creating admin user:", error);
  }
};

createAdminUser();
