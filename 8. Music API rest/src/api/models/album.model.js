const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AlbumSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    year: { type: Number, required: true, trim: true },
    description: { type: String, required: false, trim: true },
    cover: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const Album = mongoose.model("Album", AlbumSchema);
module.exports = Album;
