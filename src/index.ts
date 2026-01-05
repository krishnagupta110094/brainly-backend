import express from "express";
import connectDB from "./config/db.js";
import authRoute from "./routers/auth-routes.js";
import contentRoute from "./routers/content-routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// connect to database
connectDB();

//Auth routes
app.use(authRoute);
app.use(contentRoute);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
