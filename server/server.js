
require("dotenv").config();
const express = require ("express");
const cors = require ("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const dev = require('morgan');

const morgan = require('morgan');

const app = express();
const http = require("http").createServer(app);

mongoose
   .connect(process.env.DATABASE)
     .then(() => console.log("Mongo Runs ¯\_(ツ)_/¯ "))
       .catch((err) => console.log("DB (⌐■_■)", err));
   
// middlewares
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan(dev));
// app.use(morgan(dev));

// middleware routes
app.use("/api/auth", authRoutes);

app.use(function(req, res) {
   res.status(404).send({ url: req.originalUrl + ' not found' })
 });

app.listen(4200, 
   () => console.log(" ☜(ﾟヮﾟ☜) Now Connected (☞ﾟヮﾟ)☞ ")
);