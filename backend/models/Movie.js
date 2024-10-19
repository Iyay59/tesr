import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const reviwSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

const MovieSchema = new mongoose.Schema(
  {
    name: {
      tye: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    details: {
      type: String,
      required: true,
    },

    genre: {
      type: ObjectId,
      ref: " Genre",
      required: true,
    },

    type: {
      type: ObjectId,
      ref: "Type",
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    Episode: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Episode",
    },
    reviws: [reviwSchema],
    numReviews: { type: Number, required: true, default: 0 },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", MovieSchema);
export default Movie;
