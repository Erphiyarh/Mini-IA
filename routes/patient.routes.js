import { Router } from "express";
import {
  AddPatient,
  GetPatients,
  GetPatient,
} from "../controllers/patient.controller";
const router = Router();

router.post("/", AddPatient);
router.get("/", GetPatients);
router.get("/:id", GetPatient);

export default router;
