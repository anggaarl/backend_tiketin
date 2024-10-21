import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import movieRouter from "./routes/movieRoute.js"

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoint
app.use("/api/movie", movieRouter)

app.get("/", (req, res) => {
  res.send("API Working")
})

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
