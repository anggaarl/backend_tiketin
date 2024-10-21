import movieModel from "../models/movieModel.js";

// add movie 
const addMovie = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const movie = new movieModel({
    name:req.body.name,
    description:req.body.description,
    rating:req.body.rating,
    image:image_filename
  })

  try {
    await movie.save();
    res.json({success:true, message:"Movie Added"})
  } catch (error) {
    console.log(error)
    res.json({success:false, message:"Error"})    
  }

}

export {addMovie}