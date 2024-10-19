import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const EpisodeSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, },
        video: {type: String, required: true, },
        published: {type: String, required: true, },
        Movie: {
            type: ObjectId,
            ref: "Movie",
            required: true,
        }
    }, {timestamps: true}
)

const Episode = mongoose.model("Episode", EpisodeSchema)
export default Episode