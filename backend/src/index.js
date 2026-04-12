import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "./config/db/db.mongo.js"; // use it later
import Routes from "./routes/v1/route.js";

dotenv.config({
  path: "./.env",
});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

// Routes
app.use("/", Routes);

// Server
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});