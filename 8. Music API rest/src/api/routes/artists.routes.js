const express = require("express");
const { upload } = require("../../middlewares/files.middleware");
const { isAuth } = require("../../middlewares/auth.middleware");
const {
  getAllArtists,
  createArtist,
  editArtist,
} = require("../controllers/artists.controller");

const ArtistsRoutes = express.Router();

ArtistsRoutes.get("/", getAllArtists);
ArtistsRoutes.post("/", [isAuth], upload.single("image"), createArtist);
ArtistsRoutes.patch("/:id", upload.single("image"), editArtist);

module.exports = ArtistsRoutes;
