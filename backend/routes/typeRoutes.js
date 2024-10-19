import express from "express";
const router = express.Router();

// Controllers
import {
  createType,
  updateType,
  removeType,
  listTypes,
  readType,
} from "../controllers/typeController.js";

// Middlewares
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

router.route("/").post(authenticate, authorizeAdmin, createType);
router.route("/:id").put(authenticate, authorizeAdmin, updateType);
router.route("/:id").delete(authenticate, authorizeAdmin, removeType);
router.route("/genres").get(listTypes);
router.route("/:id").get(readType);

export default router;