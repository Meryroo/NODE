const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArtistSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    albums: [{ type: mongoose.Types.ObjectId, ref: "albums" }],
  },
  {
    timestamps: true,
  }
);

const Artist = mongoose.model("Artist", ArtistSchema);
module.exports = Artist;
