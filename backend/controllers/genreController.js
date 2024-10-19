import Genre from "../models/Genre.js"
import asyncHandler from "../middlewares/asyncHandler.js"

const createGenre = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body

    if (!name) {
      return res.json({ error: "Name is Required" })
    }

    const existingGenre = await Genre.findOne({ name })

    if (existingGenre) {
      return res.json({ error: "Already Exsist" })
    }

    const genre = await new Genre({ name })
    res.json(genre)
  } catch (error) {
    console.log(error);
    return res.status(400).json(error)
  }
})

const updateGenre = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body
    const { id } = req.params

    const genre = await Genre.findOne({ _id: id })

    if (!genre) {
      return res.status(404).json({ error: "Genre Not Found" })
    }

    genre.name = name
    const updatedGenre = await genre.save()
    res.json(updatedGenre)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" })
  }
})

const removeGenre = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    const removed = await Genre.findByIdAndDelete(id)

    if (!removed) {
      return res.status(404).json({ error: "Genre Not Found" })
    }

    res.json(removed)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" })
  }
})

const listGenres = asyncHandler(async (req, res) => {
  try {
    const all = await Genre.find({});
    res.json(all);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
});

const readGenre = asyncHandler(async (req, res) => {
  try {
    const genre = await Genre.findOne({ _id: req.params.id });
    res.json(genre);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
});

export {
  createGenre,
  updateGenre,
  removeGenre,
  listGenres,
  readGenre,
}