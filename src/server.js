import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { tutorialRouter } from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const port = process.env.PORT || 3000;

app.use("/tutorial", tutorialRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
