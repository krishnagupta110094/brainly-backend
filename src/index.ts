import express from "express";
import connectDB from "./config/db.js";
import authRoute from "./routers/auth-routes.js";
import contentRoute from "./routers/content-routes.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
// only allow requests from specific origin
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
    ],
  })
);

// connect to database
connectDB();

//Auth routes
app.use("/api/v1", authRoute);
app.use("/api/v1", contentRoute);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
