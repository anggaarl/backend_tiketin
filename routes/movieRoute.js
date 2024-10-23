// import express from "express"
// import { addMovie } from "../controllers/movieController.js"
// import multer from "multer"
// // const multer = require('multer');

// const movieRouter = express.Router();

// // image storage engine
// const storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     return cb (null, `${Date.now()}${file.originalname}`)
//   }
// })

// const upload = multer({storage:storage})

// movieRouter.post("/add", upload.single("image"),  addMovie)



// export default movieRouter;
