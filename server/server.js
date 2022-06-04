require("dotenv").config();
import express, { application } from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/auth";

const morgan = require("morgan");
const app = express();

mongoose
   .connect(process.env.DATABASE)
   .then(() => console.log("DB Connected"))
   .catch((err) => console.log("DB Connection Error", err));
   
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan(dev));

// middleware routes
app.use("/api/auth", authRoutes);

app.listen(4200, 
   () => console.log("Server is Now Running! 😎😎")
)