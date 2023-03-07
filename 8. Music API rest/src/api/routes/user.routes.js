const express = require("express");

const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/user.controller");

const UserRoutes = express.Router();

UserRoutes.get("/login", loginUser);
UserRoutes.get("/register", registerUser);
UserRoutes.get("/logout", logoutUser);

module.exports = UserRoutes;
