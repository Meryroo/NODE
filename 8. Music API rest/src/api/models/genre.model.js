const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema(
  {
    genre: { type: String, required: true, trim: true },
    origin: { type: Number, required: true, trim: true },
    founder: { type: String, required: true, trim: true },
    artists: [{ type: mongoose.Types.ObjectId, ref: "artists" }],
  },
  {
    timestamps: true,
  }
);

const Genre = mongoose.model("Genre", GenreSchema);
module.exports = Genre;
