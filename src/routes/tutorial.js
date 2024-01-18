import express from "express";
import { tutorialController } from "../controllers/index.js";

const tutorialRouter = express.Router();
tutorialRouter.get("/", tutorialController.getCourseList);
tutorialRouter.get("/:title", tutorialController.getCourseDetail);
export default tutorialRouter;
