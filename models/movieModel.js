import mongoose, { mongo } from "mongoose";

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  image: { type: String, required: true },
});

const movieModel = mongoose.models.movie || mongoose.model("movie", movieSchema);

export default movieModel;
