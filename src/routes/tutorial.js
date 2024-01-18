import express from "express";
import { tutorialController } from "../controllers/index.js";

const courseRouter = express.Router();
courseRouter.get("/", tutorialController.getCourseList);
courseRouter.get("/:title", tutorialController.getCourseDetail);
export default courseRouter;
