import express from "express";
import { createJob, getJobs } from "./jobs.controller.js";

const router = express.Router();

router.post("/", createJob);
router.get("/", getJobs);

export default router;