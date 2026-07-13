import { Router } from "express";
import { profile, education, experience, stack, projects, achievements } from "../data/portfolio.js";

const router = Router();

router.get("/profile", (req, res) => res.json({ ...profile, education }));
router.get("/experience", (req, res) => res.json(experience));
router.get("/stack", (req, res) => res.json(stack));
router.get("/projects", (req, res) => res.json(projects));
router.get("/achievements", (req, res) => res.json(achievements));

export default router;
