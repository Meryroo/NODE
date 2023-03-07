const Artist = require("../models/artist.model");
const { deleteImgCloudinary } = require("../../middlewares/files.middleware");
const getAllArtists = async (req, res, next) => {
  try {
    const artists = await Artist.find().populate("artist");
    return res.status(200).json(artists);
  } catch (error) {
    return next(error);
  }
};

const createArtist = async (req, res, next) => {
  try {
    const newArtist = new Artist({
      ...req.body,
      image: req.file ? req.file.path : "Not image found",
    });
    const createdArtist = await newArtist.save();
    return res.status(200).json(createdArtist);
  } catch (error) {
    return next("error creating artist", error);
  }
};

const editArtist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newArtist = new Artist(req.body);
    newArtist._id = id;
    const originalArtist = await Artist.findById(id);
    if (req.file) {
      deleteImgCloudinary(originalArtist.image);
      newArtist.image = req.file.path;
    }
    await Artist.findByIdAndUpdate(id, newArtist);

    return res.status(200).json(newArtist);
  } catch (error) {
    return next("error editing Artist", error);
  }
};

module.exports = { getAllArtists, createArtist, editArtist };
