import Type from "../models/Type.js"
import asyncHandler from "../middlewares/asyncHandler.js"

const createType = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body

    if (!name) {
      return res.json({ error: "Name is Required" })
    }

    const existingType = await Type.findOne({ name })

    if (existingType) {
      return res.json({ error: "Already Exsist" })
    }

    const type = await new Type({ name })
    res.json(type)
  } catch (error) {
    console.log(error);
    return res.status(400).json(error)
  }
})

const updateType = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body
    const { id } = req.params

    const type = await Type.findOne({ _id: id })

    if (!type) {
      return res.status(404).json({ error: "type Not Found" })
    }

    type.name = name
    const updatedType = await type.save()
    res.json(updatedType)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" })
  }
})

const removeType = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params
    const removed = await Type.findByIdAndDelete(id)

    if (!removed) {
      return res.status(404).json({ error: "Type Not Found" })
    }

    res.json(removed)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" })
  }
})

const listTypes = asyncHandler(async (req, res) => {
  try {
    const all = await Type.find({});
    res.json(all);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
});

const readType = asyncHandler(async (req, res) => {
  try {
    const type = await Type.findOne({ _id: req.params.id });
    res.json(type);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.message);
  }
});

export {
  createType,
  updateType,
  removeType,
  listTypes,
  readType,
}