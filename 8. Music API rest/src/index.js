const connect = require("./utils/connect");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const GenreRoutes = require("./api/routes/genre.routes");
const ArtistsRoutes = require("./api/routes/artists.routes");
const UserRoutes = require("./api/routes/user.routes");
const { configCloudinary } = require("./middlewares/files.middleware");
dotenv.config;

const PORT = process.env.PORT;
configCloudinary();

const server = express();
connect();

server.use(
  cors({
    origin: "*",
    Credential: true,
  })
);
server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ limit: "5mb", extended: true }));

server.use("/api/v1/genres", GenreRoutes);
server.use("/api/v1/artists", ArtistsRoutes);
server.use("/api/v1/user", UserRoutes);

server.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  return next(error);
});

server.disabled("x-powered-by");

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
