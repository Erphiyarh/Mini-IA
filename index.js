import express from "express";
import { DB_CONNECT } from "./database/index.js";
import dotenv from "dotenv"
import PATIENTROUTES from "./routes/patient.routes.js"
const APP = express();
dotenv.config()
APP.use(express.json());

APP.use("/api/patients", PATIENTROUTES);

APP.listen(5000, async () => {
  await DB_CONNECT();
  console.log("Server started on port 5000");
});
