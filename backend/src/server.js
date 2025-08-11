import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
// import express from "express";  // This line is not needed since app is imported from app.js
import { app } from "./app.js";

// const app = express(); // <-- This line is not needed since app is imported from app.js

dotenv.config({
    path: "./.env"
})

connectDB()
.then(() => {
      app.listen(process.env.PORT , () => {
         console.log(`Server is running on port https://localhost:${process.env.PORT}`);
      })
})
.catch((error) => {
         console.log("Error connecting to the database:", error);
})