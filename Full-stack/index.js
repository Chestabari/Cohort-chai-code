import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import db from './utils/db.js';
import cookieParser from 'cookie-parser';

//import all routes
import userRoutes from "./routes/user.routes.js";


dotenv.config();

const app = express();

app.use(
    cors({
        origin: "*",
        credentials: true,
        methods: ['GET', 'POST', 'DELETE','OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    })
);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/chesta", (req, res) => {
    res.send("Chesta!");
  });

app.get("/uday", (req, res) => {
    res.send("Uday!");
  });

// connect to db
db();

//user routes
app.use("/api/v1/users", userRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

