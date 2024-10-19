import mongoose from "mongoose";

const GenreSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxLenth: 32,
            unique: true,
        },
    }, { timestamps: true }
)

const Genre = mongoose.model("Genre", GenreSchema)
export default Genre