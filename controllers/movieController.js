import movieModel from "../models/movieModel.js";

// add movie
const addMovie = async (req, res) => {
  try {
    // Cek apakah ada file yang diupload
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload an image",
      });
    }

    const image_filename = req.file.filename;

    const movie = new movieModel({
      name: req.body.name,
      description: req.body.description,
      rating: req.body.rating,
      image: image_filename,
    });

    await movie.save();
    res.status(201).json({
      success: true,
      message: "Movie Added Successfully",
      data: movie,
    });
  } catch (error) {
    console.error("Error adding movie:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Error adding movie",
    });
  }
};

export { addMovie };