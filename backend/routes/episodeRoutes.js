import express from "express"
const router = express.Router()

import {
  createEpisode,
  getEpisode,
} from "../controllers/episodeController.js"

router.get("/:id", getEpisode)
router.post("/create-episode", createEpisode)

export default router