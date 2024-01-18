import mongoose, { Schema, ObjectId } from "mongoose";
const Tutorial = mongoose.model(
  "Tutorial",
  new Schema({
    id: Number,
    title: String,
    author: String,
    image: [String],
    comments: [String],
    category: Number,
  })
);

export default Tutorial;
