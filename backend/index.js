import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import genreRoutes from "./routes/genreRoutes.js";
import typeRoutes from "./routes/typeRoutes.js"
import movieRoutes from "./routes/movieRoutes.js"
import episodeRoutes from "./routes/episodeRoutes.js"

dotenv.config();
connectDb()

const App = express()

App.use(express.json())
App.use(express.urlencoded({ extended: true }))
App.use(cookieParser())

const PORT = process.env.PORT || 3000

//routes
App.use("/api/v1/users", userRoutes);
App.use("/api/v1/genre", genreRoutes)
App.use("/api/v1/type", typeRoutes)
App.use("/api/v1/movies", movieRoutes)
App.use("/api/v1/episode", episodeRoutes)

App.listen(PORT, () => console.log(`Server is running on port ${PORT}`));