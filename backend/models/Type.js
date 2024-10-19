import mongoose from "mongoose";

const TypeSchema = new mongoose.Schema(
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

const Type = mongoose.model("Type", TypeSchema)
export default Type