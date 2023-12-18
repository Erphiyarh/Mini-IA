import express from "express";
import { DB_CONNECT } from "./database";

const APP = express();

APP.use(express.json());

APP.use("/api/patients", PATIENTROUTES);

APP.listen(5000, async () => {
  await DB_CONNECT();
  console.log("Server started on port 5000");
});
